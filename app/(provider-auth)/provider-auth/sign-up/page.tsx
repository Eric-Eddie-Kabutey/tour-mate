"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ChevronDown } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";

const countries = [
    { name: "Cameroon", code: "+237", flag: "/assets/images/flags/cameroon.png" },
    { name: "Nigeria", code: "+234", flag: "/assets/images/flags/nigeria.png" },
    { name: "Kenya", code: "+254", flag: "/assets/images/flags/kenya.png" },
    { name: "South Africa", code: "+27", flag: "/assets/images/flags/south-africa.png" },
    { name: "Ghana", code: "+233", flag: "/assets/images/flags/ghana.png" },
    { name: "Ethiopia", code: "+251", flag: "/assets/images/flags/ethiopia.png" },
];

export default function ProviderSignUpPage() {
    const [ showPassword, setShowPassword ] = useState(false);
    const [ selectedCountry, setSelectedCountry ] = useState(countries[ 0 ]);
    const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[460px] flex flex-col"
        >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Provider Account</h1>
            <p className="text-sm text-gray-500 mb-8">
                Join Tourmate and start offering your services to travellers near you.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">

                {/* Full Name */}
                <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-gray-700">Full Name</label>
                    <input type="text" placeholder="Enter full name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition" />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-gray-700">Email Address</label>
                    <input type="email" placeholder="Enter email address" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition" />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-gray-700">Phone number</label>
                    <div className="flex gap-3 relative">
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-between w-[115px] border border-gray-200 rounded-xl px-3 py-3 bg-white hover:bg-gray-50 transition-colors focus:border-tour-green focus:ring-1 focus:ring-tour-green outline-none"
                        >
                            <div className="flex items-center space-x-2">
                                <Image src={selectedCountry.flag} alt={selectedCountry.name} width={20} height={14} className="rounded-sm object-cover" />
                                <span className="text-sm font-medium text-gray-700">{selectedCountry.code}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition"
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

                {/* Password */}
                <div className="space-y-1.5 pb-2">
                    <label className="text-[13px] font-medium text-gray-700">Password</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition pr-10"
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

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-tour-green hover:bg-[#048417] text-white rounded-xl py-3.5 text-sm font-bold transition-colors shadow-md mb-4"
                >
                    Continue
                </button>

                {/* Terms */}
                <p className="text-[11px] text-gray-500 text-center leading-relaxed mb-6">
                    By signing up, you agree to the <a href="#" className="text-tour-green hover:underline">Terms of Service</a> and <a href="#" className="text-tour-green hover:underline">Privacy Policy</a>.
                </p>

                {/* Divider */}
                <div className="flex items-center space-x-4 mb-6">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-xs text-gray-400 font-medium uppercase">or</span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Google Button */}
                <button type="button" className="w-full flex items-center justify-center space-x-3 border border-gray-200 rounded-xl py-3 hover:bg-gray-50 transition-colors mb-6">
                    <FcGoogle className="w-5 h-5" />
                    <span className="text-[13px] font-medium text-gray-700">Continue with Google</span>
                </button>

                {/* Navigation Link to Sign In */}
                <div className="text-center">
                    <span className="text-[13px] text-gray-500">Already have an account? </span>
                    <Link href="/provider-auth/sign-in" className="text-[13px] font-medium text-tour-green hover:underline">
                        Sign In
                    </Link>
                </div>

            </form>
        </motion.div>
    );
}