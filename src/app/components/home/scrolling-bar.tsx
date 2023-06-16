"use client";
import { motion, AnimatePresence } from "framer-motion";
import "./marquee.css";

export default function ScrollBar() {
    const marqueeVariants = {
        animate: {
            x: [0, -15550],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 125,
                    ease: "linear",
                },
            },
        },
        initial: {
            x: -15550,
        },
    };

    return (
        <div>
            <div className="marquee">
                {/* 3. Using framer motion */}
                <motion.div
                    className="track"
                    variants={marqueeVariants}
                    initial="initial"
                    animate="animate"
                    exit="initial" // Reset position on exit (optional)
                >
                    <h1 className="flex mt-3 font-black text-[14.9vw] text-zinc-300 dark:text-zinc-300 uppercase leading-none whitespace-nowrap tracking-tight flex justify-start">
                    Full Stack Developer, Game Developer, Designer, Artificial Intelligence, Full Stack Developer, Game Developer, Designer, Artificial Intelligence, Full Stack Developer, Game Developer, Designer, Artificial Intelligence, Full Stack Developer, Game Developer, Designer, Artificial Intelligence, 
                    </h1>
                </motion.div>
            </div>
        </div>
    );
}
