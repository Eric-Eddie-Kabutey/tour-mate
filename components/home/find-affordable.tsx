'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = {
    name: string;
    columns: {
        title: string;
        items: string[];
    }[];
};

const data: Category[] = [
    {
        name: 'Flights',
        columns: [
            {
                title: 'European Flights',
                items: [
                    'Flights to London',
                    'Flights to Paris',
                    'Flights to Amsterdam',
                    'Flights to Frankfurt',
                    'Flights to Madrid',
                    'Flights to Rome',
                ],
            },
            {
                title: 'Asian Flights',
                items: [
                    'Flights to Dubai',
                    'Flights to Istanbul',
                    'Flights to Bangkok',
                    'Flights to Singapore',
                    'Flights to Mumbai',
                    'Flights to Abu Dhabi',
                ],
            },
            {
                title: 'North American Flights',
                items: [
                    'Flights to New York',
                    'Flights to Atlanta',
                    'Flights to Toronto',
                    'Flights to Washington',
                    'Flights to Houston',
                    'Flights to Chicago',
                ],
            },
        ],
    },
    {
        name: 'Hotel Stays',
        columns: [
            {
                title: 'European Hotels',
                items: [
                    'Hotels in London',
                    'Hotels in Paris',
                    'Hotels in Amsterdam',
                    'Hotels in Frankfurt',
                    'Hotels in Madrid',
                    'Hotels in Rome',
                ],
            },
            {
                title: 'Asian Hotels',
                items: [
                    'Hotels in Dubai',
                    'Hotels in Istanbul',
                    'Hotels in Bangkok',
                    'Hotels in Singapore',
                    'Hotels in Mumbai',
                    'Hotels in Abu Dhabi',
                ],
            },
            {
                title: 'North American Hotels',
                items: [
                    'Hotels in New York',
                    'Hotels in Atlanta',
                    'Hotels in Toronto',
                    'Hotels in Washington',
                    'Hotels in Houston',
                    'Hotels in Chicago',
                ],
            },
        ],
    },
];

export default function FindAffordable() {
    const [ currentIndex, setCurrentIndex ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full min-h-[500px] flex flex-col items-center pt-24 pb-32 px-6 bg-white overflow-hidden">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-20 text-center flex items-center justify-center gap-3">
                    <span>Find Affordable</span>
                    <div className="relative inline-block w-[140px] sm:w-[160px] md:w-[210px] lg:w-[260px] h-[1.2em] text-left">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={currentIndex}
                                initial={{ y: -40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 40, opacity: 0 }}
                                transition={{ duration: 0.6, ease: [ 0.22, 1, 0.36, 1 ] }}
                                className="absolute left-0 top-0 text-green-600 whitespace-nowrap drop-shadow-sm"
                            >
                                {data[ currentIndex ].name}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </h2>

                {/* Lists Container */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.6, ease: [ 0.22, 1, 0.36, 1 ] }}
                            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12"
                        >
                            {data[ currentIndex ].columns.map((col, idx) => (
                                <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                                    <h3 className="text-gray-900 font-bold mb-6 text-[1.05rem] tracking-tight">{col.title}</h3>
                                    <ul className="flex flex-col gap-3.5">
                                        {col.items.map((item, itemIdx) => (
                                            <li
                                                key={itemIdx}
                                                className="text-gray-500 text-[0.95rem] hover:text-green-600 cursor-pointer transition-colors duration-200"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
