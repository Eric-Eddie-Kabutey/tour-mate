"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// MOCK DATA
// ==========================================
const availableServices = [
    { id: "stays", name: "Stays", desc: "Offer places for tourists to stay, with nightly pricing.", icon: "/assets/icons/stay.avif" },
    { id: "cars", name: "Car Rental", desc: "Rent out vehicles to customers by the day.", icon: "/assets/icons/car-rental.avif" },
    { id: "events", name: "Events", desc: "Sell tickets for events, shows, or scheduled activities.", icon: "/assets/icons/events.avif" },
    { id: "airport", name: "Airport Pickup", desc: "Offer scheduled airport pickup and drop-off services.", icon: "/assets/icons/airport-pickup.avif" },
    { id: "tours", name: "Tours", desc: "Host guided tours that can be booked in advance.", icon: "/assets/icons/tours.avif" },
    { id: "shops", name: "Shops", desc: "Sell physical products that customers can browse and buy.", icon: "/assets/icons/shops.avif" },
    { id: "flights", name: "Flights", desc: "List and manage flight routes available to travellers.", icon: "/assets/icons/flights.avif" },
    { id: "restaurants", name: "Restaurants", desc: "Accept reservations & showcase your menu to travellers.", icon: "/assets/icons/restaurants.avif" },
];

// ==========================================
// REUSABLE COMPONENTS (MUST BE OUTSIDE)
// ==========================================
const FileUploadRow = ({ label }: { label: string }) => (
    <div className="space-y-1.5 mb-5">
        <label className="text-[13px] font-medium text-gray-700">{label}</label>
        <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-white">
            <span className="text-sm text-gray-400">No File Selected</span>
            <button type="button" className="text-sm font-bold text-tour-green hover:text-[#048417] transition-colors flex items-center space-x-1">
                <span>+ Add File</span>
            </button>
        </div>
    </div>
);

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function ProviderOnboardingPage() {
    const [ step, setStep ] = useState(2);
    const [ selectedServices, setSelectedServices ] = useState<string[]>([]);

    // Handlers
    const toggleService = (id: string) => {
        setSelectedServices(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [ ...prev, id ]
        );
    };

    const handleNext = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setStep(prev => prev - 1);
    };

    return (
        <div className="flex-1 bg-white relative pb-20">

            {/* PROGRESS BAR */}
            {step < 4 && (
                <div className="hidden md:flex fixed top-[24px] right-6 lg:right-12 z-50 items-center space-x-3 text-sm">
                    {/* Step 1: Create Account (Always Done) */}
                    <div className="flex items-center space-x-2 text-tour-green">
                        <div className="w-5 h-5 rounded-full bg-tour-green text-white flex items-center justify-center"><Check className="w-3 h-3" /></div>
                        <span className="font-medium">Create Account</span>
                    </div>
                    <div className="w-10 h-px bg-tour-green" />

                    {/* Step 2: Choose Services */}
                    <div className={`flex items-center space-x-2 ${step >= 2 ? (step > 2 ? 'text-tour-green' : 'text-gray-900 font-bold') : 'text-gray-400'}`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step > 2 ? 'bg-tour-green text-white' : step === 2 ? 'bg-tour-green text-white' : 'bg-gray-200 text-gray-500'}`}>
                            {step > 2 ? <Check className="w-3 h-3" /> : '2'}
                        </div>
                        <span>Choose Services</span>
                    </div>
                    <div className={`w-10 h-px ${step > 2 ? 'bg-tour-green' : 'bg-gray-200'}`} />

                    {/* Step 3: Verify Business */}
                    <div className={`flex items-center space-x-2 ${step >= 3 ? (step > 3 ? 'text-tour-green' : 'text-gray-900 font-bold') : 'text-gray-400'}`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${step > 3 ? 'bg-tour-green text-white' : step === 3 ? 'bg-tour-green text-white' : 'bg-gray-200 text-gray-500'}`}>
                            {step > 3 ? <Check className="w-3 h-3" /> : '3'}
                        </div>
                        <span>Verify Business</span>
                    </div>
                </div>
            )}

            {/* MULTI-STEP CONTENT */}
            <AnimatePresence mode="wait">

                {/* STEP 2: CHOOSE SERVICES */}
                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                        className="max-w-[700px] mx-auto pt-16 px-4 sm:px-6"
                    >
                        <div className="text-center mb-10">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What services do you offer?</h1>
                            <p className="text-gray-500 text-sm md:text-base">Select all that apply. You can add more services later from your dashboard.</p>
                        </div>

                        <div className="space-y-3 mb-10">
                            {availableServices.map((service) => {
                                const isSelected = selectedServices.includes(service.id);
                                return (
                                    <button
                                        key={service.id}
                                        onClick={() => toggleService(service.id)}
                                        className={`w-full flex items-center p-4 md:p-5 border rounded-2xl transition-all duration-200 ${isSelected ? "border-tour-green bg-[#E6F8EB]/40 shadow-sm" : "border-gray-200 hover:border-tour-green/50 bg-white"
                                            }`}
                                    >
                                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-100">
                                            <Image src={service.icon} alt={service.name} width={24} height={24} className="object-contain" />
                                        </div>

                                        <div className="ml-5 text-left flex-1">
                                            <h4 className={`text-base font-bold mb-0.5 ${isSelected ? 'text-tour-green' : 'text-gray-900'}`}>{service.name}</h4>
                                            <p className="text-[13px] text-gray-500 leading-relaxed pr-4">{service.desc}</p>
                                        </div>

                                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? "bg-tour-green border-tour-green text-white" : "border-gray-300 bg-white"
                                            }`}>
                                            {isSelected && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 max-w-md mx-auto">
                            <button className="flex-1 py-3.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition">
                                Back
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={selectedServices.length === 0}
                                className={`flex-1 py-3.5 rounded-xl font-bold transition-all shadow-sm ${selectedServices.length > 0
                                        ? "bg-tour-green text-white hover:bg-[#048417]"
                                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                Continue
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* STEP 3: VERIFY BUSINESS */}
                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
                        className="max-w-[1000px] mx-auto pt-12 md:pt-20 px-4 sm:px-6 flex flex-col md:flex-row gap-12 lg:gap-24"
                    >
                        {/* Left Sidebar */}
                        <div className="w-full md:w-64 flex-shrink-0">
                            <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-4">Your Services</h4>
                            <div className="space-y-2">
                                {selectedServices.map((id, idx) => {
                                    const service = availableServices.find(s => s.id === id);
                                    return (
                                        <div key={id} className="flex items-center space-x-3 bg-[#E6F8EB] px-4 py-2.5 rounded-xl">
                                            <div className="w-5 h-5 rounded-full bg-tour-green text-white flex items-center justify-center text-xs font-bold">
                                                {idx + 1}
                                            </div>
                                            <span className="font-bold text-tour-green text-sm">{service?.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="flex-1 max-w-[600px]">
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify your business</h1>
                                <p className="text-gray-500 text-sm">Provide your business details and documents so we can verify your account.</p>
                            </div>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1.5 mb-5">
                                    <label className="text-[13px] font-medium text-gray-700">Business Name</label>
                                    <input type="text" placeholder="Enter business name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition" />
                                </div>

                                <div className="flex gap-4 mb-5">
                                    <div className="flex-1 space-y-1.5">
                                        <label className="text-[13px] font-medium text-gray-700">Service Type</label>
                                        <div className="relative">
                                            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition appearance-none bg-white text-gray-600">
                                                <option>Select an option</option>
                                                {selectedServices.map(id => (
                                                    <option key={id}>{availableServices.find(s => s.id === id)?.name}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-1.5">
                                        <label className="text-[13px] font-medium text-gray-700">Location</label>
                                        <input type="text" placeholder="Enter location" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition" />
                                    </div>
                                </div>

                                <div className="space-y-1.5 mb-8">
                                    <label className="text-[13px] font-medium text-gray-700">Business Email Address</label>
                                    <input type="email" placeholder="Enter email address" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition" />
                                </div>

                                {/* File Uploads (Now using the correctly scoped component) */}
                                <FileUploadRow label="Business Registration Certificate" />
                                <FileUploadRow label="Operating License" />
                                <FileUploadRow label="Lease Agreement" />

                                {/* Actions */}
                                <div className="flex gap-4 mt-10">
                                    <button onClick={handleBack} className="w-[140px] py-3.5 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition">
                                        Back
                                    </button>
                                    <button onClick={handleNext} className="flex-1 bg-tour-green hover:bg-[#048417] text-white font-bold py-3.5 rounded-xl transition-colors duration-300 shadow-md">
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}

                {/* STEP 4: SUCCESS */}
                {step === 4 && (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                        className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center"
                    >
                        <div className="w-16 h-16 bg-[#E6F8EB] rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <Check className="w-8 h-8 text-tour-green" strokeWidth={3} />
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Application submitted!</h1>

                        <p className="text-gray-500 text-sm md:text-base max-w-md mb-8 leading-relaxed">
                            We&apos;ll review your documents and get back to you within 24–48 hours. Check your email for next steps.
                        </p>

                        <Link href="/" className="bg-tour-green hover:bg-[#048417] text-white font-bold py-3.5 px-8 rounded-xl transition-colors duration-300 shadow-md">
                            Back to home
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}