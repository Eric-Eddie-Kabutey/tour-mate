"use client";
import { motion, Variants } from "framer-motion";
import { PlaneTakeoff, CircleDollarSign, TowerControl } from "lucide-react";

const features = [
    {
        icon: PlaneTakeoff,
        title: "Explore Africa With Tourmate",
        description: "From the Sahara to the Serengeti, Tourmate connects you with verified stays, rides, guides, and experiences across the entire continent — all in one place.",
    },
    {
        icon: CircleDollarSign,
        title: "Save for Tomorrow's Trip",
        description: "Set a travel goal, track your savings, and unlock exclusive deals as you go. Your next African adventure is always within reach.",
    },
    {
        icon: TowerControl,
        title: "Adventures You Can't Miss",
        description: "Curated bucket-list experiences handpicked by locals — from desert sunrises to ocean safaris. These are the moments that change you.",
    },
];

export default function WhyTravelWithUs() {
    // Animation variants
    const headerVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const cardsContainerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.2 } }
    };

    return (
        <section className="py-24 bg-tour-white flex justify-center w-full relative z-10">
            <div className="max-w-6xl w-full px-4 flex flex-col items-center">

                {/* Section Header */}
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center text-center max-w-2xl mb-16"
                >
                    <div className="bg-[#E6F8EB] text-tour-green px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
                        Why Travel With Us
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Everything You Need For An Unforgettable Journey
                    </h2>

                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Tourmate is built for the bold traveller — whether you&apos;re chasing sunsets, saving
                        for your next escape, or seeking adventures off the beaten path.
                    </p>
                </motion.div>

                {/* Feature Cards Grid */}
                <motion.div
                    variants={cardsContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col"
                            >
                                {/* Icon Container */}
                                <div className="w-full flex justify-center mb-8 h-20 items-center">
                                    <div className="w-20 h-20 rounded-full bg-[#E6F8EB] flex items-center justify-center transition-transform hover:scale-110 duration-300">
                                        <Icon className="w-10 h-10 text-tour-green" strokeWidth={2} />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col flex-grow text-left">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}