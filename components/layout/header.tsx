"use client";
import { useState, useEffect } from "react";
import DesktopNavbar from "./desktop-navbar";
import MobileNavbar from "./mobile-navbar";

export default function Header() {
    const [ isScrolled, setIsScrolled ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change background after scrolling 50px
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-tour-white shadow-md  py-0"
                    : "bg-transparent py-2"
                }`}
        >
            <DesktopNavbar isScrolled={isScrolled} />
            <MobileNavbar isScrolled={isScrolled} />
        </header>
    );
}