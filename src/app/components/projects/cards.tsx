import react from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectCards() {

    return (
        <div className="px-4 py-4 mx-auto md:px-24 lg:px-8">
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                    <p className="font-semibold text-gray-200">
                        Sed ut perspiciatis unde omnis iste
                    </p>
                </div>
                <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                    <p className="font-semibold text-gray-200">
                        Well, the way they make shows is
                    </p>
                </div>
                <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                    <p className="font-semibold text-gray-200">
                        Some don't, become nothing again
                    </p>
                </div>
                <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                    <p className="font-semibold text-gray-200">
                        Pommy ipsum smeg head whizz morris
                    </p>
                </div>
                <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                    <p className="font-semibold text-gray-200">
                        Taking the mick middle class bog
                    </p>
                </div>
                <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                    <p className="font-semibold text-gray-200">
                        Sportacus andrew weatherall goose
                    </p>
                </div>
                <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                    <p className="font-semibold text-gray-200">
                        Semi beard cream bun disaster alpha
                    </p>
                </div>
                <div className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
                    <p className="font-semibold text-gray-200">
                        Bro ipsum dolor sit amet gaper dart
                    </p>
                </div>
            </div>
        </div>
    )
}