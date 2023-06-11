import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "StarVSK.dev",
		template: "%s | StarVSK.dev",
	},
	description: "Software engineer at OceanAI.io and founder of northstar.gg",
	openGraph: {
		title: "StarVSK.dev",
		description:
			"Software engineer at OceanAI.io and founder of northstar.gg",
		url: "https://starvsk.dev",
		siteName: "StarVSK.dev",
		images: [
			{
				url: "https://starvsk.dev/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "StarVSK.dev",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable].join(" ")}>
			<head>
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
			</body>
		</html>
	);
}
