"use client";
import { motion, Variants } from "framer-motion";
import { Search, ChevronDown, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Shadcn UI Imports
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

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

export interface SearchFilter {
    label: string;
    type: "select" | "date";
    options?: string[]; // Used if type is "select"
}

export interface HeroProps {
    backgroundImage: string;
    subtitle: string;
    activeCategory?: string;
    searchPlaceholder: string;    
    searchFilters: SearchFilter[];
}

export default function Hero({
    backgroundImage,
    subtitle,
    activeCategory,
    searchPlaceholder,    
    searchFilters
}: HeroProps) {

    // State for the main search input
    const [ searchQuery, setSearchQuery ] = useState("");
    // Dynamic state object for all dropdowns (e.g. { "Property type": "Villa", "Price": "Under $20" })
    const [ filterState, setFilterState ] = useState<Record<string, string>>({});
    // Specific state for date pickers
    const [ dateState, setDateState ] = useState<Record<string, { start: string; end: string }>>({});

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

    const handleSearch = () => {
        // This logs the full state so you can see it working!
        console.log("Searching with:", {
            query: searchQuery,
            filters: filterState,
            dates: dateState
        });
        alert("Check the console to see the search state!");
    };

    return (
        <div id="main-hero-section" className="relative w-full min-h-screen flex flex-col items-center justify-center bg-tour-darker-green overflow-hidden pt-24 pb-12">
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
                    // UPDATE 1: Use a 4-column grid on mobile, and flex on desktop
                    className="grid grid-cols-4 gap-y-5 gap-x-2 sm:flex sm:flex-wrap sm:justify-center md:gap-6 mb-10 md:mb-12 w-full px-1"
                >
                    {categories.map((cat, idx) => {
                        const isActive = activeCategory === cat.name;

                        return (
                            <Link href={cat.href} key={idx} className="flex justify-center">
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col items-center gap-1.5 md:gap-2 group cursor-pointer text-center"
                                >
                                    {/* UPDATE 2: Scaled down dimensions for mobile (w-12 h-12) to fit the grid */}
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 backdrop-blur-md rounded-[14px] md:rounded-2xl flex items-center justify-center transition duration-300 ${isActive
                                            ? "bg-white/20 border-2 border-tour-green shadow-[0_0_15px_rgba(5,156,28,0.5)] scale-105"
                                            : "bg-white/10 border border-white/10 group-hover:bg-white/20"
                                        }`}>
                                        <Image
                                            src={cat.icon}
                                            alt={cat.name}
                                            width={32}
                                            height={32}
                                            // UPDATE 3: Smaller icons on mobile (w-6 h-6)
                                            className="w-6 h-6 md:w-8 md:h-8 object-contain drop-shadow-md"
                                        />
                                    </div>

                                    {/* UPDATE 4: Smaller text on mobile (text-[10px]) and truncate long names */}
                                    <span className={`text-[10px] sm:text-xs md:text-sm font-medium transition-colors whitespace-nowrap tracking-tight ${isActive ? "text-tour-green font-bold" : "text-tour-white"
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
                    className="w-full max-w-4xl bg-tour-white rounded-[2rem] p-2 flex flex-col md:flex-row items-center justify-between shadow-2xl space-y-2 md:space-y-0 relative z-50"
                >
                    {/* Main Search Input */}
                    <div className="flex-1 flex items-center px-4 py-3 w-full">
                        <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder={searchPlaceholder}
                            className="bg-transparent outline-none text-gray-900 w-full text-sm md:text-base font-medium placeholder:text-gray-500 placeholder:font-normal"
                        />
                    </div>

                    {/* Render Dynamic Filters */}
                    {searchFilters.map((filter, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-200">

                            {/* If it's a standard Dropdown Select */}
                            {filter.type === "select" && filter.options && (
                                <Select
                                    value={filterState[ filter.label ] || ""}
                                    onValueChange={(val) => val && setFilterState(prev => ({ ...prev, [ filter.label ]: val }))}
                                >
                                    <SelectTrigger className="border-none bg-transparent shadow-none focus:ring-0 px-5 py-3 text-gray-600 text-sm md:text-base whitespace-nowrap hover:bg-gray-50 rounded-full h-auto w-full outline-none flex items-center justify-between gap-2 data-[state=open]:bg-gray-50 transition-colors">
                                        <span>
                                            {filterState[ filter.label ] ? (
                                                <span className="text-gray-900 font-semibold">{filterState[ filter.label ]}</span>
                                            ) : (
                                                <span>{filter.label}</span>
                                            )}
                                        </span>
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl border-gray-100 shadow-xl bg-white z-[80] min-w-[160px]">
                                        {filter.options.map(opt => (
                                            <SelectItem key={opt} value={opt} className="hover:bg-gray-50 focus:bg-[#E6F8EB] focus:text-tour-green cursor-pointer py-3 text-sm">
                                                {opt}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}

                            {/* If it's a Date Picker */}
                            {filter.type === "date" && (
                                <Popover>
                                    <PopoverTrigger className="flex items-center justify-between w-full md:w-auto px-5 py-3 text-gray-600 text-sm md:text-base whitespace-nowrap hover:bg-gray-50 rounded-full outline-none transition-colors data-[state=open]:bg-gray-50 gap-2">
                                        <span className="flex items-center gap-2">
                                            <CalendarDays className="w-4 h-4 text-gray-400" />
                                            {dateState[ filter.label ]?.start ? (
                                                <span className="text-gray-900 font-semibold">Dates Selected</span>
                                            ) : (
                                                <span>{filter.label}</span>
                                            )}
                                        </span>
                                        <ChevronDown className="w-4 h-4 text-gray-400 opacity-50" />
                                    </PopoverTrigger>
                                    <PopoverContent className="p-5 w-auto rounded-2xl shadow-2xl border-gray-100 bg-white z-[80]" align="center" sideOffset={10}>
                                        <div className="flex gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Check-in</label>
                                                <input
                                                    type="date"
                                                    onChange={(e) => setDateState(prev => ({ ...prev, [ filter.label ]: { ...prev[ filter.label ], start: e.target.value } }))}
                                                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition text-gray-700 bg-white"
                                                />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Check-out</label>
                                                <input
                                                    type="date"
                                                    onChange={(e) => setDateState(prev => ({ ...prev, [ filter.label ]: { ...prev[ filter.label ], end: e.target.value } }))}
                                                    className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition text-gray-700 bg-white"
                                                />
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )}

                        </div>
                    ))}

                    {/* Search Button */}
                    <div className="px-2 w-full md:w-auto pb-2 md:pb-0 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100 md:border-none">
                        <button
                            onClick={handleSearch}
                            className="w-full md:w-auto bg-tour-green hover:bg-[#048417] text-tour-white px-8 py-3 rounded-full font-bold transition duration-300 shadow-md"
                        >
                            Search
                        </button>
                    </div>
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
        </div>
    );
}