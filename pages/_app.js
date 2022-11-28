import "../styles/globals.css";
import React from "react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

function MyApp({ Component, pageProps }) {
	return (
		<MantineProvider>
			<NotificationsProvider>
				<Component {...pageProps} />
			</NotificationsProvider>
		</MantineProvider>
	);
}

export default MyApp;
