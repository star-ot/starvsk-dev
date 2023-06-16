"use client";
import CenteredText from "./text-cycle";
import Link from "next/link";

const texts = [
    "Built with Next.js",
    "Made with React",
    "Made with TypeScript",
    "Made with TailwindCSS",
    "Made with Framer Motion",
    "Deployed on Vercel",
    "Made with ❤️",
];

export default function FooterText() {
    return (
        <Link href="https://github.com/star-ot/starvsk-dev" target="_blank">
            <div className="hover:text-indigo-500 hover:underline hover:cursor-pointer text-zinc-300 fixed bottom-0 w-screen py-4">
                <CenteredText texts={texts} duration={2000} />
            </div>
        </Link>
    );
}