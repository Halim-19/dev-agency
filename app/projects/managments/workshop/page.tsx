'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import {
    Wrench,
    ClipboardList,
    Package,
    Car,
    CreditCard,
    Users,
    Check,
    ArrowRight,
    Clock,
    ChevronLeft,
    ChevronRight,
    BarChart2,
    Bell,
    Settings,
    FileText,
} from "lucide-react"
import DesktopMockup from "@/components/mockup/DesktopMockup"
import Image from 'next/image'
import Link from "next/link"

function WorkshopManagement() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [
        {
            src: "/workshop/image.png",
            title: "Workshop Dashboard",
            description: "Full overview of active jobs, revenue, and staff"
        },
        {
            src: "/workshop/image copy.png",
            title: "Job Tracking",
            description: "Real-time repair job status and technician assignment"
        },
        {
            src: "/workshop/image copy 2.png",
            title: "Parts Inventory",
            description: "Stock management with automatic reorder alerts"
        },
        {
            src: "/workshop/image copy 3.png",
            title: "Customer Records",
            description: "Full vehicle and customer history in one place"
        },
        {
            src: "/workshop/image copy 4.png",
            title: "Invoicing",
            description: "Professional invoice generation and payment tracking"
        },
        {
            src: "/workshop/image copy 5.png",
            title: "Reports & Analytics",
            description: "Revenue, productivity, and parts usage reports"
        },
    ]

    const features = [
        {
            icon: <ClipboardList size={20} />,
            title: "Job Order Management",
            description: "Create, assign, and track repair jobs from intake to delivery with real-time status updates"
        },
        {
            icon: <Package size={20} />,
            title: "Parts & Inventory",
            description: "Auto-track spare parts stock levels with low-stock alerts and supplier order management"
        },
        {
            icon: <Car size={20} />,
            title: "Vehicle Records",
            description: "Full service history per vehicle — repairs, parts used, mileage, and maintenance schedules"
        },
        {
            icon: <CreditCard size={20} />,
            title: "Invoicing & Payments",
            description: "Generate professional invoices, track payments, and manage outstanding balances"
        },
        {
            icon: <Users size={20} />,
            title: "Customer Management",
            description: "Complete customer profiles with vehicle history, contact info, and loyalty tracking"
        },
        {
            icon: <BarChart2 size={20} />,
            title: "Business Analytics",
            description: "Revenue reports, technician productivity, and parts usage analytics for smarter decisions"
        }
    ]

    const benefits = [
        "Eliminate lost job orders and paperwork",
        "Reduce parts wastage and stockouts",
        "Speed up invoice generation by 80%",
        "Improve customer retention with service reminders",
        "Full audit trail for every repair job"
    ]

    const highlights = [
        { icon: <Wrench size={18} />, text: "Job Tracking" },
        { icon: <Bell size={18} />, text: "Service Reminders" },
        { icon: <Settings size={18} />, text: "Customizable" },
        { icon: <FileText size={18} />, text: "Auto Invoicing" },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [images.length])

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length)
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)

    return (
        <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-white/20" />
                        <span className="text-sm uppercase tracking-widest text-white/40">Automotive Management</span>
                        <div className="h-px w-8 bg-white/20" />
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
                        Workshop
                        <span className="block mt-2 text-white/80">Management System</span>
                    </h1>

                    <p className="text-lg text-white/60 max-w-3xl mx-auto mb-8">
                        End-to-end repair shop management — from job intake and parts tracking to invoicing and customer history, all in one powerful platform.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <div className="px-3 py-1.5 text-sm bg-green-500/20 text-green-400 rounded-full flex items-center gap-2">
                            <Check className="w-3.5 h-3.5" />
                            Available Now
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-orange-500/20 text-orange-400 rounded-full">
                            Multi-Technician
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-400 rounded-full">
                            Auto Invoicing
                        </div>
                    </div>
                </motion.div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:w-1/2"
                    >
                        {/* Overview */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-white/20 flex-1" />
                                <h2 className="text-sm uppercase tracking-widest text-white/40">System Overview</h2>
                                <div className="h-px bg-white/20 flex-1" />
                            </div>

                            <p className="text-white/60 leading-relaxed mb-8">
                                A complete automotive workshop management solution built for repair shops of all sizes. Manage job orders, technician assignments, spare parts inventory, customer vehicles, and billing — all from one intuitive dashboard accessible on any device.
                            </p>

                            <blockquote className="p-6 border-l-4 border-orange-500 bg-gradient-to-r from-white/5 to-transparent rounded-r-lg mb-8">
                                <p className="text-white/80 italic">
                                    Cuts job processing time by 60% and eliminates inventory discrepancies, resulting in higher throughput and happier customers.
                                </p>
                            </blockquote>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-white/5">
                                        <div className="text-orange-400">{h.icon}</div>
                                        <span className="text-sm text-white/80">{h.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-white/20 flex-1" />
                                <h2 className="text-sm uppercase tracking-widest text-white/40">Key Benefits</h2>
                                <div className="h-px bg-white/20 flex-1" />
                            </div>
                            <div className="space-y-3">
                                {benefits.map((benefit, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <Check className="w-4 h-4 text-orange-400" />
                                        <span className="text-white/80">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-white/20 flex-1" />
                                <h2 className="text-sm uppercase tracking-widest text-white/40">Core Features</h2>
                                <div className="h-px bg-white/20 flex-1" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {features.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-orange-500/20">
                                                <div className="text-orange-400">{feature.icon}</div>
                                            </div>
                                            <div>
                                                <h3 className="font-medium mb-1 text-white/90">{feature.title}</h3>
                                                <p className="text-sm text-white/60">{feature.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="sticky top-8">
                            {/* Nav */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-px bg-white/20 w-8" />
                                    <h2 className="text-sm uppercase tracking-widest text-white/40">Interface Preview</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={prevImage} className="p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button onClick={nextImage} className="p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Dots */}
                            <div className="flex justify-center gap-2 mb-4">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImageIndex(i)}
                                        className={`rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-4 h-2 bg-white' : 'w-2 h-2 bg-white/30'}`}
                                    />
                                ))}
                            </div>

                            {/* Title */}
                            <div className="text-center mb-4">
                                <h3 className="font-medium text-white/90">{images[currentImageIndex].title}</h3>
                                <p className="text-sm text-white/60">{images[currentImageIndex].description}</p>
                            </div>

                            {/* Mockup */}
                            <DesktopMockup>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative w-full h-full flex items-center justify-center bg-black"
                                    >
                                        <Image
                                            src={images[currentImageIndex].src}
                                            alt={`Screenshot: ${images[currentImageIndex].title}`}
                                            width={1366}
                                            height={768}
                                            className="w-full h-full object-contain"
                                            unoptimized
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </DesktopMockup>

                            <div className="text-center mt-4">
                                <div className="inline-flex items-center gap-2 text-xs text-white/40">
                                    <Clock className="w-3 h-3" />
                                    <span>Auto-rotating every 4 seconds</span>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                <Link href="/contact" className="flex-1">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full text-sm font-medium hover:shadow-[0_0_30px_rgba(234,88,12,0.3)] transition-all flex items-center justify-center gap-2"
                                    >
                                        <Wrench className="w-4 h-4" />
                                        Schedule Demo
                                    </motion.button>
                                </Link>
                                <Link href="/contact" className="flex-1">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:border-white/40 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <span>Contact Sales</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 pt-12 border-t border-white/10"
                >
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-light mb-4">Ready to Streamline Your Workshop?</h3>
                        <p className="text-white/60 mb-8">
                            Take control of every repair job, part, and invoice. Let us build the perfect system tailored to your workshop's workflow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="flex-1 max-w-xs mx-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Wrench className="w-4 h-4" />
                                    Get Started
                                </motion.button>
                            </Link>
                            <Link href="/contact" className="flex-1 max-w-xs mx-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:border-white/40 transition-colors"
                                >
                                    Request Custom Solution
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default WorkshopManagement
