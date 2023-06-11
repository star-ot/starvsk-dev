import React from "react";
import Home from "./components/home";
import FooterText from "./components/common/footer";

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Homepage() {
    return (
        <>
            < Home />
            < FooterText />
        </>
    );
}