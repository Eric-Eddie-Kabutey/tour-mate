"use client";
import { useRef, useState, useMemo, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Heart, Star, ChevronDown, Minus, Plus, X } from "lucide-react";
import Image from "next/image";

// Shadcn UI Imports
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

// ==========================================
// TYPES & INTERFACES
// ==========================================
export type FilterType = "button" | "select" | "date-range" | "date-single" | "counter";

export interface FilterConfig {
    id: string;
    label: string;
    type: FilterType;
    options?: string[];
    dateLabels?: [ string, string ];
}

export interface CarouselItem {
    id: string;
    image: string;
    title: string;
    subtitle?: string;
    location?: string;
    tags?: string;
    priceText: ReactNode;
    rating: number;
    rawPrice: number;
    popularity: number;
    buttonText?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [ key: string ]: any;
}

interface SmartCarouselProps {
    title: string;
    titleHighlight?: string;
    subtitle: string;
    filters: FilterConfig[];
    items: CarouselItem[];
    itemType: string; // <--- Tells the carousel what type of data it's rendering (e.g., "stays", "cars")

}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function SmartCarousel({ title, titleHighlight, subtitle, filters, items, itemType }: SmartCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter()

    // Filter State Management
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [ filterState, setFilterState ] = useState<Record<string, any>>({});

    // Re-render key to force Shadcn Select to reset when cleared
    const [ resetKey, setResetKey ] = useState(0);

    // Dynamic Update Handler
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateFilter = (key: string, value: any) => {
        setFilterState(prev => ({ ...prev, [ key ]: value }));
    };

    const clearFilters = () => {
        setFilterState({});
        setResetKey(prev => prev + 1); // Forces Shadcn dropdowns to clear
    };

    const hasActiveFilters = Object.values(filterState).some(val => val !== undefined && val !== false && val !== "" && !String(val).includes("All"));

    // ==========================================
    // SMART FILTERING ENGINE
    // ==========================================
    const filteredItems = useMemo(() => {
        let result = [ ...items ];

        Object.entries(filterState).forEach(([ key, value ]) => {
            if (value === undefined || value === null || value === false || value === "" || String(value).includes("All")) return;
            if (key === "Sort by" || key.includes("Date") || key === "dates") return;

            // 1. Rating Logic ("4.5* & above")
            if (key.includes("Rating") && typeof value === "string") {
                const minRate = parseFloat(value);
                if (!isNaN(minRate)) result = result.filter(item => item.rating >= minRate);
            }

            // 2. Price Range Logic ("Under $30", "$60 - $100", "$100+")
            else if (key.includes("Price") && typeof value === "string") {
                const nums = value.match(/\d+/g)?.map(Number);
                if (nums) {
                    if (value.includes("Under")) result = result.filter(i => i.rawPrice <= nums[ 0 ]);
                    else if (value.includes("+")) result = result.filter(i => i.rawPrice >= nums[ 0 ]);
                    else if (nums.length === 2) result = result.filter(i => i.rawPrice >= nums[ 0 ] && i.rawPrice <= nums[ 1 ]);
                }
            }

            // 3. Counter Logic (e.g. Guests >= 2)
            else if (typeof value === "number") {
                result = result.filter(item => (item[ key ] as number) >= value);
            }

            // 4. Exact String/Boolean Match
            else {
                result = result.filter(item => item[ key ] === true || item[ key ] === value);
            }
        });

        // Apply Sorting
        const sortBy = filterState[ "Sort by" ] as string;
        if (sortBy) {
            if (sortBy.includes("Low to High")) result.sort((a, b) => a.rawPrice - b.rawPrice);
            else if (sortBy.includes("High to Low")) result.sort((a, b) => b.rawPrice - a.rawPrice);
            else if (sortBy.includes("Top Rated")) result.sort((a, b) => b.rating - a.rating);
            else if (sortBy.includes("Most Popular")) result.sort((a, b) => b.popularity - a.popularity);
        }

        return result;
    }, [ items, filterState ]);

    // Desktop Arrow Navigation
    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) return;
        const amount = scrollRef.current.children[ 0 ].clientWidth + 24;
        scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    };

    // Dynamic Routing Handler
    const handleCardClick = (id: string) => {
        // Generates a clean URL: /listing?type=stays&id=1
        router.push(`/listing?type=${itemType}&id=${id}`);
    };

    return (
        <section className="py-16 md:py-24 bg-tour-white w-full overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
                    <div className="flex flex-col items-start max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            {title} {titleHighlight && <span className="text-tour-green">{titleHighlight}</span>}
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base">{subtitle}</p>
                    </div>
                    <div className="hidden md:flex items-center space-x-3 pb-2">
                        <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:text-tour-green shadow-sm transition"><ChevronLeft className="w-5 h-5" /></button>
                        <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:text-tour-green shadow-sm transition"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                </div>

                {/* Dynamic Filters Row */}
                <div className="flex overflow-x-auto gap-3 pb-4 mb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                    {filters.map((filter) => {
                        const currentValue = filterState[ filter.id ];

                        // 1. TOGGLE BUTTONS (Direct HTML button)
                        if (filter.type === "button") {
                            return (
                                <button
                                    key={filter.id}
                                    onClick={() => updateFilter(filter.id, !currentValue)}
                                    className={`px-4 py-2 border rounded-full text-sm whitespace-nowrap transition-colors flex-shrink-0 ${currentValue ? "border-tour-green bg-[#E6F8EB] text-tour-green font-medium" : "border-gray-200 text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    {filter.label}
                                </button>
                            );
                        }

                        // 2. SHADCN SELECT DROPDOWNS
                        if (filter.type === "select" && filter.options) {
                            const isActive = currentValue && !String(currentValue).includes("All");
                            return (
                                <Select
                                    key={`${resetKey}-${filter.id}`} // Resets internal state on clear
                                    value={currentValue as string | undefined}
                                    onValueChange={(val) => val && updateFilter(filter.id, val)}
                                >
                                    <SelectTrigger
                                        className={`h-auto px-4 py-2 border rounded-full text-sm whitespace-nowrap transition-colors flex-shrink-0 focus:ring-0 shadow-none outline-none ${isActive ? "border-tour-green bg-[#E6F8EB] text-tour-green font-medium" : "border-gray-200 text-gray-600 hover:bg-gray-50"
                                            }`}
                                    >
                                        <span className="flex items-center gap-1.5">
                                            {isActive ? currentValue : filter.label}
                                        </span>
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl border-gray-100 shadow-xl bg-white z-[80] min-w-[160px]">
                                        {filter.options.map(opt => (
                                            <SelectItem key={opt} value={opt} className="hover:bg-gray-50 focus:bg-[#E6F8EB] focus:text-tour-green cursor-pointer py-2.5 text-sm">
                                                {opt}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            );
                        }

                        // Determine label & active state for custom Popovers
                        let displayLabel = filter.label;
                        let isActive = false;

                        if (filter.type === "counter" && currentValue > 0) {
                            displayLabel = `${currentValue} ${filter.label}`;
                            isActive = true;
                        } else if (filter.type.includes("date") && currentValue) {
                            displayLabel = "Dates Selected";
                            isActive = true;
                        }

                        // 3. SHADCN POPOVER (For Counters and Dates)
                        return (
                            <Popover key={`${resetKey}-${filter.id}`}>
                                <PopoverTrigger
                                    className={`flex items-center gap-1.5 px-4 py-2 border rounded-full text-sm whitespace-nowrap transition-colors flex-shrink-0 outline-none ${isActive ? "border-tour-green bg-[#E6F8EB] text-tour-green font-medium" : "border-gray-200 text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    <span>{displayLabel}</span>
                                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                                </PopoverTrigger>

                                <PopoverContent className="rounded-2xl border-gray-100 shadow-xl bg-white z-[80] p-5 w-auto" align="start">

                                    {/* DATE RANGE PICKER */}
                                    {filter.type === "date-range" && (
                                        <div className="flex gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{filter.dateLabels?.[ 0 ] || "Start"}</label>
                                                <input type="date" value={currentValue?.start || ""} onChange={(e) => updateFilter(filter.id, { ...currentValue, start: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-tour-green transition text-gray-700 bg-white" />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{filter.dateLabels?.[ 1 ] || "End"}</label>
                                                <input type="date" value={currentValue?.end || ""} onChange={(e) => updateFilter(filter.id, { ...currentValue, end: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-tour-green transition text-gray-700 bg-white" />
                                            </div>
                                        </div>
                                    )}

                                    {/* SINGLE DATE PICKER */}
                                    {filter.type === "date-single" && (
                                        <div className="flex flex-col space-y-1.5 w-56">
                                            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">{filter.label}</label>
                                            <input type="date" value={currentValue || ""} onChange={(e) => updateFilter(filter.id, e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-tour-green transition text-gray-700 bg-white" />
                                        </div>
                                    )}

                                    {/* COUNTER (Guests / Passengers) */}
                                    {filter.type === "counter" && (
                                        <div className="flex items-center justify-between w-56">
                                            <span className="font-semibold text-gray-700">{filter.label}</span>
                                            <div className="flex items-center space-x-3">
                                                <button onClick={() => updateFilter(filter.id, Math.max(0, (currentValue || 0) - 1))} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition"><Minus className="w-4 h-4" /></button>
                                                <span className="w-6 text-center text-base font-bold text-gray-900">{currentValue || 0}</span>
                                                <button onClick={() => updateFilter(filter.id, (currentValue || 0) + 1)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition"><Plus className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                    )}

                                </PopoverContent>
                            </Popover>
                        );
                    })}

                    {/* Reset Filters Button */}
                    <AnimatePresence>
                        {hasActiveFilters && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                                onClick={clearFilters}
                                className="flex items-center space-x-1.5 px-4 py-2 bg-red-50 border border-red-100 text-red-600 hover:bg-red-100 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-colors shadow-sm"
                            >
                                <X className="w-3.5 h-3.5" />
                                <span>Clear</span>
                            </motion.button>
                        )}
                    </AnimatePresence>

                </div>

                {/* Carousel Content */}
                <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-8 pt-2 min-h-[440px]">
                    <AnimatePresence>
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, type: "spring" }}
                                    key={item.id}
                                    onClick={() => handleCardClick(item.id)} // <--- Clean dynamic routing
                                    className="w-[85vw] md:w-[280px] lg:w-[300px] flex-shrink-0 snap-center md:snap-start bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer"
                                >
                                    <div className="relative w-full h-[190px] overflow-hidden">
                                        <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <button
                                            onClick={(e) => { e.stopPropagation(); }}
                                            className="absolute top-3 right-3 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/40 transition z-10"
                                            
                                        ><Heart className="w-4 h-4 text-white" /></button>
                                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 flex items-center space-x-1 z-10">
                                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                            <span className="text-white text-xs font-semibold">{item.rating}</span>
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{item.title}</h3>
                                        {item.subtitle && <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>}

                                        {item.location && (
                                            <div className="flex items-center space-x-1.5 text-gray-400 mb-3">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm">{item.location}</span>
                                            </div>
                                        )}
                                        {item.tags && <div className="text-[13px] text-gray-500 mb-5">{item.tags}</div>}

                                        <div className="mt-auto flex flex-col space-y-4">
                                            <div className="flex items-end">{item.priceText}</div>
                                            <button className="w-full py-2.5 rounded-xl border border-tour-green text-tour-green font-semibold hover:bg-tour-green hover:text-white transition-colors duration-300">
                                                {item.buttonText || "Book Now"}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full flex flex-col items-center justify-center py-16 text-gray-400">
                                <p>No results found matching your filters.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}