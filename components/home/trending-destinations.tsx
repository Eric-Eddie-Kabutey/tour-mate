"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

const destinations = [
    {
        city: "Accra",
        country: "Ghana",
        description: "Vibrant culture and coastal energy",
        stays: "980+ stays",
        image: "/assets/images/destinations/accra.jpg", // Ensure placeholders are in public folder
    },
    {
        city: "Kumasi",
        country: "Ghana",
        description: "Heart of the Ashanti Kingdom",
        stays: "420+ stays",
        image: "/assets/images/destinations/kumasi.jpg",
    },
    {
        city: "Cape Coast",
        country: "Ghana",
        description: "Historic forts on a golden coast",
        stays: "260+ stays",
        image: "/assets/images/destinations/cape-coast.jpg",
    },
    {
        city: "Tamale",
        country: "Ghana",
        description: "Gateway to northern Ghana's savanna",
        stays: "140+ stays",
        image: "/assets/images/destinations/tamale.jpg",
    },
];

export default function TrendingDestinations() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const [ activeIndex, setActiveIndex ] = useState(0);
    const hasNudged = useRef(false);

    // 1. Mobile Auto-Nudge Effect
    useEffect(() => {
        if (isInView && !hasNudged.current && window.innerWidth < 768) {
            hasNudged.current = true; // Updates instantly without triggering a re-render!

            // Wait for the entrance animation to finish, then nudge
            setTimeout(() => {
                if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: 60, behavior: "smooth" });
                    setTimeout(() => {
                        if (scrollRef.current) {
                            scrollRef.current.scrollBy({ left: -60, behavior: "smooth" });
                        }
                    }, 400); // Wait 400ms then scroll back
                }
            }, 1000);
        }
    }, [ isInView ]);

    // 2. Track Mobile Scroll for Dotted Indicator
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollLeft = scrollRef.current.scrollLeft;
        // Calculate which card is most visible based on standard mobile card width (~80vw)
        const cardWidth = scrollRef.current.children[ 0 ].clientWidth;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
    };

    // 3. Desktop Arrow Navigation
    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = scrollRef.current.children[ 0 ].clientWidth + 24; // Card width + gap
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    // Framer Motion Variants
    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <section ref={containerRef} className="py-16 md:py-24 bg-tour-white w-full overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

                {/* Header Section */}
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-10"
                >
                    <div className="flex flex-col items-start max-w-2xl">
                        <div className="bg-[#E6F8EB] text-tour-green px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4">
                            Top Picks
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Explore Hotels In Trending Destinations
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base">
                            Discover the most sought-after cities across Africa.
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
                </motion.div>

                {/* Carousel Container */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                    }}
                    className="relative"
                >
                    {/* Note: the arbitrary brackets handle hiding the scrollbar purely in Tailwind CSS */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-8 md:pb-4"
                    >
                        {destinations.map((dest, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="relative w-[85vw] md:w-[340px] lg:w-[380px] h-[400px] md:h-[460px] flex-shrink-0 snap-center md:snap-start rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer"
                            >
                                {/* Background Image */}
                                <Image
                                    src={dest.image}
                                    alt={dest.city}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Dark Gradient Overlay for readable text */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start text-white">
                                    <div className="flex items-center space-x-1 text-xs font-medium text-gray-200 mb-1.5 opacity-90">
                                        <MapPin className="w-3.5 h-3.5" />
                                        <span>{dest.country}</span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-1.5 text-white">
                                        {dest.city}
                                    </h3>

                                    <p className="text-sm text-gray-300 font-light mb-4 line-clamp-1">
                                        {dest.description}
                                    </p>

                                    <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-white border border-white/10">
                                        {dest.stays}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Dots Indicator */}
                    <div className="flex md:hidden justify-center items-center space-x-2 mt-4">
                        {destinations.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? "w-6 bg-tour-green"
                                        : "w-2 bg-gray-200"
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}