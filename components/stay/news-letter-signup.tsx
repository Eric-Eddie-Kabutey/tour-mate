"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NewsletterSignup() {
    return (
        <section className="py-20 md:py-28 bg-tour-darker-green w-full overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Left Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
                    <div className="relative w-full max-w-[400px] aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                        <Image
                            src="/assets/images/stay/newsletter-giraffe.avif"
                            alt="Giraffe in African savanna"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="w-full md:w-1/2 flex flex-col items-start text-left"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-tour-white mb-6 leading-[1.2] tracking-tight">
                        Sign Up For Our Newsletter To See <br className="hidden lg:block" />
                        <span className="text-tour-green">Where We&apos;re Headed</span> Next
                    </h2>

                    <p className="text-gray-300 text-sm md:text-base font-light mb-8 max-w-md">
                        Be the first to know when we launch our service in new cities across Africa.
                    </p>

                    {/* Form Container */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex items-center w-full max-w-md bg-white rounded-full p-1.5 shadow-lg"
                    >
                        <input
                            type="email"
                            placeholder="Your email address"
                            required
                            className="flex-1 bg-transparent px-5 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 w-full"
                        />
                        <button
                            type="submit"
                            className="bg-tour-green hover:bg-[#048417] text-white px-6 md:px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 shadow-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}