"use client";
import { motion, Variants } from "framer-motion";
import { Search, ChevronDown, MessageSquare } from "lucide-react";
import Image from "next/image";

const categories = [
    { name: "Stays", icon: "/assets/icons/stay.avif" },
    { name: "Car Rental", icon: "/assets/icons/car-rental.avif" },
    { name: "Events", icon: "/assets/icons/events.avif" },
    { name: "Airport Pickup", icon: "/assets/icons/airport-pickup.avif" },
    { name: "Tours", icon: "/assets/icons/tours.avif" },
    { name: "Shops", icon: "/assets/icons/shops.avif" },
    { name: "Flights", icon: "/assets/icons/flights.avif" },
    { name: "Restaurants", icon: "/assets/icons/restaurants.avif" },
];

export default function Hero() {
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
        <div className="relative w-full min-h-screen pt-24 flex flex-col items-center justify-center bg-tour-darker-green overflow-hidden">
            {/* Background Image & Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A0A0A]/90" />

            {/* Main Content Content */}
            <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center mt-12 text-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-300 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                        Africa&apos;s Premier Travel Marketplace
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-tour-white mb-6">
                        Your Africa Journey, <br className="hidden md:block" />
                        <span className="text-tour-green">Your Way</span>
                    </h1>
                    <p className="text-gray-200 text-sm md:text-base font-light mb-12 max-w-2xl mx-auto">
                        Hotels, car rentals, tours, flights and local experiences — seamlessly connected.
                    </p>
                </motion.div>

                {/* Categories Carousel / Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
                >
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex flex-col items-center gap-2 cursor-pointer group"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-white/20 transition duration-300">
                                <Image src={cat.icon} alt={cat.name} width={32} height={32} className="w-8 h-8 object-contain drop-shadow-md" />
                            </div>
                            <span className="text-tour-white text-xs md:text-sm font-medium">{cat.name}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="w-full max-w-4xl bg-tour-white rounded-full p-2 flex  items-center justify-between shadow-2xl space-y-2 md:space-y-0"
                >
                    <div className="flex-1 flex items-center px-4 py-2 w-full">
                        <Search className="w-5 h-5 text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Where in Africa?"
                            className="bg-transparent outline-none text-gray-700 w-full text-sm md:text-base"
                        />
                    </div>

                    <div className="hidden md:block w-px h-8 bg-gray-200 mx-2"></div>

                    <div className="hidden md:flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-full w-full md:w-auto justify-between">
                        <span className="text-gray-600 text-sm md:text-base">Category</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
                    </div>

                    <div className="hidden md:block w-px h-8 bg-gray-200 mx-2"></div>

                    <div className="hidden md:flex items-center px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-full w-full md:w-auto justify-between">
                        <span className="text-gray-600 text-sm md:text-base">When?</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
                    </div>

                    <button className="w-auto bg-tour-green hover:bg-[#048417] text-tour-white px-8 py-3 rounded-full font-medium transition duration-300">
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

            {/* Floating Chat Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring" }}
                className="fixed bottom-6 right-6 z-50 bg-tour-dark-green text-tour-white px-4 py-3 rounded-full flex items-center space-x-3 shadow-2xl border border-white/10 hover:bg-tour-darker-green transition"
            >
                <div className="w-8 h-8 bg-tour-green rounded-full flex items-center justify-center relative">
                    <MessageSquare className="w-4 h-4 text-white" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-tour-dark-green"></div>
                </div>
                <div className="text-left hidden sm:block">
                    <p className="text-sm font-bold leading-tight">Chat with Aisha</p>
                    <p className="text-xs text-tour-green leading-tight">AI Travel Assistant</p>
                </div>
            </motion.button>
        </div>
    );
}