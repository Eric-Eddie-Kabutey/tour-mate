"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export default function FloatingChat() {
    // Default to true assuming the page starts with the dark Hero section
    const [ isOverDarkSection, setIsOverDarkSection ] = useState(true);
    const chatRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const checkOverlap = () => {
            if (!chatRef.current) return;

            // Get the vertical center of the chat widget
            const chatRect = chatRef.current.getBoundingClientRect();
            const chatCenterY = chatRect.top + chatRect.height / 2;

            // Find all sections with dark background classes
            const darkSections = document.querySelectorAll('.bg-tour-darker-green, .bg-tour-dark-green');

            let overDark = false;
            darkSections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                // If the chat widget's center is inside the section's top/bottom bounds
                if (chatCenterY >= rect.top && chatCenterY <= rect.bottom) {
                    overDark = true;
                }
            });

            setIsOverDarkSection(overDark);
        };

        // Check on scroll, resize, and initial load
        window.addEventListener("scroll", checkOverlap, { passive: true });
        window.addEventListener("resize", checkOverlap, { passive: true });

        // Slight delay on initial mount to ensure DOM is fully painted
        setTimeout(checkOverlap, 100);

        return () => {
            window.removeEventListener("scroll", checkOverlap);
            window.removeEventListener("resize", checkOverlap);
        };
    }, []);

    // Dynamic Theme Variables
    const bgColor = isOverDarkSection ? "bg-white" : "bg-tour-dark-green";
    const textColor = isOverDarkSection ? "text-gray-900" : "text-white";
    const iconWrapperBg = isOverDarkSection ? "bg-[#E6F8EB]" : "bg-tour-green";
    const iconColor = isOverDarkSection ? "text-tour-green" : "text-white";
    const dotBorder = isOverDarkSection ? "border-white" : "border-tour-dark-green";

    return (
        <motion.button
            ref={chatRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className={`fixed bottom-6 right-6 z-[90] ${bgColor} ${textColor} px-4 py-3 rounded-full flex items-center space-x-3 shadow-[0_8px_30px_rgb(0,0,0,0.16)] border border-black/5 transition-colors duration-300 hover:scale-105`}
        >
            <div className={`w-8 h-8 ${iconWrapperBg} rounded-full flex items-center justify-center relative transition-colors duration-300`}>
                <MessageSquare className={`w-4 h-4 ${iconColor}`} />

                {/* Pulsing Online Indicator */}
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className={`relative inline-flex rounded-full h-3.5 w-3.5 bg-[#059C1C] border-2 ${dotBorder} transition-colors duration-300`}></span>
                </span>
            </div>

            <div className="text-left hidden sm:block">
                <p className="text-sm font-bold leading-tight">Chat with Aisha</p>
                <p className="text-xs text-tour-green font-medium leading-tight">AI Travel Assistant</p>
            </div>
        </motion.button>
    );
}