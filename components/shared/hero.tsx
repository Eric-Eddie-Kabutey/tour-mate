"use client";
import { motion, Variants } from "framer-motion";
import { Search, ChevronDown, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Extracted categories data
export const categories = [
    { name: "Stays", icon: "/assets/icons/stay.avif", href: "/stays" },
    { name: "Car Rental", icon: "/assets/icons/car-rental.avif", href: "/car-rental" },
    { name: "Events", icon: "/assets/icons/events.avif", href: "/events" },
    { name: "Airport Pickup", icon: "/assets/icons/airport-pickup.avif", href: "/airport-pickup" },
    { name: "Tours", icon: "/assets/icons/tours.avif", href: "/tours" },
    { name: "Shops", icon: "/assets/icons/shops.avif", href: "/shops" },
    { name: "Flights", icon: "/assets/icons/flights.avif", href: "/flights" },
    { name: "Restaurants", icon: "/assets/icons/restaurants.avif", href: "/restaurants" },
];

export interface HeroProps {
    backgroundImage: string;
    subtitle: string;
    activeCategory?: string;
    searchPlaceholder: string;
    searchDropdowns: string[];
}

export default function Hero({
    backgroundImage,
    subtitle,
    activeCategory,
    searchPlaceholder,
    searchDropdowns
}: HeroProps) {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
    };

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-tour-darker-green overflow-hidden pt-24 pb-12">
            {/* Dynamic Background Image & Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0A0A0A]/90" />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center mt-8 text-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-300 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                        Africa&apos;s Premier Travel Marketplace
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tour-white mb-6">
                        Your Africa Journey, <br className="hidden md:block" />
                        <span className="text-tour-green">Your Way</span>
                    </h1>
                    <p className="text-gray-200 text-sm md:text-base font-light mb-12 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Categories Carousel / Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
                >
                    {categories.map((cat, idx) => {
                        const isActive = activeCategory === cat.name;

                        return (
                            <Link href={cat.href} key={idx}>
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col items-center gap-2 group cursor-pointer"
                                >
                                    <div className={`w-14 h-14 md:w-16 md:h-16 backdrop-blur-md rounded-2xl flex items-center justify-center transition duration-300 ${isActive
                                            ? "bg-white/20 border-2 border-tour-green shadow-[0_0_15px_rgba(5,156,28,0.5)] scale-105"
                                            : "bg-white/10 border border-white/10 group-hover:bg-white/20"
                                        }`}>
                                        <Image src={cat.icon} alt={cat.name} width={32} height={32} className="w-8 h-8 object-contain drop-shadow-md" />
                                    </div>
                                    <span className={`text-xs md:text-sm font-medium transition-colors ${isActive ? "text-tour-green font-bold" : "text-tour-white"
                                        }`}>
                                        {cat.name}
                                    </span>
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>

                {/* Dynamic Search Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="w-full max-w-4xl bg-tour-white rounded-full p-2 flex flex-col md:flex-row items-center justify-between shadow-2xl space-y-2 md:space-y-0"
                >
                    {/* Search Input */}
                    <div className="flex-1 flex items-center px-4 py-2 w-full">
                        <Search className="w-5 h-5 text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="bg-transparent outline-none text-gray-700 w-full text-sm md:text-base placeholder:text-gray-400"
                        />
                    </div>

                    {/* Dynamic Dropdowns */}
                    {searchDropdowns.map((dropdown, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                            <div className="hidden md:block w-px h-8 bg-gray-200 mx-2"></div>
                            <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-full w-full md:w-auto justify-between">
                                <span className="text-gray-600 text-sm md:text-base whitespace-nowrap">{dropdown}</span>
                                <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
                            </div>
                        </div>
                    ))}

                    {/* Search Button */}
                    <button className="w-full md:w-auto bg-tour-green hover:bg-[#048417] text-tour-white px-8 py-3 rounded-full font-medium transition duration-300 md:ml-2">
                        Search
                    </button>
                </motion.div>

                {/* Statistics section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-tour-white"
                >
                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold">50+</h3>
                        <p className="text-xs md:text-sm text-gray-300 font-light">African Cities</p>
                    </div>
                    <div className="w-px h-10 bg-white/20 hidden md:block"></div>
                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold">12k+</h3>
                        <p className="text-xs md:text-sm text-gray-300 font-light">Verified Listings</p>
                    </div>
                    <div className="w-px h-10 bg-white/20 hidden md:block"></div>
                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold flex items-center justify-center gap-1">
                            4.9<span className="text-lg">★</span>
                        </h3>
                        <p className="text-xs md:text-sm text-gray-300 font-light">Avg. Rating</p>
                    </div>
                    <div className="w-px h-10 bg-white/20 hidden md:block"></div>
                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold">24/7</h3>
                        <p className="text-xs md:text-sm text-gray-300 font-light">Support</p>
                    </div>
                </motion.div>
            </div>

            {/* Note: I recommend moving the Floating Chat Button out of here into app/layout.tsx so it persists across all pages! */}
        </div>
    );
}