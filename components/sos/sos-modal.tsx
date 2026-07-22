"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic } from "lucide-react";

interface SOSModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
}

export default function SOSModal({ isOpen, onClose, title }: SOSModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative bg-white w-full max-w-[500px] rounded-2xl shadow-2xl p-6 flex flex-col z-10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                            <button
                                onClick={onClose}
                                className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Input Area */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Attach a quick message if you can
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Type message"
                                className="w-full border border-gray-200 rounded-xl p-4 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition resize-none"
                            ></textarea>
                        </div>

                        {/* Voice Record Button */}
                        <div className="flex flex-col items-center justify-center mb-8">
                            <button className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 mb-3">
                                <Mic className="w-6 h-6" />
                            </button>
                            <span className="text-xs text-gray-500">Tap to send voice message</span>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-red-50 hover:bg-red-100 text-red-500 font-bold py-3.5 rounded-xl transition-colors duration-300">
                            Submit
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}