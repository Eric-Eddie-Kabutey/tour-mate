"use client";
import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Heart, Star, ChevronDown } from "lucide-react";
import Image from "next/image";

// Mock Data
const initialStays = [
    {
        id: "1",
        name: "The Silo Hotel",
        type: "Boutique Hotel",
        location: "Cape Town, SA",
        price: 480,
        rating: 4.9,
        image: "/assets/images/stay/silo.jpg", // Ensure placeholders exist
        freeCancellation: false,
    },
    {
        id: "2",
        name: "Anantara Nairobi",
        type: "Luxury Hotel",
        location: "Nairobi, Kenya",
        price: 220,
        rating: 4.9,
        image: "/assets/images/stay/anantara.jpg",
        freeCancellation: true,
    },
    {
        id: "3",
        name: "Zanzibar Beach Villa",
        type: "Private Villa",
        location: "Zanzibar, Tanzania",
        price: 380,
        rating: 4.9,
        image: "/assets/images/stay/zanzibar.jpg",
        freeCancellation: false,
    },
    {
        id: "4",
        name: "The Residence Mauritius",
        type: "Beachfront Resort",
        location: "Mauritius",
        price: 700,
        rating: 4.9,
        image: "/assets/images/stay/anantara.jpg",
        freeCancellation: true,
    },
    {
        id: "5",
        name: "Four Seasons Marrakech",
        type: "Resort",
        location: "Marrakech, Morocco",
        price: 550,
        rating: 4.9,
        image: "/assets/images/stay/silo.jpg",
        freeCancellation: true,
    },
];

export default function StayFeatures() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Filter States
    const [ freeCancellationOnly, setFreeCancellationOnly ] = useState(false);
    const [ sortBy, setSortBy ] = useState<"recommended" | "price-asc" | "price-desc">("recommended");
    const [ isSortOpen, setIsSortOpen ] = useState(false);

    // Apply Filters & Sorting dynamically
    const filteredStays = useMemo(() => {
        let result = [ ...initialStays ];

        // Filter
        if (freeCancellationOnly) {
            result = result.filter(stay => stay.freeCancellation);
        }

        // Sort
        if (sortBy === "price-asc") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-desc") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [ freeCancellationOnly, sortBy ]);

    // Desktop Arrow Navigation
    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.children[ 0 ].clientWidth + 24;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="py-16 md:py-24 bg-tour-white w-full overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                    <div className="flex flex-col items-start max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Top Rated <span className="text-tour-green">Stays</span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base">
                            Africa&apos;s highest-reviewed properties, loved by travellers
                        </p>
                    </div>

                    {/* Desktop Arrows */}
                    <div className="hidden md:flex items-center space-x-3 pb-2">
                        <button
                            onClick={() => scroll("left")}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-tour-green transition shadow-sm"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-tour-green transition shadow-sm"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Filters Row */}
                <div className="flex overflow-x-auto gap-3 pb-4 mb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <button className="flex items-center space-x-1.5 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 whitespace-nowrap transition">
                        <span>Dates</span>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </button>

                    <button className="flex items-center space-x-1.5 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 whitespace-nowrap transition">
                        <span>Guests</span>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </button>

                    {/* Working "Sort by" Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className="flex items-center space-x-1.5 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 whitespace-nowrap transition"
                        >
                            <span>{sortBy === "recommended" ? "Sort by" : sortBy === "price-asc" ? "Price: Low to High" : "Price: High to Low"}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                        </button>

                        <AnimatePresence>
                            {isSortOpen && (
                                <>
                                    <div className="fixed inset-0 z-30" onClick={() => setIsSortOpen(false)} />
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-40 py-2 flex flex-col"
                                    >
                                        <button onClick={() => { setSortBy("recommended"); setIsSortOpen(false); }} className={`px-4 py-2 text-sm text-left hover:bg-gray-50 ${sortBy === "recommended" && "text-tour-green font-medium"}`}>Recommended</button>
                                        <button onClick={() => { setSortBy("price-asc"); setIsSortOpen(false); }} className={`px-4 py-2 text-sm text-left hover:bg-gray-50 ${sortBy === "price-asc" && "text-tour-green font-medium"}`}>Price: Low to High</button>
                                        <button onClick={() => { setSortBy("price-desc"); setIsSortOpen(false); }} className={`px-4 py-2 text-sm text-left hover:bg-gray-50 ${sortBy === "price-desc" && "text-tour-green font-medium"}`}>Price: High to Low</button>
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Working "Free Cancellation" Toggle */}
                    <button
                        onClick={() => setFreeCancellationOnly(!freeCancellationOnly)}
                        className={`px-4 py-2 border rounded-full text-sm whitespace-nowrap transition-colors duration-300 ${freeCancellationOnly
                                ? "border-tour-green bg-[#E6F8EB] text-tour-green font-medium"
                                : "border-gray-200 text-gray-600 hover:bg-gray-50"
                            }`}
                    >
                        Free Cancellation
                    </button>

                    <button className="flex items-center space-x-1.5 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 whitespace-nowrap transition">
                        <span>Star Rating</span>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </button>

                    <button className="flex items-center space-x-1.5 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-gray-50 whitespace-nowrap transition">
                        <span>Rating</span>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                    </button>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-8 pt-2 min-h-[420px]"
                >
                    <AnimatePresence>
                        {filteredStays.length > 0 ? (
                            filteredStays.map((stay) => (
                                <motion.div
                                    layout /* This magic prop makes filtering slide beautifully */
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, type: "spring" }}
                                    key={stay.id}
                                    className="w-[85vw] md:w-[280px] lg:w-[300px] flex-shrink-0 snap-center md:snap-start bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer"
                                >
                                    {/* Image Section */}
                                    <div className="relative w-full h-[190px] overflow-hidden">
                                        <Image
                                            src={stay.image}
                                            alt={stay.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Heart Icon */}
                                        <button className="absolute top-3 right-3 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/40 transition z-10">
                                            <Heart className="w-4 h-4 text-white" />
                                        </button>

                                        {/* Rating Badge */}
                                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 flex items-center space-x-1 z-10">
                                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                            <span className="text-white text-xs font-semibold">{stay.rating}</span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                                            {stay.name}
                                        </h3>

                                        <p className="text-sm text-gray-500 mb-3">{stay.type}</p>

                                        <div className="flex items-center space-x-1.5 text-gray-400 mb-4">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{stay.location}</span>
                                        </div>

                                        <div className="mt-auto flex flex-col space-y-4">
                                            {/* Price */}
                                            <div className="flex items-end">
                                                <span className="text-tour-green font-bold text-lg">${stay.price}</span>
                                                <span className="text-tour-green text-sm font-medium mb-0.5 ml-1">/ night</span>
                                            </div>

                                            {/* Button */}
                                            <button className="w-full py-2.5 rounded-xl border border-tour-green text-tour-green font-semibold hover:bg-tour-green hover:text-white transition-colors duration-300">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full flex flex-col items-center justify-center py-12 text-gray-400"
                            >
                                <p>No stays found matching your filters.</p>
                                <button
                                    onClick={() => { setFreeCancellationOnly(false); setSortBy("recommended"); }}
                                    className="mt-4 text-tour-green hover:underline text-sm"
                                >
                                    Clear Filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}