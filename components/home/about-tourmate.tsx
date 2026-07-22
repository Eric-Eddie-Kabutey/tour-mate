"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutTourmate() {
    const [ isExpanded, setIsExpanded ] = useState(false);

    return (
        <section className="py-16 md:py-24 bg-tour-white w-full flex justify-center">
            <div className="max-w-[1200px] w-full px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                >
                    {/* Headings */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                        Book Stays, Tours, Flights and More Across Africa
                    </h2>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                        Africa&apos;s Premier Travel Marketplace — All in One Place
                    </h3>

                    {/* Text Container with Expand/Collapse logic */}
                    <div
                        className={`relative overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? "max-h-[1000px]" : "max-h-[180px] md:max-h-[160px]"
                            }`}
                    >
                        <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed pr-4">
                            <p>
                                Tourmate is Africa&apos;s leading travel marketplace, built exclusively for international
                                travellers exploring the continent. From safari lodges in Kenya to boutique hotels in Accra,
                                rooftop restaurants in Lagos to vibrant markets in Marrakech — we connect you with the best
                                local services in every destination.
                            </p>

                            <p>
                                Our platform brings together eight essential travel services: Stays, Car Rental, Events,
                                Airport Pickup, Tours, Shops, Flights, and Restaurants. Whether you&apos;re arriving for
                                business or adventure, Tourmate gives you everything you need for a seamless trip, all in one place.
                            </p>

                            <p>
                                Every provider on Tourmate is vetted for quality and reliability. We work with trusted local
                                partners across the continent so that every booking you make is backed by our guarantee of service
                                excellence.
                            </p>

                            {/* Add more paragraphs here if needed, the expansion logic will handle them automatically */}
                        </div>

                        {/* Gradient Overlay for the fade-out effect (only visible when collapsed) */}
                        {!isExpanded && (
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-tour-white via-tour-white/80 to-transparent pointer-events-none" />
                        )}
                    </div>

                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 text-tour-green font-medium text-sm md:text-base hover:underline transition-all"
                    >
                        {isExpanded ? "Show less" : "See all"}
                    </button>
                </motion.div>

            </div>
        </section>
    );
}