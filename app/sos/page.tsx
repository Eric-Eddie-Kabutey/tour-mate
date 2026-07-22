"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SOSModal from "@/components/sos/sos-modal";

const sosOptions = [
    {
        id: "medical",
        title: "Medical emergency",
        icon: "/assets/icons/sos-medical.svg",
    },
    {
        id: "harassment",
        title: "Harassment or theft",
        icon: "/assets/icons/sos-harassment.svg",
    },
    {
        id: "lost",
        title: "Lost in unknown area",
        icon: "/assets/icons/sos-lost.svg",
    },
    {
        id: "driver",
        title: "Driver misconduct",
        icon: "/assets/icons/sos-driver.svg",
    },
];

export default function SOSPage() {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ selectedOption, setSelectedOption ] = useState("");

    const handleOpenModal = (title: string) => {
        setSelectedOption(title);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen flex flex-col bg-tour-white">           

            {/* Main Split Layout */}
            <div className="flex-1 flex flex-col lg:flex-row mt-[72px]">

                {/* Left Side: Actions */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-lg flex flex-col items-center"
                    >
                        <p className="text-gray-800 text-sm md:text-base font-medium mb-8 text-center">
                            Kindly choose the options for immediate attendance
                        </p>

                        {/* Grid of Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {sosOptions.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOpenModal(option.title)}
                                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4 hover:bg-gray-100 hover:shadow-sm transition-all duration-300 group"
                                >
                                    <div className="relative w-16 h-16 group-hover:scale-105 transition-transform duration-300">
                                        <Image
                                            src={option.icon}
                                            alt={option.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-800 text-center">
                                        {option.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Image & Message */}
                <div className="relative w-full lg:w-1/2 h-[500px] lg:h-auto min-h-[calc(100vh-72px)]">
                    <Image
                        src="/assets/images/sos/security-guard.avif"
                        alt="Security guard on patrol"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Bottom Dark Gradient for Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                        >
                            Your safety is our <span className="text-tour-green">priority</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-gray-300 text-sm md:text-base font-light max-w-lg leading-relaxed"
                        >
                            Tourmate&apos;s emergency response team is always ready. Whether you&apos;re dealing with a
                            medical situation, or need immediate assistance — we&apos;re only a click away.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Render the Modal */}
            <SOSModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedOption}
            />
        </main>
    );
}