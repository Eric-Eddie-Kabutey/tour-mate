"use client";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function GuidedTours() {
    const benefits = [
        "Local expert guides fluent in English",
        "Small-group & private tour options",
        "Fully customisable itineraries",
        "24/7 in-trip support from Tourmate",
    ];

    // Animation variants
    const fadeUpVariant: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    return (
        <section className="py-20 md:py-28 bg-tour-darker-green w-full relative z-10 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* Top Header Section */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center text-center w-full mb-12 md:mb-16"
                >
                    {/* Badge */}
                    <div className="bg-white/5 border border-white/10 text-tour-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
                        Guided Tours
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tour-white mb-8 tracking-tight">
                        Experience Africa <span className="text-tour-green">With Expert Guides</span>
                    </h2>

                    {/* Button */}
                    <button className="px-6 py-2.5 rounded-full border border-white/30 text-tour-white text-sm font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                        Explore Tours
                    </button>
                </motion.div>

                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full bg-tour-dark-green rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5"
                >
                    {/* Image Container */}
                    <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-auto">
                        <Image
                            src="/assets/images/tours/safari.jpg"
                            alt="Safari tour in Africa"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                variants={fadeUpVariant}
                                className="text-2xl md:text-3xl font-bold text-tour-white mb-6"
                            >
                                Discover Ghana&apos;s most unforgettable journeys
                            </motion.h3>

                            <motion.p
                                variants={fadeUpVariant}
                                className="text-gray-300 text-sm md:text-base leading-relaxed mb-8"
                            >
                                From the ancient slave castles of Cape Coast to the sacred Ashanti
                                shrines of Kumasi and the lively streets of Accra, Tourmate&apos;s curated tours
                                put you in the hands of passionate local Ghanaian guides.
                            </motion.p>

                            {/* Benefits List */}
                            <motion.ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        variants={fadeUpVariant}
                                        className="flex items-start space-x-3 group"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-tour-green flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" strokeWidth={2} />
                                        <span className="text-gray-200 text-sm md:text-base">{benefit}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}