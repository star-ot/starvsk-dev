import React from "react";
import FooterText from "../components/common/footer";
import Hero from "../components/about/hero";

const navigation = [
    { name: "Home", href: "/"},
    { name: "About", href: "/about"},
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Homepage() {
    return (
        <>
            < Hero />
            < FooterText />
        </>
    );
}