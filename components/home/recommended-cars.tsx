"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Heart, Star, Users, Luggage, Fuel } from "lucide-react";
import Image from "next/image";

const cars = [
    {
        id: 1,
        name: "Toyota Land Cruiser",
        location: "Accra, Ghana",
        rating: 4.9,
        seats: 7,
        bags: 4,
        fuel: "Diesel",
        price: "1,275",
        image: "/assets/images/cars/land-cruiser.jpg",
    },
    {
        id: 2,
        name: "Toyota Camry",
        location: "Kumasi, Ghana",
        rating: 4.8,
        seats: 5,
        bags: 3,
        fuel: "Petrol",
        price: "675",
        image: "/assets/images/cars/camry.jpg",
    },
    {
        id: 3,
        name: "Toyota HiAce Van",
        location: "Accra, Ghana",
        rating: 4.7,
        seats: 12,
        bags: 6,
        fuel: "Diesel",
        price: "900",
        image: "/assets/images/cars/hiace.jpg",
    },
    {
        id: 4,
        name: "Hyundai i20",
        location: "Takoradi, Ghana",
        rating: 4.5,
        seats: 5,
        bags: 2,
        fuel: "Petrol",
        price: "420",
        image: "/assets/images/cars/i20.jpg",
    },
];

export default function RecommendedCars() {
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
                            Car Rentals
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Best Recommended Cars
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base">
                            Trusted vehicles, transparent pricing, instant booking.
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
                        {cars.map((car, index) => (
                            <motion.div
                                key={car.id}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                                }}
                                className="w-[85vw] md:w-[320px] flex-shrink-0 snap-center md:snap-start bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-[200px] overflow-hidden">
                                    <Image
                                        src={car.image}
                                        alt={car.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Heart Icon */}
                                    <button className="absolute top-3 right-3 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition z-10">
                                        <Heart className="w-4 h-4 text-white" />
                                    </button>

                                    {/* Rating Badge */}
                                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 flex items-center space-x-1 z-10">
                                        <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                        <span className="text-white text-xs font-semibold">{car.rating}</span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                                        {car.name}
                                    </h3>

                                    <div className="flex items-center space-x-1.5 text-gray-500 mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">{car.location}</span>
                                    </div>

                                    {/* Features / Specs */}
                                    <div className="flex items-center space-x-4 mb-5 text-gray-600 text-sm">
                                        <div className="flex items-center space-x-1.5">
                                            <Users className="w-4 h-4 text-tour-green" />
                                            <span>{car.seats} seats</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <Luggage className="w-4 h-4 text-tour-green" />
                                            <span>{car.bags} bags</span>
                                        </div>
                                        <div className="flex items-center space-x-1.5">
                                            <Fuel className="w-4 h-4 text-tour-green" />
                                            <span>{car.fuel}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        {/* Price */}
                                        <div className="flex items-end mb-4">
                                            <span className="text-tour-green font-bold text-lg">₵{car.price}</span>
                                            <span className="text-tour-green text-sm font-medium mb-0.5 ml-1">/day</span>
                                        </div>

                                        {/* Button */}
                                        <button className="w-full py-2.5 rounded-xl border border-tour-green text-tour-green font-semibold hover:bg-tour-green hover:text-white transition-colors duration-300">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile Dots Indicator */}
                    <div className="flex md:hidden justify-center items-center space-x-2 mt-4">
                        {cars.map((_, index) => (
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