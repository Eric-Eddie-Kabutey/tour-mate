"use client";
import { motion } from "framer-motion";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AuthModal from "@/components/auth/auth-modal";
import { useState } from "react";

interface Props {
  isScrolled: boolean;
}

export default function DesktopNavbar({ isScrolled }: Props) {
  // Setup states
  const [ isAuthOpen, setIsAuthOpen ] = useState(false);
  const [ authTab, setAuthTab ] = useState<"signin" | "signup">("signin");

  // Helper functions to open specific tabs
  const openSignIn = () => { setAuthTab("signin"); setIsAuthOpen(true); };
  const openSignUp = () => { setAuthTab("signup"); setIsAuthOpen(true); };

  // Dynamic color classes based on scroll state
  const textColor = isScrolled ? "text-gray-900" : "text-tour-white";
  const subTextColor = isScrolled ? "text-gray-700 hover:text-tour-green" : "text-gray-200 hover:text-white";
  const iconFilter = isScrolled ? "" : "brightness-0 invert"; // Makes black SVGs white
  const buttonBorder = isScrolled ? "border-gray-200 hover:bg-gray-50" : "border-white/30 hover:bg-white/10 text-white";

  return (
    <>
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:flex items-center justify-between px-8 py-4  border-b z-50 relative"
    >
      {/* Left side: Logo and Links */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 bg-tour-green rounded-full rounded-br-none flex items-center justify-center">
             <div className="w-3 h-3 bg-tour-white rounded-full" />
          </div>
          <span className={`text-xl font-bold text-gray-900 transition-colors ${textColor}`}>Tourmate</span>
        </Link>

        <div className={`flex items-center space-x-6 text-sm font-medium transition-colors ${subTextColor}`}>
          <Link href="#" className="flex items-center space-x-2 hover:text-tour-green transition">
            <Image src="/assets/icons/provider.avif" alt="Provider" width={20} height={20} className={`w-5 h-5 transition-all ${iconFilter}`} />
            <span>Become a Provider</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 hover:text-tour-green transition">
            <Image src="/assets/icons/kiddos.avif" alt="Carry Kiddos" width={20} height={20} className={`w-5 h-5 transition-all ${iconFilter}`} />
            <span>Carry Kiddos</span>
          </Link>
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center space-x-6">
        <button className={`flex items-center space-x-2 text-sm font-medium px-2 py-1 rounded-md transition ${isScrolled ? 'hover:bg-gray-50 text-gray-700' : 'hover:bg-white/10 text-white'}`}>
          <Image src="/assets/images/flags/ghana.png" alt="Ghana" width={24} height={16} className="rounded-sm" />
          <span>GH</span>
          <ChevronDown className={`w-4 h-4 ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`} />
        </button>

        <button
          className="flex items-center space-x-2 text-tour-red border border-tour-red px-4 py-1.5 rounded-full text-sm font-medium hover:bg-red-50 transition"
        >
            <Link className="flex items-center space-x-2" href="/sos">
          <Bell className="w-4 h-4" />
            <span>SOS</span>
            </Link>
        </button>

        <div className="flex items-center space-x-3">
          <button
            className={`text-sm font-medium px-4 py-2 border rounded-md transition-colors ${buttonBorder}`}
            onClick={openSignIn}
          >
            Sign In
          </button>
          <button
            className="text-sm font-medium px-4 py-2 bg-tour-green text-tour-white rounded-md hover:bg-[#048417] transition"
            onClick={openSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </motion.nav>
      
      {/* // Render Modal outside the nav flow */}
  <AuthModal
    isOpen={isAuthOpen}
    onClose={() => setIsAuthOpen(false)}
    initialTab={authTab}
  />
  </>
  );
}