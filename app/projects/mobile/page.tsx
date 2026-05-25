'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone, Layers, ShieldCheck, Zap, Cpu, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const mobileImages = [
    { src: "/mobile/diabetes/photo_6046585801652506494_y.jpg", alt: "Mobile App Screen 1" },
    { src: "/mobile/diabetes/photo_6046585801652506495_y.jpg", alt: "Mobile App Screen 2" },
    { src: "/mobile/diabetes/photo_6046585801652506496_y.jpg", alt: "Mobile App Screen 3" },
    { src: "/mobile/diabetes/photo_6046585801652506497_y.jpg", alt: "Mobile App Screen 4" },
    { src: "/mobile/diabetes/photo_6046585801652506498_y.jpg", alt: "Mobile App Screen 5" },
    { src: "/mobile/diabetes/photo_6046585801652506499_y.jpg", alt: "Mobile App Screen 6" },
    { src: "/mobile/diabetes/photo_6046585801652506500_y.jpg", alt: "Mobile App Screen 7" },
    { src: "/mobile/diabetes/photo_6046585801652506501_y.jpg", alt: "Mobile App Screen 8" },
    { src: "/mobile/diabetes/photo_6046585801652506502_y.jpg", alt: "Mobile App Screen 9" },
]

const features = [
    {
        title: "iOS & Android",
        description: "Native and cross-platform solutions using React Native and Flutter.",
        icon: <Smartphone className="w-5 h-5" />
    },
    {
        title: "Performance First",
        description: "60fps animations and optimized backend integration for zero lag.",
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: "User-Centric UX",
        description: "Intuitive interfaces designed for thumb-navigation and accessibility.",
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: "Offline Support",
        description: "Local data persistence so your app works even without internet.",
        icon: <Cpu className="w-5 h-5" />
    }
]

export default function MobileAppProject() {
    const [mainIndex, setMainIndex] = useState(0)
    const secondaryIndex = (mainIndex + 1) % mobileImages.length

    const prev = () => setMainIndex((i) => (i - 1 + mobileImages.length) % mobileImages.length)
    const next = () => setMainIndex((i) => (i + 1) % mobileImages.length)

    return (
        <section className="w-full py-24 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* VISUAL SHOWCASE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative flex flex-col items-center gap-6"
                    >
                        {/* Phone row */}
                        <div className="relative flex justify-center items-end w-full">
                            {/* Ambient Glow */}
                            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                <div className="w-[280px] h-[280px] bg-white/5 blur-[100px] rounded-full" />
                            </div>

                            {/* MAIN PHONE */}
                            <div className="relative z-20">
                                <div className="
                                    relative
                                    w-[160px] sm:w-[190px] md:w-[210px]
                                    aspect-[9/19.5]
                                    rounded-[2.5rem]
                                    border border-white/10
                                    bg-zinc-950
                                    shadow-[0_20px_80px_rgba(0,0,0,0.9)]
                                    overflow-hidden
                                ">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30" />

                                    {/* Screen */}
                                    <div className="absolute inset-1.5 rounded-[2rem] overflow-hidden">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={mainIndex}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={mobileImages[mainIndex].src}
                                                    alt={mobileImages[mainIndex].alt}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                    priority
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>

                            {/* SECONDARY PHONE */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.7 }}
                                className="relative z-10 -ml-6 mb-[-20px]"
                            >
                                <div className="
                                    relative
                                    w-[120px] sm:w-[140px] md:w-[155px]
                                    aspect-[9/19.5]
                                    rounded-[2rem]
                                    border border-white/10
                                    bg-zinc-900
                                    overflow-hidden
                                    shadow-xl
                                    opacity-80
                                ">
                                    <div className="absolute inset-1.5 rounded-[1.5rem] overflow-hidden">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={secondaryIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={mobileImages[secondaryIndex].src}
                                                    alt={mobileImages[secondaryIndex].alt}
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>

                            {/* FLOATING BADGE */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute left-0 top-6 hidden sm:block z-30"
                            >
                                <div className="p-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
                                    <ShieldCheck className="w-4 h-4 text-white/80 mb-1.5" />
                                    <p className="text-[9px] uppercase tracking-widest text-white/40">Security</p>
                                    <p className="text-[11px] font-light text-white">End-to-End</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Navigation controls */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={prev}
                                className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <ChevronLeft className="w-3.5 h-3.5" />
                            </button>
                            <div className="flex gap-1.5">
                                {mobileImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setMainIndex(i)}
                                        className={`rounded-full transition-all duration-300 ${i === mainIndex ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={next}
                                className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <div className="space-y-14">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-5">
                                Core Expertise
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">
                                Mobile <span className="italic text-white/60">Applications</span>
                            </h2>
                            <p className="text-white/40 font-light leading-relaxed text-lg max-w-xl">
                                We design and engineer mobile products where performance, security,
                                and refined user experience are non-negotiable.
                            </p>
                        </motion.div>

                        {/* FEATURES */}
                        <div className="grid sm:grid-cols-2 gap-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="w-11 h-11 mb-4 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-sm font-medium tracking-wide uppercase mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-white/30 font-light leading-snug">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
