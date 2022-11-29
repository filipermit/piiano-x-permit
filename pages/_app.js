import "../styles/globals.css";
import React, { useState, createContext } from "react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

export const DemoContext = createContext({
	securedWithVault: false,
});

function MyApp({ Component, pageProps }) {
	const [toggleSafeMode, setToggleSafeMode] = useState(false);

	return (
		<DemoContext.Provider
			value={{
				toggleSafeMode,
				setToggleSafeMode,
			}}
		>
			<MantineProvider>
				<NotificationsProvider>
					<Component {...pageProps} />
				</NotificationsProvider>
			</MantineProvider>
		</DemoContext.Provider>
	);
}

export default MyApp;
