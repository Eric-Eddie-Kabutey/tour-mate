"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Heart, CalendarDays, Tag } from "lucide-react";
import Image from "next/image";

const events = [
    {
        id: 1,
        title: "Chale Wote Street Art Festival",
        category: "Arts & Culture",
        location: "Accra, Ghana",
        date: "Aug 14–18, 2026",
        price: "Free",
        image: "/assets/images/events/chale-wote.jpg",
    },
    {
        id: 2,
        title: "Afro Nation Ghana",
        category: "Music",
        location: "Accra, Ghana",
        date: "Dec 27–29, 2026",
        price: "From ₵1,275",
        image: "/assets/images/events/afro-nation.jpg",
    },
    {
        id: 3,
        title: "Ghana Food & Drink Fair",
        category: "Food & Drink",
        location: "Kumasi, Ghana",
        date: "Oct 3–5, 2026",
        price: "From ₵150",
        image: "/assets/images/events/food-fair.jpg",
    },
    {
        id: 4,
        title: "Afrochella Music Festival",
        category: "Music",
        location: "Accra, Ghana",
        date: "Dec 28–30, 2026",
        price: "From ₵600",
        image: "/assets/images/events/afrochella.jpg",
    },
];

export default function TrendingEvents() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const [ activeIndex, setActiveIndex ] = useState(0);

    // Track Mobile Scroll for Dotted Indicator
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.children[ 0 ].clientWidth;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
    };

    // Desktop Arrow Navigation
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
                            Events
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Trending Events Happening Near You
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base">
                            Festivals, concerts, food fairs, and cultural experiences across the continent.
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
                    {/* Hide Scrollbar Classes */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4"
                    >
                        {events.map((event) => (
                            <motion.div
                                key={event.id}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                                }}
                                className="w-[85vw] md:w-[320px] flex-shrink-0 snap-center md:snap-start bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group cursor-pointer"
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-[200px] overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Heart Icon */}
                                    <button className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition z-10">
                                        <Heart className="w-4 h-4 text-white" />
                                    </button>

                                    {/* Category Badge Over Image */}
                                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-3 py-1.5 z-10">
                                        <span className="text-white text-xs font-semibold tracking-wide">{event.category}</span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1">
                                        {event.title}
                                    </h3>

                                    <div className="flex flex-col space-y-2 mb-4">
                                        <div className="flex items-center space-x-2 text-gray-500">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm">{event.location}</span>
                                        </div>

                                        <div className="flex items-center space-x-2 text-gray-500">
                                            <CalendarDays className="w-4 h-4 text-gray-400" />
                                            <span className="text-sm">{event.date}</span>
                                        </div>

                                        <div className="flex items-center space-x-2 text-tour-green font-medium">
                                            <Tag className="w-4 h-4" />
                                            <span className="text-sm">{event.price}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        {/* Button */}
                                        <button className="w-full py-2.5 rounded-xl border border-tour-green text-tour-green font-semibold hover:bg-tour-green hover:text-white transition-colors duration-300">
                                            Get Tickets
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Dots Indicator */}
                    <div className="flex md:hidden justify-center items-center space-x-2 mt-4">
                        {events.map((_, index) => (
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