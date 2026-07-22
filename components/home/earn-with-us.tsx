"use client";
import { motion, Variants } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";

export default function EarnWithUs() {
    const fadeUpVariant: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    return (
        <section className="py-20 md:py-28 bg-tour-darker-green w-full relative overflow-hidden flex flex-col items-center">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full">

                {/* Top Content */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center text-center max-w-3xl mb-12"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="bg-tour-dark-green border border-tour-green/30 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
                    >
                        For Drivers & Providers
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUpVariant}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-tour-white mb-6 tracking-tight"
                    >
                        Earn On Your <span className="text-tour-green">schedule.</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUpVariant}
                        className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-10 max-w-2xl"
                    >
                        Join thousands of drivers and tour operators already earning with Tourmate. Download the
                        driver app and start accepting rides, pickups, and tour bookings today.
                    </motion.p>

                    {/* App Store Buttons */}
                    <motion.div
                        variants={fadeUpVariant}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                    >
                        {/* Apple App Store */}
                        <button className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-2.5 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 w-[180px] shadow-lg">
                            <FaApple className="w-6 h-6" />
                            <div className="flex flex-col items-start text-left">
                                <span className="text-[9px] uppercase font-medium leading-tight text-gray-600">Download on the</span>
                                <span className="text-sm font-bold leading-tight">App Store</span>
                            </div>
                        </button>

                        {/* Google Play Store */}
                        <button className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-2.5 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 w-[180px] shadow-lg">
                            <FaGooglePlay className="w-5 h-5 text-emerald-500" />
                            <div className="flex flex-col items-start text-left">
                                <span className="text-[9px] uppercase font-medium leading-tight text-gray-600">GET IT ON</span>
                                <span className="text-sm font-bold leading-tight">Google Play</span>
                            </div>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Large Driver Image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5"
                >
                    <Image
                        src="/assets/images/driver.avif"
                        alt="Happy Tourmate Driver"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    {/* Subtle gradient at the bottom to blend with the dark background if needed */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-tour-darker-green/50 to-transparent pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
}