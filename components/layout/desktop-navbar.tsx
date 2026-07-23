"use client";
import { motion } from "framer-motion";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AuthModal from "@/components/auth/auth-modal";
import { useState } from "react";
import ProviderInfoModal from "../provider-onboarding/provider-inf-modal";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Shared Data
const countries = [
  { code: "GH", name: "Ghana", flag: "/assets/images/flags/ghana.png" },
  { code: "NG", name: "Nigeria", flag: "/assets/images/flags/nigeria.avif" },
  { code: "KE", name: "Kenya", flag: "/assets/images/flags/kenya.avif" },
  { code: "ZA", name: "South Africa", flag: "/assets/images/flags/south-africa.png" },
  { code: "ET", name: "Ethiopia", flag: "/assets/images/flags/ethiopia.avif" },
];

const languages = [ "English", "Français", "العربية", "Kiswahili" ];

const currencies = [
  "₵ GHS · Ghanaian Cedi",
  "₦ NGN · Nigerian Naira",
  "KSh KES · Kenyan Shilling",
  "R ZAR · South African Rand",
  "Br ETB · Ethiopian Birr",
];

interface Props {
  isScrolled: boolean;
}

export default function DesktopNavbar({ isScrolled }: Props) {
  // Setup states
  const [ isAuthOpen, setIsAuthOpen ] = useState(false);
  const [ authTab, setAuthTab ] = useState<"signin" | "signup">("signin");
  const [ isProviderModalOpen, setIsProviderModalOpen ] = useState(false);

  // Helper functions to open specific tabs
  const openSignIn = () => { setAuthTab("signin"); setIsAuthOpen(true); };
  const openSignUp = () => { setAuthTab("signup"); setIsAuthOpen(true); };

  const [ isOpen, setIsOpen ] = useState(false);

  // Applied State (Visible in navbar)
  const [ currentCountry, setCurrentCountry ] = useState(countries[ 0 ]);

  // Temporary State (Inside Popover before hitting Apply)
  const [ tempCountryCode, setTempCountryCode ] = useState(countries[ 0 ].code);
  const [ tempLanguage, setTempLanguage ] = useState(languages[ 0 ]);
  const [ tempCurrency, setTempCurrency ] = useState(currencies[ 0 ]);

  const handleApply = () => {
    const selected = countries.find(c => c.code === tempCountryCode) || countries[ 0 ];
    setCurrentCountry(selected);
    setIsOpen(false); // Close popover
  };

  // Dynamic color classes based on scroll state
  const textColor = isScrolled ? "text-gray-900" : "text-tour-white";
  const subTextColor = isScrolled ? "text-gray-700 hover:text-tour-green" : "text-gray-200 hover:text-white";
  const iconFilter = isScrolled ? "" : "brightness-0 invert"; // Makes black SVGs white
  const buttonBorder = isScrolled ? " hover:bg-gray-50" : " hover:bg-white/10 text-white";

  return (
    <>
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:flex items-center justify-between px-8 py-4 z-50 relative"
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
          {/* <Link href="#" className="flex items-center space-x-2 hover:text-tour-green transition">
            <Image src="/assets/icons/provider.avif" alt="Provider" width={20} height={20} className={`w-5 h-5 transition-all ${iconFilter}`} />
            <span>Become a Provider</span>
            </Link> */}
            <button
              onClick={() => setIsProviderModalOpen(true)}
              className="flex items-center space-x-2 hover:text-tour-green transition"
            >
              <Image src="/assets/icons/provider.avif" alt="Provider" width={20} height={20} className="w-5 h-5" />
              <span>Become a Provider</span>
            </button>
          <Link href="#" className="flex items-center space-x-2 hover:text-tour-green transition">
            <Image src="/assets/icons/kiddos.avif" alt="Carry Kiddos" width={20} height={20} className={`w-5 h-5 transition-all ${iconFilter}`} />
            <span>Carry Kiddos</span>
          </Link>
        </div>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center space-x-6">
          {/* SHADCN REGION POPOVER */}
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger className={`flex items-center space-x-2 text-sm font-medium px-2 py-1.5 rounded-md transition outline-none ${isScrolled ? 'hover:bg-gray-50 text-gray-700' : 'hover:bg-white/10 text-white'}`}>
              <Image src={currentCountry.flag} alt={currentCountry.name} width={24} height={16} className="rounded-sm object-cover" />
              <span>{currentCountry.code}</span>
              <ChevronDown className={`w-4 h-4 ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`} />
            </PopoverTrigger>

            <PopoverContent className="w-[320px] p-5 rounded-2xl shadow-2xl border-gray-100 bg-white" align="end" sideOffset={8}>
              <div className="mb-5">
                <h4 className="text-base font-bold text-gray-900 mb-0.5">Region settings</h4>
                <p className="text-xs text-gray-500">Content adjusts based on your selection.</p>
              </div>

              <div className="space-y-4">
                {/* Country Select */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Country / Region</label>
                  <Select value={tempCountryCode} onValueChange={(val) => val && setTempCountryCode(val)}>
                    <SelectTrigger className="w-full h-11 bg-white border-gray-200 rounded-lg focus:ring-1 focus:ring-tour-green outline-none">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-gray-100 shadow-xl bg-white">
                      {countries.map((c) => (
                        <SelectItem key={c.code} value={c.code} className="hover:bg-gray-50 focus:bg-[#E6F8EB] focus:text-tour-green cursor-pointer py-2.5">
                          <div className="flex items-center space-x-3">
                            <Image src={c.flag} alt={c.name} width={20} height={14} className="rounded-sm object-cover" />
                            <span>{c.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Language Select */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Language</label>
                  <Select value={tempLanguage} onValueChange={(val) => val && setTempCountryCode(val)}>
                    <SelectTrigger className="w-full h-11 bg-white border-gray-200 rounded-lg focus:ring-1 focus:ring-tour-green outline-none">
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-gray-100 shadow-xl bg-white">
                      {languages.map((lang) => (
                        <SelectItem key={lang} value={lang} className="hover:bg-gray-50 focus:bg-[#E6F8EB] focus:text-tour-green cursor-pointer py-2.5">
                          {lang}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Currency Select */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Currency</label>
                  <Select value={tempCurrency} onValueChange={(val) => val && setTempCountryCode(val)}>
                    <SelectTrigger className="w-full h-11 bg-white border-gray-200 rounded-lg focus:ring-1 focus:ring-tour-green outline-none">
                      <SelectValue placeholder="Select Currency" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-gray-100 shadow-xl bg-white">
                      {currencies.map((curr) => (
                        <SelectItem key={curr} value={curr} className="hover:bg-gray-50 focus:bg-[#E6F8EB] focus:text-tour-green cursor-pointer py-2.5">
                          {curr}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <button
                onClick={handleApply}
                className="w-full mt-6 bg-tour-green hover:bg-[#048417] text-white font-bold py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Apply
              </button>
            </PopoverContent>
          </Popover>

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
      
      {/* Render Modal */}
      <ProviderInfoModal
        isOpen={isProviderModalOpen}
        onClose={() => setIsProviderModalOpen(false)}
      />
  </>
  );
}