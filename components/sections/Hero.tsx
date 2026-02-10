'use client'
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import heroImage from '@/public/hero/hero-image.png'
import Image from 'next/image'

function Hero() {
    // Reveal timing constants
    const REVEAL_DELAY = 1.8;

    return (
        <section
            id="hero"
            /* h-screen ensures it takes exactly 100% of the viewport height */
            className="relative h-screen md:h-[90vh] flex flex-col lg:flex-row justify-center items-center text-center lg:text-left px-6 lg:px-16 overflow-hidden bg-black"
        >
            {/* 1. THE IMAGE: Absolute Centered Start */}
            <motion.div
                initial={{
                    x: "-50%",
                    y: "-50%",
                    left: "50%",
                    top: "50%",
                    position: "absolute",
                    opacity: 0,
                    scale: 1
                }}
                animate={{
                    /* Stage 1: Stay at center and scale up (Full Focus)
                       Stage 2: Move to the final layout position */
                    left: ["50%", "50%", (typeof window !== 'undefined' && window.innerWidth >= 1024 ? "70%" : "50%")],
                    top: ["50%", "50%", (typeof window !== 'undefined' && window.innerWidth >= 1024 ? "50%" : "20%")],
                    opacity: [0, 1, 1],
                    scale: (typeof window !== 'undefined' && window.innerWidth >= 1024 ? [0.8, 1.2, 1] : [0.8, 1, 1])

                }}
                transition={{
                    duration: 3,
                    times: [0, 0.4, 1],
                    ease: [0.16, 1, 0.3, 1]
                }}
                className="w-full max-w-xl lg:max-w-xl z-20 pointer-events-none"
            >
                <Image
                    src={heroImage}
                    alt="From ideas to app"
                    className="filter invert-100 object-contain"
                    priority
                />
            </motion.div>

            {/* 2. THE CONTENT: Appears as the image clears the space */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1.2,
                    delay: REVEAL_DELAY,
                    ease: "easeOut"
                }}
                /* lg:mr-auto helps push the content to the left when the image moves right */
                className="w-full lg:w-1/2 relative z-10 lg:mr-auto"
            >
                {/* Visual Accent Line */}
                <motion.div
                    className="h-[1px] bg-linear-to-r from-transparent via-white/30 to-transparent lg:via-white/50 lg:to-transparent mb-10 mx-auto lg:mx-0 max-w-xs"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: REVEAL_DELAY + 0.5 }}
                />

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tighter mb-4 leading-none">
                    frameless
                    <span className="block mt-2 text-white/70 italic font-light text-3xl md:text-5xl lg:text-6xl">Agency</span>
                </h1>

                <p className="text-base md:text-lg text-white/40 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
                    Turning chaotic ideas into
                    <span className="text-white/80 font-normal"> digital reality.</span>
                </p>

                {/* Desktop Action */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="hidden lg:inline-block px-10 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-[10px] uppercase tracking-[0.4em]"
                >
                    Explore Work
                </motion.button>
            </motion.div>

            {/* Social Links (Mobile Only) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: REVEAL_DELAY + 0.8 }}
                className="flex lg:hidden justify-center items-center gap-6 mt-8 z-10"
            >
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/frameless_agency/">
                    <FaInstagram className="w-8 h-8 p-2 rounded-full border border-white/20 bg-white/5" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61561030740617">
                    <FaFacebook className="w-8 h-8 p-2 rounded-full border border-white/20 bg-white/5" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61561030740617">
                    <FaWhatsapp className="w-8 h-8 p-2 rounded-full border border-white/20 bg-white/5" />
                </a>
            </motion.div>

            {/* Bottom Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: REVEAL_DELAY + 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.div>
        </section>
    )
}

export default Hero