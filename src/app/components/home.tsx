"use client";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiRoblox, SiVisualstudiocode, SiNextdotjs, SiTypescript, SiLua, SiUbuntu, SiWindows, SiPython, SiMongodb, SiOpenai, SiPostgresql, SiUpstash } from "react-icons/si";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Particles from "./particles";
import { Tooltip } from "react-tooltip";

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
            <nav className="my-16 animate-fade-in">
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
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
            <motion.h1
                className="hover:text-black hover:border-1 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                StarVSK
            </motion.h1>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-300 ">
                    Hi, my name is Star, I'm building game development solutions for Roblox at{" "}
                    <Link
                        target="_blank"
                        href="https://northstar.gg"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        North Star Entertainment Group, Inc.
                    </Link> at night,
                    <br />
                    and working on{" "}
                    <Link
                        target="_blank"
                        href="https://oceanai.io"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        oceanai.io
                    </Link>{" "}
                    during the day.
                </h2>
                <div className="px-8 flex items-center justify-center mt-8">
                    <SiNextdotjs
                        data-tooltip-id="tooltip-nextjs"
                        data-tooltip-content="Next.js"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <FaReact
                        data-tooltip-id="tooltip-react"
                        data-tooltip-content="React"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <FaNodeJs
                        data-tooltip-id="tooltip-nodejs"
                        data-tooltip-content="Node.js"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiPostgresql
                        data-tooltip-id="tooltip-postgresql"
                        data-tooltip-content="PostgreSQL"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiMongodb
                        data-tooltip-id="tooltip-mongodb"
                        data-tooltip-content="MongoDB"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiUpstash
                        data-tooltip-id="tooltip-upstash"
                        data-tooltip-content="Upstash"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiRoblox
                        data-tooltip-id="tooltip-roblox"
                        data-tooltip-content="Roblox"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl ml-2 mr-12 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiOpenai
                        data-tooltip-id="tooltip-openai"
                        data-tooltip-content="OpenAI"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiWindows
                        data-tooltip-id="tooltip-windows"
                        data-tooltip-content="Windows"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiUbuntu
                        data-tooltip-id="tooltip-ubuntu"
                        data-tooltip-content="Ubuntu Linux"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiVisualstudiocode
                        data-tooltip-id="tooltip-vscode"
                        data-tooltip-content="Visual Studio Code"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl ml-2 mr-12 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiPython
                        data-tooltip-id="tooltip-python"
                        data-tooltip-content="Python"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiTypescript
                        data-tooltip-id="tooltip-typescript"
                        data-tooltip-content="TypeScript"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                    <SiLua
                        data-tooltip-id="tooltip-lua"
                        data-tooltip-content="Lua"
                        data-tooltip-place="bottom"
                        className="hover:animate-pulse text-4xl mx-2 text-zinc-500 hover:text-zinc-300 cursor-pointer"
                    />
                </div>
                <Tooltip id="tooltip-nextjs" />
                <Tooltip id="tooltip-react" />
                <Tooltip id="tooltip-nodejs" />
                <Tooltip id="tooltip-postgresql" />
                <Tooltip id="tooltip-mongodb" />
                <Tooltip id="tooltip-upstash" />
                <Tooltip id="tooltip-roblox" />
                <Tooltip id="tooltip-openai" />
                <Tooltip id="tooltip-windows" />
                <Tooltip id="tooltip-ubuntu" />
                <Tooltip id="tooltip-vscode" />
                <Tooltip id="tooltip-python" />
                <Tooltip id="tooltip-typescript" />
                <Tooltip id="tooltip-lua" />
            </div>
        </motion.div>
    );
}
