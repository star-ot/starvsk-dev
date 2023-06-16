"use client";
import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
import { motion } from "framer-motion";
import ProjectList from "../components/projects/project-list";
import FooterText from "../components/common/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Contact", href: "/contact" },
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

export default function Projects() {
	return (
		<main className={inter.className}>
			<Particles
						className="absolute inset-0 -z-10 animate-fade-in"
						quantity={200}
					/>
			<motion.div
				key="projects"
				className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"
				initial="initial"
				animate="enter"
				exit="exit"
				variants={pageVariants}
			>
				<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
					<nav className="pt-8 my-16 animate-fade-in">
						<ul className="flex items-center justify-center gap-4">
							{navigation.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
								>
									{item.name}
								</Link>
							))}
						</ul>
					</nav>
					<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					
					<h1 className="pb-10 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
						Projects
					</h1>

					<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<div className="w-2/4 text-center animate-fade-in">
						<h2 className="pt-4 text-sm text-zinc-300 ">
							Language Filter:
						</h2>
					</div>
					<ProjectList />
					
				</div>
				
			</motion.div>
			<FooterText />
		</main>
	);
}
