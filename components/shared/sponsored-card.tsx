"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface SponsoredCardProps {
    title: string;
    description: string;
    imageSrc: string;
    href: string;
}

export default function SponsoredCard({ title, description, imageSrc, href }: SponsoredCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full h-[400px] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer"
        >
            {/* Background Image */}
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Dark Gradient Overlay for readable text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Sponsored Badge */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md rounded-md px-3 py-1.5 z-10">
                <span className="text-white text-xs font-semibold tracking-wide">Sponsored</span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col items-start text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">
                    {title}
                </h3>

                <p className="text-sm text-gray-200 font-light mb-6 max-w-sm">
                    {description}
                </p>

                <Link href={href} className="px-6 py-2 rounded-full border border-white/50 text-white text-sm font-medium bg-white/5 backdrop-blur-sm hover:bg-white/20 hover:border-white transition-all duration-300">
                    Explore
                </Link>
            </div>
        </motion.div>
    );
}