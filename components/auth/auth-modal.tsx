"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, EyeOff, ChevronDown, Check } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

// Mock Country Data based on your screenshot
const countries = [
    { name: "Cameroon", code: "+237", flag: "/assets/images/flags/cameroon.png" },
    { name: "Nigeria", code: "+234", flag: "/assets/images/flags/nigeria.png" },
    { name: "Kenya", code: "+254", flag: "/assets/images/flags/kenya.png" },
    { name: "South Africa", code: "+27", flag: "/assets/images/flags/south-africa.png" },
    { name: "Ghana", code: "+233", flag: "/assets/images/flags/ghana.png" },
    { name: "Ethiopia", code: "+251", flag: "/assets/images/flags/ethiopia.png" },
];

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTab?: "signin" | "signup";
}

export default function AuthModal({ isOpen, onClose, initialTab = "signin" }: AuthModalProps) {
    const [ activeTab, setActiveTab ] = useState<"signin" | "signup">(initialTab);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ termsAccepted, setTermsAccepted ] = useState(false);

    // Phone Dropdown State
    const [ selectedCountry, setSelectedCountry ] = useState(countries[ 0 ]);
    const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);

    // If modal is closed, don't render it (handled by AnimatePresence)
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
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative bg-white w-full max-w-[440px] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 pb-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 bg-tour-green rounded-full rounded-br-none flex items-center justify-center">
                                    <div className="w-2 h-2 bg-tour-white rounded-full" />
                                </div>
                                <span className="text-xl font-bold text-gray-900 tracking-tight">Tourmate</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="px-6 pb-6 overflow-y-auto custom-scrollbar">

                            {/* Tab Switcher */}
                            <div className="flex bg-gray-50 p-1 rounded-xl mb-8 border border-gray-100">
                                <button
                                    onClick={() => setActiveTab("signin")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === "signin"
                                            ? "bg-white text-gray-900 shadow-sm border border-gray-100"
                                            : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    Sign In
                                </button>
                                <button
                                    onClick={() => setActiveTab("signup")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === "signup"
                                            ? "bg-white text-gray-900 shadow-sm border border-gray-100"
                                            : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    Sign Up
                                </button>
                            </div>

                            {/* Dynamic Form Content */}
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    {activeTab === "signin" ? "Welcome back" : "Create your account"}
                                </h2>
                                <p className="text-sm text-gray-500 mb-6">
                                    Discover culture, stay safe, and explore with purpose.
                                </p>

                                {/* Google Button */}
                                <button className="w-full flex items-center justify-center space-x-3 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors mb-6">
                                    <FcGoogle className="w-5 h-5" />
                                    <span className="text-sm font-medium text-gray-700">Continue with Google</span>
                                </button>

                                {/* Divider */}
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="flex-1 h-px bg-gray-200" />
                                    <span className="text-xs text-gray-400 font-medium">or</span>
                                    <div className="flex-1 h-px bg-gray-200" />
                                </div>

                                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

                                    {/* Sign Up specific fields: First & Last Name */}
                                    {activeTab === "signup" && (
                                        <div className="flex gap-4">
                                            <div className="flex-1 space-y-1.5">
                                                <label className="text-[13px] font-medium text-gray-700">First name</label>
                                                <input type="text" placeholder="Enter first name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition" />
                                            </div>
                                            <div className="flex-1 space-y-1.5">
                                                <label className="text-[13px] font-medium text-gray-700">Last name</label>
                                                <input type="text" placeholder="Enter last name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Phone Number Field */}
                                    <div className="space-y-1.5">
                                        <label className="text-[13px] font-medium text-gray-700">Phone number</label>
                                        <div className="flex gap-3 relative">

                                            {/* Custom Country Dropdown Trigger */}
                                            <button
                                                type="button"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="flex items-center justify-between w-[110px] border border-gray-200 rounded-xl px-3 py-3 bg-white hover:bg-gray-50 transition-colors focus:border-tour-green focus:ring-1 focus:ring-tour-green outline-none"
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <Image src={selectedCountry.flag} alt={selectedCountry.name} width={20} height={14} className="rounded-sm object-cover" />
                                                    <span className="text-sm font-medium text-gray-700">{selectedCountry.code}</span>
                                                </div>
                                                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                                            </button>

                                            {/* Phone Input */}
                                            <input
                                                type="tel"
                                                placeholder="Enter phone number"
                                                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition"
                                            />

                                            {/* Dropdown Menu */}
                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <>
                                                        <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                                                        <motion.div
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -10 }}
                                                            transition={{ duration: 0.15 }}
                                                            className="absolute top-full left-0 mt-2 w-[240px] bg-white border border-gray-100 rounded-xl shadow-xl z-50 py-2 max-h-[220px] overflow-y-auto"
                                                        >
                                                            {countries.map((country) => (
                                                                <button
                                                                    key={country.name}
                                                                    type="button"
                                                                    onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }}
                                                                    className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 transition-colors ${selectedCountry.name === country.name ? "bg-[#E6F8EB]/50" : ""}`}
                                                                >
                                                                    <div className="flex items-center space-x-3">
                                                                        <Image src={country.flag} alt={country.name} width={20} height={14} className="rounded-sm object-cover" />
                                                                        <span className={`text-sm ${selectedCountry.name === country.name ? "text-tour-green font-medium" : "text-gray-700"}`}>
                                                                            {country.name}
                                                                        </span>
                                                                    </div>
                                                                    <span className="text-xs text-gray-500">{country.code}</span>
                                                                </button>
                                                            ))}
                                                        </motion.div>
                                                    </>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div className="space-y-1.5">
                                        <label className="text-[13px] font-medium text-gray-700">Password</label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Enter password"
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition pr-10"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                                            >
                                                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Sign In Extras */}
                                    {activeTab === "signin" && (
                                        <div className="flex justify-end pt-1">
                                            <button type="button" className="text-[13px] font-medium text-tour-green hover:underline">
                                                Forgot password?
                                            </button>
                                        </div>
                                    )}

                                    {/* Sign Up Extras (Checkbox) */}
                                    {activeTab === "signup" && (
                                        <div className="flex items-start space-x-3 pt-2">
                                            <button
                                                type="button"
                                                onClick={() => setTermsAccepted(!termsAccepted)}
                                                className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center border transition-colors flex-shrink-0 ${termsAccepted ? "bg-tour-green border-tour-green" : "border-gray-300 bg-white"
                                                    }`}
                                            >
                                                {termsAccepted && <Check className="w-3.5 h-3.5 text-white" />}
                                            </button>
                                            <p className="text-[13px] text-gray-600 leading-relaxed">
                                                I agree to Tourmate&apos;s <a href="#" className="text-tour-green font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-tour-green font-medium hover:underline">Privacy Policy</a>
                                            </p>
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full bg-tour-green hover:bg-[#048417] text-white rounded-xl py-3.5 text-sm font-bold transition-colors shadow-md"
                                        >
                                            {activeTab === "signin" ? "Sign In" : "Create Account"}
                                        </button>
                                    </div>

                                </form>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}