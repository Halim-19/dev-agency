'use client'

import { motion } from "framer-motion"
import { Smartphone, Layers, ShieldCheck, Zap, Cpu } from "lucide-react"
import Image from "next/image"
import img4 from '@/public/mobile/img4.png'
import img5 from '@/public/mobile/img5.png'

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
                        className="relative flex justify-center"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-[420px] h-[420px] bg-white/5 blur-[140px] rounded-full" />
                        </div>

                        {/* MAIN PHONE */}
                        <div className="relative z-20">
                            <div className="
                                relative 
                                w-[260px] sm:w-[300px]
                                aspect-[9/19.5]
                                rounded-[3rem]
                                border border-white/10
                                bg-zinc-950
                                shadow-[0_30px_120px_rgba(0,0,0,0.9)]
                                overflow-hidden
                            ">
                                {/* Speaker / Dynamic Island */}
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />

                                {/* Screen */}
                                <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden">
                                    <Image
                                        src={img4}
                                        alt="Mobile App UI"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* SECONDARY PHONE */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="absolute right-0 bottom-6 block z-10"
                        >
                            <div className="
                                relative 
                                w-[190px]
                                aspect-[9/19.5]
                                rounded-[2.5rem]
                                border border-white/10
                                bg-zinc-900
                                overflow-hidden
                                shadow-2xl
                            ">
                                <div className="absolute inset-2 rounded-[2rem] overflow-hidden">
                                    <Image
                                        src={img5}
                                        alt="Secondary Screen"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* FLOATING BADGE */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-0 top-24 hidden md:block z-30"
                        >
                            <div className="p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl">
                                <ShieldCheck className="w-5 h-5 text-white/80 mb-2" />
                                <p className="text-[10px] uppercase tracking-widest text-white/40">
                                    Security
                                </p>
                                <p className="text-xs font-light text-white">
                                    End-to-End Encrypted
                                </p>
                            </div>
                        </motion.div>
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
