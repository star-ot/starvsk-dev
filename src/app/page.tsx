import React from "react";
import Home from "./components/home";
import { Inter } from 'next/font/google';
import { Sofia_Sans } from "next/font/google";
import FooterText from "./components/common/footer";
import ScrollBar from "./components/home/scrolling-bar";
const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

const SofiaSans = Sofia_Sans({ subsets: ['latin'] })

const inter = Inter({ subsets: ['latin'] })

export default function Homepage() {
    return (
        <>
            <main className={inter.className}>
                < Home />
                < FooterText />
            </main>
        </>
    );
}