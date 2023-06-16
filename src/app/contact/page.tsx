"use client";
import { Mail, Twitter } from "lucide-react";
import { SiDiscord, SiRoblox, SiTiktok } from "react-icons/si";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import FooterText from "../components/common/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://twitter.com/StarVSK",
		label: "Twitter",
		handle: "@StarVSK",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:hi@starvsk.dev",
		label: "Email",
		handle: "hi@starvsk.dev",
	},
	{
		icon: <SiDiscord size={20} />,
		href: "https://discord.northstar.gg",
		label: "Discord",
		handle: "StarVSK",
	},
	{
		icon: <SiRoblox size={20} />,
		href: "https://www.roblox.com/users/340730/profile",
		label: "Roblox",
		handle: "StarVSK",
	},
	{
		icon: <SiTiktok size={20} />,
		href: "https://www.tiktok.com/@starvsk",
		label: "TikTok",
		handle: "StarVSK",
	},
];

const pageVariants = {
	initial: {
		opacity: 0,
		x: "-100%",
	},
	enter: {
		opacity: 1,
		x: "0%",
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	exit: {
		opacity: 1,
		x: "100%",
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};


export default function Example() {
	return (
		<main className={inter.className}>
			<motion.div
				key="contact"
				className=""
				initial="initial"
				animate="enter"
				exit="exit"
				variants={pageVariants}
			>
				<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
					<Navigation />
					<div className="container flex items-center justify-center min-h-screen mx-auto">
						<div className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mx-auto mt-4 sm:mt-0">
							{socials.map((s) => (
								<Card
									key={s.href}
								>
									<Link
										href={s.href}
										target="_blank"
										className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
									>
										<span
											className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
											aria-hidden="true"
										/>
										<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
											{s.icon}
										</span>{" "}
										<div className="z-10 flex flex-col items-center">
											<span className="sm:text-xs md:text-sm text-sm font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
												{s.handle}
											</span>
											<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
												{s.label}
											</span>
										</div>
									</Link>
								</Card>
							))}
						</div>
					</div>
					<FooterText />
				</div>
			</motion.div>
		</main>
	);
}
