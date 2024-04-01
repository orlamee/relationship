import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Providers from "@/components/progress";

const myFont = localFont({
	src: "../fonts/Satoshi-Regular.otf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Ardilla | Relationship",
	description:
		"Have you saved today? There is no better time to kickstart your saving journey with Ardilla. Its smooth, easy, and automatic.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={myFont.className}>
				<Toaster />

				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
