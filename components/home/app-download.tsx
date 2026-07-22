"use client";
import { motion, Variants } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function AppDownload() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden my-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/app-bg.webp')" }}
            />

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto"
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white/20 backdrop-blur-md border border-white/10 text-tour-white px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide mb-6"
                >
                    Now Available
                </motion.div>

                {/* Heading */}
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-tour-white mb-6 tracking-tight leading-tight"
                >
                    Africa In Your Pocket, <br className="hidden md:block" />
                    <span className="text-tour-green">Wherever You Go.</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-gray-200 text-sm md:text-base font-light mb-10 max-w-lg leading-relaxed"
                >
                    Download the Tourmate app and book hotels, tours, rides, and experiences — all from your phone.
                </motion.p>

                {/* Store Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
                >
                    {/* Apple App Store */}
                    <button className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 w-[200px] shadow-xl">
                        <FaApple className="w-7 h-7" />
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[10px] uppercase font-medium leading-tight text-gray-600">Download on the</span>
                            <span className="text-base font-bold leading-tight">App Store</span>
                        </div>
                    </button>

                    {/* Google Play Store */}
                    <button className="flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 w-[200px] shadow-xl">
                        <FaGooglePlay className="w-6 h-6 text-emerald-500" />
                        <div className="flex flex-col items-start text-left">
                            <span className="text-[10px] uppercase font-medium leading-tight text-gray-600">Get it on</span>
                            <span className="text-base font-bold leading-tight">Google Play</span>
                        </div>
                    </button>
                </motion.div>

            </motion.div>
        </section>
    );
}