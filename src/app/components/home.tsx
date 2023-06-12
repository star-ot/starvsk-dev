"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Particles from "./particles";
import TechStack from "./home/tech-stack";

const navigation = [
    { name: "Projects", href: "/projects" },
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
        opacity: 0,
        x: "100%",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

export default function Home() {
    return (
        <motion.div
            key="home"
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
        >
            <nav className="my-4 sm:my-8 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <motion.a
                                className="text-md duration-500 text-zinc-500 hover:text-zinc-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                animate="exit"
                            >
                                {item.name}
                            </motion.a>
                        </Link>
                    ))}
                </ul>
            </nav>
            <div className="w-screen h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <motion.h1
                className="hover:text-black hover:border-1 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                StarVSK
            </motion.h1>
            <div className="w-screen h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-8 px-4 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-300 sm:text-base w-2/4 mx-auto px-4 sm:px-0">
                    Hi, my name is Star, I am building game & web development solutions for Roblox at{" "}
                    <Link
                        target="_blank"
                        href="https://northstar.gg"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        North Star Entertainment Group, Inc.
                    </Link>{" "}
                    at night, and working on{" "}
                    <Link
                        target="_blank"
                        href="https://oceanai.io"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        oceanai.io
                    </Link>{" "}
                    during the day.
                </h2>
                <TechStack />
            </div>
        </motion.div>
    );
}
