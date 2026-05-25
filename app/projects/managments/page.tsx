'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
    ShoppingCart,
    Stethoscope,
    GraduationCap,
    Wrench,
    Plus,
    ArrowRight,
    Check,
    Clock,
    ChevronLeft,
    ChevronRight,
    Computer as Desktop,
    Smartphone,
} from "lucide-react"
import Image from 'next/image'

const managementSystems = [
    {
        id: "supermarket",
        title: "Supermarket Management",
        category: "Retail",
        description: "Complete inventory, sales, suppliers, and staff management system with real-time analytics.",
        features: ["POS System", "Inventory Tracking", "Sales Analytics", "Staff Management"],
        icon: <ShoppingCart size={20} />,
        color: "from-blue-500/20 to-blue-600/10",
        iconColor: "text-blue-400",
        available: true,
        device: "desktop",
        images: [
            { src: "/supermarket/home.png", alt: "Supermarket Home" },
            { src: "/supermarket/cashier.png", alt: "POS Cashier" },
            { src: "/supermarket/bill.png", alt: "Billing" },
            { src: "/supermarket/auth.png", alt: "Authentication" },
        ],
    },
    {
        id: "doctors",
        title: "Medical Clinic Management",
        category: "Healthcare",
        description: "Patient records, appointments, billing, and medical staff management with HIPAA compliance.",
        features: ["Patient Records", "Appointments", "Medical Billing", "Lab Reports"],
        icon: <Stethoscope size={20} />,
        color: "from-emerald-500/20 to-emerald-600/10",
        iconColor: "text-emerald-400",
        available: true,
        device: "desktop",
        images: [
            { src: "/doctors/desktop/4.png", alt: "Billing" },
            { src: "/doctors/desktop/5.png", alt: "Reports" },
            { src: "/doctors/desktop/2.png", alt: "Appointments" },
            { src: "/doctors/desktop/3.png", alt: "Patient Records" },
            { src: "/doctors/desktop/6.png", alt: "Staff Management" },
            { src: "/doctors/desktop/7.png", alt: "Lab Results" },
            { src: "/doctors/desktop/8.png", alt: "Settings" },
            { src: "/doctors/desktop/9.png", alt: "Analytics" },
            { src: "/doctors/desktop/1.png", alt: "Clinic Dashboard" },

        ],
    },
    {
        id: "school",
        title: "School Management",
        category: "Education",
        description: "Student records, class scheduling, grade management, and attendance tracking.",
        features: ["Student Records", "Class Scheduling", "Grade Management", "Parent Portal"],
        icon: <GraduationCap size={20} />,
        color: "from-purple-500/20 to-purple-600/10",
        iconColor: "text-purple-400",
        available: true,
        device: "desktop",
        images: [

            { src: "/school/2.png", alt: "Student Records" },
            { src: "/school/3.png", alt: "Class Schedule" },
            { src: "/school/4.png", alt: "Grades" },
            { src: "/school/5.png", alt: "Attendance" },
            { src: "/school/6.png", alt: "Reports" },
            { src: "/school/10.png", alt: "School Dashboard" },
        ],
    },
    {
        id: "workshop",
        title: "Workshop Management",
        category: "Automotive",
        description: "Comprehensive repair shop management with job tracking, parts inventory, and customer management.",
        features: ["Job Tracking", "Parts Inventory", "Customer Records", "Invoicing"],
        icon: <Wrench size={20} />,
        color: "from-orange-500/20 to-orange-600/10",
        iconColor: "text-orange-400",
        available: true,
        device: "desktop",
        images: [
            { src: "/workshop/image.png", alt: "Workshop Dashboard" },
            { src: "/workshop/image copy.png", alt: "Job Tracking" },
            { src: "/workshop/image copy 2.png", alt: "Parts Inventory" },
            { src: "/workshop/image copy 3.png", alt: "Customer Records" },
            { src: "/workshop/image copy 4.png", alt: "Invoicing" },
            { src: "/workshop/image copy 5.png", alt: "Reports" },
        ],
    },
]

function SystemCarousel({ images, device }: { images: { src: string; alt: string }[], device: string }) {
    const [index, setIndex] = useState(0)
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
    const next = () => setIndex((i) => (i + 1) % images.length)

    const isMobile = device === "mobile"

    return (
        <div className="relative flex flex-col items-center gap-3">
            {/* Mockup frame */}
            {isMobile ? (
                <div className="relative w-[200px] aspect-[9/19.5] rounded-[3rem] border border-white/15 bg-zinc-950 shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />
                    <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images[index].src}
                                    alt={images[index].alt}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            ) : (
                // Desktop frame
                <div className="relative w-full">
                    <div className="rounded-t-xl border border-white/10 bg-zinc-900 overflow-hidden">
                        {/* Browser bar */}
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 border-b border-white/10">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        </div>
                        {/* Screen */}
                        <div className="relative w-full aspect-video bg-black overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={images[index].src}
                                        alt={images[index].alt}
                                        fill
                                        className="object-cover object-top"
                                        unoptimized
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    {/* Stand */}
                    <div className="mx-auto w-16 h-3 bg-zinc-800 border-x border-b border-white/10" />
                    <div className="mx-auto w-24 h-1.5 bg-zinc-700 rounded-b-sm" />
                </div>
            )}

            {/* Controls */}
            {images.length > 1 && (
                <div className="flex items-center gap-3 mt-1">
                    <button
                        onClick={prev}
                        className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                        <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`rounded-full transition-all duration-300 ${i === index ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"}`}
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
            )}
        </div>
    )
}

export default function ManagementsPage() {
    return (
        <div className="min-h-screen bg-black text-white">

            {/* Header */}
            <div className="pt-8 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="h-[1px] w-6 bg-white/20" />
                            <span className="text-xs uppercase tracking-widest text-white/40">Systems</span>
                            <div className="h-[1px] w-6 bg-white/20" />
                        </div>

                        <h1 className="text-3xl font-light tracking-tight mb-3">
                            Management
                            <span className="block mt-1 text-white/80">Systems</span>
                        </h1>

                        <p className="text-sm text-white/60 max-w-xl mx-auto">
                            Professional solutions to streamline business operations across industries.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Systems List */}
            <div className="py-8 px-4">
                <div className="max-w-5xl mx-auto space-y-10">
                    {managementSystems.map((system, index) => {
                        const isEven = index % 2 === 0

                        return (
                            <div key={system.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className="lg:w-1/2 w-full">
                                        <div className="p-5 border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-transparent">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${system.color}`}>
                                                        <div className={system.iconColor}>{system.icon}</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs uppercase tracking-widest text-white/40">
                                                            {system.category}
                                                        </div>
                                                        <h2 className="text-lg font-medium">{system.title}</h2>
                                                    </div>
                                                </div>
                                                <div className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${system.available
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-yellow-500/20 text-yellow-400'}`}>
                                                    {system.available ? (
                                                        <><Check className="w-3 h-3" /><span>Available</span></>
                                                    ) : (
                                                        <><Clock className="w-3 h-3" /><span>Soon</span></>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-sm text-white/60 mb-4 leading-relaxed">
                                                {system.description}
                                            </p>

                                            <div className="mb-4 flex flex-wrap gap-2">
                                                {system.features.map((feature, fi) => (
                                                    <span key={fi} className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/60">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Device badge */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${system.device === 'desktop'
                                                    ? 'bg-blue-500/20 text-blue-400'
                                                    : 'bg-pink-500/20 text-pink-400'}`}>
                                                    {system.device === 'desktop'
                                                        ? <><Desktop className="w-3 h-3" /><span>Desktop</span></>
                                                        : <><Smartphone className="w-3 h-3" /><span>Mobile</span></>
                                                    }
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <div className="flex gap-2">
                                                {system.available ? (
                                                    <Link href={`/projects/managments/${system.id}`} className="flex-1">
                                                        <motion.button
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                            className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-xs font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-1"
                                                        >
                                                            <span>View</span>
                                                            <ArrowRight className="w-3 h-3" />
                                                        </motion.button>
                                                    </Link>
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="flex-1 px-4 py-2 bg-white/10 rounded-full text-xs font-medium text-white/40 cursor-not-allowed"
                                                    >
                                                        Coming Soon
                                                    </button>
                                                )}
                                                <Link href="/contact" className="flex-1">
                                                    <motion.button
                                                        whileHover={{ scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="w-full px-4 py-2 border border-white/10 rounded-full text-xs font-medium hover:border-white/20 transition-colors flex items-center justify-center gap-1"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                        <span>Custom</span>
                                                    </motion.button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Carousel */}
                                    <div className="w-full lg:w-1/2">
                                        <SystemCarousel images={system.images} device={system.device} />
                                    </div>
                                </motion.div>

                                {index < managementSystems.length - 1 && (
                                    <div className="mt-10 h-px w-full bg-white/5 rounded-full" />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="px-4 pb-8">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-6 border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-transparent text-center"
                    >
                        <h3 className="text-lg font-light mb-2">Custom Solutions</h3>
                        <p className="text-sm text-white/60 mb-4 max-w-md mx-auto">
                            Need something specific? We build custom management systems.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-5 py-2 bg-white text-black rounded-full text-xs font-medium hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                            >
                                <Plus className="w-3 h-3" />
                                Request Custom
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}