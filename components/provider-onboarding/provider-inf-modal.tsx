"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProviderInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ProviderInfoModal({ isOpen, onClose }: ProviderInfoModalProps) {
    const router = useRouter();

    if (!isOpen) return null;

    const handleGetStarted = () => {
        onClose();
        router.push("/provider-onboarding");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative bg-white w-full max-w-[480px] rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col z-10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Be Part of the Journey</h2>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Information Steps */}
                        <div className="space-y-4 mb-8">
                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                                <h3 className="text-[15px] font-bold text-gray-900 mb-1">Choose What You Offer</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">
                                    Whether it&apos;s tours, rentals, transport, or experiences, pick the service that fits your business.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                                <h3 className="text-[15px] font-bold text-gray-900 mb-1">Tell Us About Your Business</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">
                                    Fill in the details travelers need, like pricing, availability, and photos.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                                <h3 className="text-[15px] font-bold text-gray-900 mb-1">We&apos;ll Review & Approve</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed">
                                    Our team ensures quality and trust before going live. You&apos;ll be notified once you&apos;re verified.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={handleGetStarted}
                            className="w-full bg-tour-green hover:bg-[#048417] text-white font-bold py-3.5 rounded-xl transition-colors duration-300 shadow-md"
                        >
                            Get Started
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}