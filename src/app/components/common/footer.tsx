"use client";
import CenteredText from "./text-cycle";

const texts = [
    "Made with Next.js",
    "Made with React",
    "Made with TypeScript",
    "Made with Upstash",
    "Made with TailwindCSS",
    "Made with Framer Motion",
    "Made with Vercel",
    "Made with Love",
];

export default function FooterText() {
    return (
        <div className="text-zinc-300 absolute bottom-0 w-screen py-4">
            <CenteredText texts={texts} duration={2000} />
        </div>
    );
}