"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProviderSignInPage() {
    const router = useRouter();
    const [ showPassword, setShowPassword ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    // Fake Login Handler redirecting to Provider Onboarding setup
    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            router.push("/provider-onboarding");
        }, 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[420px] flex flex-col"
        >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-sm text-gray-500 mb-8">
                Sign in to your provider dashboard to manage your services and bookings.
            </p>

            <form onSubmit={handleSignIn} className="space-y-4">

                {/* Email Address */}
                <div className="space-y-1.5">
                    <label className="text-[13px] font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        required
                        placeholder="Enter email address"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition"
                    />
                </div>

                {/* Password */}
                <div className="space-y-1.5 pb-2">
                    <div className="flex items-center justify-between">
                        <label className="text-[13px] font-medium text-gray-700">Password</label>
                        <button type="button" className="text-[12px] font-medium text-tour-green hover:underline">
                            Forgot password?
                        </button>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
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
                    disabled={isLoading}
                    className="w-full bg-tour-green hover:bg-[#048417] text-white rounded-xl py-3.5 text-sm font-bold transition-all shadow-md mb-4 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center h-[52px]"
                >
                    {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        "Sign In"
                    )}
                </button>

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

                {/* Navigation Link to Sign Up */}
                <div className="text-center mt-6">
                    <span className="text-[13px] text-gray-500">Don&apos;t have an account? </span>
                    <Link href="/provider-auth/sign-up" className="text-[13px] font-medium text-tour-green hover:underline">
                        Sign Up
                    </Link>
                </div>

            </form>
        </motion.div>
    );
}