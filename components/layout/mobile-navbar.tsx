"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import AuthModal from "../auth/auth-modal";

interface Props {
    isScrolled: boolean;
}

export default function MobileNavbar({ isScrolled }: Props) {
    // Setup states
    const [ isAuthOpen, setIsAuthOpen ] = useState(false);
    const [ authTab, setAuthTab ] = useState<"signin" | "signup">("signin");

    // Helper functions to open specific tabs
    const openSignIn = () => { setAuthTab("signin"); setIsAuthOpen(true); };
    const openSignUp = () => { setAuthTab("signup"); setIsAuthOpen(true); };

    const [ isOpen, setIsOpen ] = useState(false);
    const textColor = isScrolled ? "text-gray-900" : "text-tour-white";

    return (
        <>
            <div className="lg:hidden">
                {/* Mobile Header Bar */}
                <div className="flex items-center justify-between px-4 py-4 border-b relative z-50">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-tour-green rounded-full rounded-br-none flex items-center justify-center">
                            <div className="w-2 h-2 bg-tour-white rounded-full" />
                        </div>
                        <span className={`text-lg font-bold transition-colors ${textColor}`}>Tourmate</span>
                    </div>
                    <button onClick={() => setIsOpen(true)} className="p-2">
                        <Menu className={`w-6 h-6 transition-colors ${textColor}`} />
                    </button>
                </div>
    
                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 z-[60]"
                                onClick={() => setIsOpen(false)}
                            />
                            <motion.div
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-100%" }}
                                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                                className="fixed top-0 left-0 right-0 bg-tour-white z-[70] rounded-b-xl shadow-xl flex flex-col"
                            >
                                <div className="flex items-center justify-between p-4 border-b">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 bg-tour-green rounded-full rounded-br-none flex items-center justify-center">
                                            <div className="w-2 h-2 bg-tour-white rounded-full" />
                                        </div>
                                        <span className="text-lg font-bold text-gray-900">Tourmate</span>
                                    </div>
                                    <button onClick={() => setIsOpen(false)} className="p-2">
                                        <X className="w-5 h-5 text-gray-500" />
                                    </button>
                                </div>
    
                                <div className="p-4 space-y-4">
                                    {/* Selectors */}
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-500 uppercase">Country / Region</label>
                                        <div className="relative border rounded-md px-3 py-2 flex items-center justify-between bg-white">
                                            <div className="flex items-center space-x-2">
                                                <Image src="/assets/images/flags/ghana.png" alt="Ghana" width={20} height={14} className="rounded-sm" />
                                                <span className="text-sm">Ghana</span>
                                            </div>
                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
    
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-500 uppercase">Language</label>
                                        <select className="w-full border rounded-md px-3 py-2 text-sm bg-white appearance-none outline-none focus:ring-1 focus:ring-tour-green">
                                            <option>English</option>
                                        </select>
                                    </div>
    
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-gray-500 uppercase">Currency</label>
                                        <select className="w-full border rounded-md px-3 py-2 text-sm bg-white appearance-none outline-none focus:ring-1 focus:ring-tour-green">
                                            <option>₵ GHS - Ghanaian Cedi</option>
                                        </select>
                                    </div>
    
                                    <hr className="my-4" />
    
                                    {/* Auth Buttons */}
                                    <div className="flex gap-2">
                                        <button
                                            className="flex-1 py-2 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50 text-center"
                                            onClick={openSignIn}
                                        >
                                            Sign In
                                        </button>
                                        <button
                                            className="flex-1 py-2 text-sm font-medium bg-tour-green text-tour-white rounded-md hover:bg-[#048417] text-center"
                                            onClick={openSignUp}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
    
                                    {/* Provider Button */}
                                    <button className="w-full py-2 mt-2 flex items-center justify-center space-x-2 text-sm font-medium border border-gray-200 rounded-md hover:bg-gray-50">
                                        <Image src="/assets/icons/briefcase.svg" alt="Provider" width={16} height={16} />
                                        <span>Become a Provider</span>
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
              {/* // Render Modal outside the nav flow */}
              <AuthModal
                isOpen={isAuthOpen}
                onClose={() => setIsAuthOpen(false)}
                initialTab={authTab}
                />
            
        </>
    
    );
}