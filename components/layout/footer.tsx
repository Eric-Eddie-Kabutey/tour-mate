import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Heart } from "lucide-react";

const exploreLinks = [
    { name: "Hotels", href: "#" },
    { name: "Apartments", href: "#" },
    { name: "Car Rentals", href: "#" },
    { name: "Tours", href: "#" },
    { name: "Events", href: "#" },
    { name: "Flights", href: "#" },
    { name: "Shops", href: "#" },
];

const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Safety", href: "#" },
    { name: "Travel Tips", href: "#" },
    { name: "Cancellations", href: "#" },
    { name: "Report an Issue", href: "#" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-tour-darker-green pt-16 pb-8 w-full border-t border-white/5">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Grid Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">

                    {/* Column 1: Brand & Newsletter (Spans 2 columns on large screens) */}
                    <div className="lg:col-span-2 flex flex-col">
                        {/* Logo (White Variant) */}
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <div className="w-6 h-6 bg-white rounded-full rounded-br-none flex items-center justify-center">
                                <div className="w-2 h-2 bg-tour-darker-green rounded-full" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-wide">Tourmate</span>
                        </Link>

                        <h3 className="text-white font-bold text-lg mb-2">
                            Travel smarter across Africa
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Get curated destination guides, exclusive deals, and local insider tips delivered to your inbox.
                        </p>

                        {/* Newsletter Input */}
                        <div className="flex items-center bg-white rounded-full p-1 mb-8 max-w-md">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                            />
                            <button className="bg-tour-green hover:bg-[#048417] text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
                                Subscribe
                            </button>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-3">
                            <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-white/10">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-white/10">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-white/10">
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-colors border border-white/10">
                                <FaYoutube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Explore */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {exploreLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-400 hover:text-tour-green transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-400 hover:text-tour-green transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-400 hover:text-tour-green transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Divider & Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Tourmate Technologies Ltd. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5 text-center md:text-right">
                        Made with <Heart className="w-3 h-3 text-tour-green fill-tour-green" /> for Tourmate
                    </p>
                </div>

            </div>
        </footer>
    );
}