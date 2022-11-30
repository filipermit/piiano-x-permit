import React, { useState, useEffect, useContext } from "react";
import { DemoContext } from "./_app.js";
import { useRouter } from "next/router";
import {
	Avatar,
	Text,
	Button,
	Paper,
	Card,
	Image,
	Group,
	Badge,
	ActionIcon,
	createStyles,
	Tooltip,
	NativeSelect,
	Switch,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useClipboard } from "@mantine/hooks";
import { IconCheck, IconX, IconHeart, IconCopy } from "@tabler/icons";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

import styles from "../styles/Home.module.css";
import db from "../utils/DB";
import { access } from "../utils/access";

export default function Demo(props) {
	const [login, setLogin] = useState("");
	const [cookie, setCookie, removeCookie] = useCookies(["Authorization"]);
	const router = useRouter();

	const context = useContext(DemoContext);

	// Initialize user to null on load
	useEffect(() => {
		removeCookie(["Authorization"]);
		setLogin("");
		router.replace(router.asPath);
	}, []);

	const pages = props.info.map((info) => {
		var uid = info.email;
		info.uid = uid;
		return <DemoPage key={uid} active_uid={login} {...info} />;
	});
	return (
		<div className={styles.demoContainer}>
			<div className={styles.controls}>
				<Switch
					label="Toggle Safe Mode"
					onClick={() => context.setToggleSafeMode(!context.toggleSafeMode)}
				/>
				<NativeSelect
					data={[
						{ value: "unknown@gmail.com", label: "Stranger" },
						{ value: "ariel@piiano.com", label: "Ariel - Friend" },
						{ value: "filip@permit.io", label: "Filip - Admin" },
					]}
					label="Choose an account"
					description="Login as"
					value={login}
					onChange={(event) => {
						setCookie("Authorization", "Bearer " + event.target.value);
						setLogin(event.target.value);
						router.replace(router.asPath);
					}}
				/>
			</div>
			{pages}
		</div>
	);
}

// The main demo page
function DemoPage({ uid, avatar, name, email, job, active_uid }) {
	const [error, setError] = useState(false);
	const [details, setDetails] = useState(null);
	const [prevActiveUid, setPrevActiveUid] = useState(active_uid);

	useEffect(() => {
		if (error) {
			showNotification({
				title: "403: Unauthorized",
				message: "You don't have the right permissions to do this.",
				color: "red",
				autoClose: 2500,
			});
		}
		setError(false);
	}, [error]);

	if (prevActiveUid != active_uid) {
		setPrevActiveUid(active_uid);
		setDetails(null);
	}

	const learnMore = async () => {
		// Checking if the current user can view personal info on the card resource.
		const res = await fetch("/api/auth/getUserDetails/" + uid);
		if (res.status === 200) {
			const resp = await res.json();
			setDetails(resp.details);
		} else {
			setError(true);
		}
	};

	return (
		<div className={styles.main}>
			{details != null ? (
				<>
					<LearnMoreBadgeCard
						uid={uid}
						avatar={avatar}
						title={details.title + (uid == active_uid ? " (You)" : "")}
						description={details.description}
						country={details.country}
						badges={details.badges}
						visibility={() => setDetails(null)}
						active_uid={active_uid}
					/>
				</>
			) : (
				<Paper
					radius="md"
					withBorder
					p="lg"
					sx={(theme) => ({
						backgroundColor: theme.white,
					})}
				>
					<Avatar src={avatar} size={120} radius={120} mx="auto" />
					<Text align="center" size="lg" weight={500} mt="md">
						{name + (uid == active_uid ? " (You)" : "")}
					</Text>
					<Text align="center" color="dimmed" size="sm">
						{email} • {job}
					</Text>

					<Button variant="default" fullWidth mt="md" onClick={learnMore}>
						Learn more
					</Button>
				</Paper>
			)}
		</div>
	);
}

function LearnMoreBadgeCard({
	uid,
	avatar,
	title,
	description,
	country,
	badges,
	visibility,
	active_uid,
}) {
	const useStyles = createStyles((theme) => ({
		card: {
			width: 280,
			backgroundColor:
				theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		},

		section: {
			borderBottom: `1px solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[4]
					: theme.colors.gray[3]
			}`,
			paddingLeft: theme.spacing.md,
			paddingRight: theme.spacing.md,
			paddingBottom: theme.spacing.md,
		},

		like: {
			color: theme.colors.red[6],
		},

		label: {
			textTransform: "uppercase",
			fontSize: theme.fontSizes.xs,
			fontWeight: 700,
		},
	}));

	const { classes, theme } = useStyles();
	const features = badges.map((badge) => (
		<Badge
			color={theme.colorScheme === "dark" ? "dark" : "gray"}
			key={badge.label}
			leftSection={badge.emoji}
		>
			{badge.label}
		</Badge>
	));

	return (
		<Card withBorder radius="md" p="md" className={classes.card}>
			<Card.Section>
				<Image src={avatar} alt={title} height={180} />
			</Card.Section>

			<Card.Section className={classes.section} mt="md">
				<Group position="apart">
					<Text size="lg" weight={500}>
						{title}
					</Text>
					<Badge size="sm">{country}</Badge>
				</Group>
				<Text size="sm" mt="xs">
					{description}
				</Text>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text mt="md" className={classes.label} color="dimmed">
					Hobbies
				</Text>
				<Group spacing={7} mt={5}>
					{features}
				</Group>
			</Card.Section>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<ButtonCopy uid={uid} active_uid={active_uid} />
			</div>

			<Group mt="xs">
				<Button radius="md" style={{ flex: 1 }} onClick={visibility}>
					Back to Profile
				</Button>
				<ActionIcon variant="default" radius="md" size={36}>
					<IconHeart size={18} className={classes.like} stroke={1.5} />
				</ActionIcon>
			</Group>
		</Card>
	);
}

// Fetches the SSN stored in the backend.
async function fetchSSNNumber(path, { uid, active_uid }) {
	var SSNNumber;

	const res = await fetch(path + uid);

	if (res.status === 200) {
		const { ssn } = await res.json();

		if (active_uid == uid) {
			SSNNumber = ssn;
		} else {
			// Masking sensitive information on the frontend.
			SSNNumber = "XXX-XX-" + ssn.split("-")[2];
		}
		Swal.fire({
			icon: "success",
			title: "Social Security Number",
			text: SSNNumber,
			showConfirmButton: false,
			timer: 3000,
		});
	} else {
		SSNNumber = "Unauthorized to view SSN";
		Swal.fire({
			icon: "error",
			title: "Social Security Number",
			text: SSNNumber,
			showConfirmButton: false,
			timer: 3000,
		});
	}
	return SSNNumber;
}

function ButtonCopy(uid, active_uid) {
	const context = useContext(DemoContext);

	const clipboard = useClipboard();
	return (
		<>
			<Tooltip
				label="SSN copied successfully."
				offset={5}
				position="bottom"
				radius="sm"
				transition="slide-down"
				transitionDuration={100}
				opened={clipboard.copied}
			>
				<Button
					variant="light"
					rightIcon={
						clipboard.copied ? (
							<IconCheck size={20} stroke={1.5} />
						) : (
							<IconCopy size={20} stroke={1.5} />
						)
					}
					radius="xl"
					size="xs"
					styles={{
						root: {
							paddingRight: 14,
							height: 34,
							marginTop: 20,
							marginBottom: 20,
						},
						rightIcon: { marginLeft: 22 },
					}}
					onClick={() => {
						clipboard.copy(
							fetchSSNNumber(
								context.toggleSafeMode
									? "/api/auth/getSSNFromVault/"
									: "/api/auth/getSSN/",
								uid,
								active_uid
							)
						);
					}}
				>
					View & Copy SSN Number
				</Button>
			</Tooltip>
		</>
	);
}

export async function getServerSideProps(context) {
	var info = [];
	var user = access.getUser(context.req);
	if (user) {
		info = await db.query("SELECT name,email,job,avatar FROM users");
	}
	return {
		props: { info }, // will be passed to the page component as props
	};
}
