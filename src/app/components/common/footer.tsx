"use client";
import CenteredText from "./text-cycle";

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
        <div className="text-zinc-300 fixed bottom-0 w-screen py-4">
            <CenteredText texts={texts} duration={2000} />
        </div>
    );
}