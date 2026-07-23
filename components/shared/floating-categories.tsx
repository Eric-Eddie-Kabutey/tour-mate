"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Car, Calendar, CarTaxiFront, Compass, ShoppingBag, Plane, Wine } from "lucide-react";
import Link from "next/link";

const categories = [
    { name: "Stays", icon: Home, url: "/stays" },
    { name: "Car Rental", icon: Car, url: "/car-rental" },
    { name: "Events", icon: Calendar, url: "/events" },
    { name: "Airport Pickup", icon: CarTaxiFront, url: "/airport-pickup" },
    { name: "Tours", icon: Compass, url: "/tours" },
    { name: "Shops", icon: ShoppingBag, url: "/shops" },
    { name: "Flights", icon: Plane, url: "/flights" },
    { name: "Restaurants", icon: Wine, url: "/restaurants" },
];

export default function FloatingCategories() {
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const marqueeElement = document.getElementById("promo-marquee");

            if (marqueeElement) {
                const rect = marqueeElement.getBoundingClientRect();
                // If the bottom of the marquee scrolls past the main header (approx 70px)
                setIsVisible(rect.bottom < 70);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    // z-40 ensures it sits just under your main header (which is z-50)
                    className="fixed top-20 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
                >
                    {/* The bar itself */}
                    <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 flex items-center justify-between px-6 py-3 space-x-6 overflow-x-auto max-w-5xl w-full pointer-events-auto hide-scrollbar">
                        {categories.map((cat, index) => {
                            const Icon = cat.icon;
                            return (
                                <Link
                                    key={index}
                                    href={cat.url}
                                    className="flex flex-col items-center justify-center space-y-1.5 group min-w-[72px]"
                                >
                                    <Icon className="w-6 h-6 text-gray-600 group-hover:text-tour-green transition-colors" strokeWidth={1.5} />
                                    <span className="text-[11px] font-medium text-gray-500 group-hover:text-tour-green transition-colors whitespace-nowrap">
                                        {cat.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}