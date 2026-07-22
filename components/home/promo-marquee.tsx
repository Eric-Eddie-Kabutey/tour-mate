"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PromoMarquee() {    
    const cards = [
        "/assets/images/traveling.webp",
        "/assets/images/time-to-travel.webp",
        "/assets/images/explore-your-world.webp",
        "/assets/images/holiday.jpg",
    ];

    // We duplicate the array to create a seamless infinite scrolling effect
    // Framer motion will slide it 50% of the way, then snap back to 0 instantly.
    const marqueeCards = [ ...cards, ...cards ];

    return (
        <section id="promo-marquee" className="py-12 bg-tour-white overflow-hidden w-full relative">
            {/* Optional: Left and Right Gradients for smooth fade-out edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-tour-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-tour-white to-transparent z-10 pointer-events-none" />

            <div className="relative w-full flex items-center">
                <motion.div
                    className="flex space-x-4 md:space-x-6 w-max"
                    animate={{ x: [ "0%", "-50%" ] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Increase/decrease for slower/faster scrolling
                    }}
                >
                    {marqueeCards.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[320px] md:w-[480px] lg:w-[600px] h-[180px] md:h-[260px] lg:h-[320px] flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 group cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={`Promotion ${index}`}
                                fill
                                sizes="(max-width: 768px) 320px, (max-width: 1024px) 480px, 600px"
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                priority={index < 3} // Load the first few immediately
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}