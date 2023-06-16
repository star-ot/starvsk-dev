"use client";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiRoblox, SiVisualstudiocode, SiNextdotjs, SiTypescript, SiLua, SiUbuntu, SiWindows, SiPython, SiMongodb, SiOpenai, SiPostgresql, SiUpstash } from "react-icons/si";
import { Tooltip } from "react-tooltip";

export default function TechStack() {
    return (
        <>
            <div className="w-full px-4 flex flex-wrap justify-center mt-8">
                <SiNextdotjs
                    data-tooltip-id="tooltip-nextjs"
                    data-tooltip-content="Next.js"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-white cursor-pointer"
                />
                <FaReact
                    data-tooltip-id="tooltip-react"
                    data-tooltip-content="React"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-blue-500 cursor-pointer"
                />
                <FaNodeJs
                    data-tooltip-id="tooltip-nodejs"
                    data-tooltip-content="Node.js"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-green-500 cursor-pointer"
                />
                <SiPostgresql
                    data-tooltip-id="tooltip-postgresql"
                    data-tooltip-content="PostgreSQL"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-blue-300 cursor-pointer"
                />
                <SiMongodb
                    data-tooltip-id="tooltip-mongodb"
                    data-tooltip-content="MongoDB"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-green-600 cursor-pointer"
                />
                <SiUpstash
                    data-tooltip-id="tooltip-upstash"
                    data-tooltip-content="Upstash"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-green-500 cursor-pointer"
                />
                <SiRoblox
                    data-tooltip-id="tooltip-roblox"
                    data-tooltip-content="Roblox"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl ml-2 mr-6 sm:mr-12 text-zinc-500 hover:text-white cursor-pointer"
                />
                <SiOpenai
                    data-tooltip-id="tooltip-openai"
                    data-tooltip-content="OpenAI"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-green-300 cursor-pointer"
                />
                <SiWindows
                    data-tooltip-id="tooltip-windows"
                    data-tooltip-content="Windows"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-blue-500 cursor-pointer"
                />
                <SiUbuntu
                    data-tooltip-id="tooltip-ubuntu"
                    data-tooltip-content="Ubuntu Linux"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-orange-500 cursor-pointer"
                />
                <SiVisualstudiocode
                    data-tooltip-id="tooltip-vscode"
                    data-tooltip-content="Visual Studio Code"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl ml-2 mr-6 sm:mr-12 text-zinc-500 hover:text-blue-500 cursor-pointer"
                />
                <SiPython
                    data-tooltip-id="tooltip-python"
                    data-tooltip-content="Python"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-yellow-500 cursor-pointer"
                />
                <SiTypescript
                    data-tooltip-id="tooltip-typescript"
                    data-tooltip-content="TypeScript"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-blue-500 cursor-pointer"
                />
                <SiLua
                    data-tooltip-id="tooltip-lua"
                    data-tooltip-content="Lua"
                    data-tooltip-place="bottom"
                    className="hover:animate-pulse text-3xl sm:text-4xl mx-2 text-zinc-500 hover:text-blue-400 cursor-pointer"
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
        </>
    )
}