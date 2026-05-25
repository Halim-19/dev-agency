'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import {
    GraduationCap,
    Users,
    Calendar,
    BookOpen,
    BarChart2,
    Bell,
    Check,
    ArrowRight,
    Clock,
    ChevronLeft,
    ChevronRight,
    ClipboardList,
    Award,
    MessagesSquare,
} from "lucide-react"
import DesktopMockup from "@/components/mockup/DesktopMockup"
import Image from 'next/image'
import Link from "next/link"

function SchoolManagement() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [
        {
            src: "/school/2.png",
            title: "Student Records",
            description: "Complete student profiles and academic history"
        },
        {
            src: "/school/3.png",
            title: "Class Schedule",
            description: "Automated timetable generation and management"
        },
        {
            src: "/school/4.png",
            title: "Grade Management",
            description: "Real-time grading and GPA calculation"
        },
        {
            src: "/school/5.png",
            title: "Attendance",
            description: "Daily attendance tracking with parent notifications"
        },
        {
            src: "/school/6.png",
            title: "Reports",
            description: "Academic performance reports and analytics"
        },
        {
            src: "/school/10.png",
            title: "Dashboard",
            description: "Full school overview and quick actions"
        },
    ]

    const features = [
        {
            icon: <Users size={20} />,
            title: "Student Management",
            description: "Complete student profiles with academic history, enrollment, and parent contacts"
        },
        {
            icon: <Calendar size={20} />,
            title: "Class Scheduling",
            description: "Automated timetable generation with conflict detection and room allocation"
        },
        {
            icon: <BookOpen size={20} />,
            title: "Grade Management",
            description: "Real-time grade entry, GPA calculation, and transcript generation"
        },
        {
            icon: <ClipboardList size={20} />,
            title: "Attendance Tracking",
            description: "Daily attendance with automated parent SMS/email notifications"
        },
        {
            icon: <BarChart2 size={20} />,
            title: "Academic Analytics",
            description: "Performance dashboards for students, classes, and teachers"
        },
        {
            icon: <MessagesSquare size={20} />,
            title: "Parent Portal",
            description: "Real-time communication between parents, teachers, and admin"
        }
    ]

    const benefits = [
        "Reduce administrative workload by 65%",
        "Improve parent-school communication",
        "Automated report card generation",
        "Real-time attendance notifications",
        "Data-driven academic decisions"
    ]

    const highlights = [
        { icon: <GraduationCap size={18} />, text: "Multi-level Access" },
        { icon: <Bell size={18} />, text: "Smart Notifications" },
        { icon: <Award size={18} />, text: "Merit Tracking" },
        { icon: <BarChart2 size={18} />, text: "Deep Analytics" },
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
                        <span className="text-sm uppercase tracking-widest text-white/40">Education Management</span>
                        <div className="h-px w-8 bg-white/20" />
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
                        School
                        <span className="block mt-2 text-white/80">Management System</span>
                    </h1>

                    <p className="text-lg text-white/60 max-w-3xl mx-auto mb-8">
                        A complete academic management platform that connects students, teachers, parents, and administrators in one seamless system.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <div className="px-3 py-1.5 text-sm bg-green-500/20 text-green-400 rounded-full flex items-center gap-2">
                            <Check className="w-3.5 h-3.5" />
                            Available Now
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-purple-500/20 text-purple-400 rounded-full">
                            Multi-role Access
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-400 rounded-full">
                            Parent Portal
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
                                A comprehensive school administration platform providing role-based access for principals, teachers, students, and parents. Digitize every aspect of school life — from enrollment to graduation — while keeping stakeholders connected in real time.
                            </p>

                            <blockquote className="p-6 border-l-4 border-purple-500 bg-gradient-to-r from-white/5 to-transparent rounded-r-lg mb-8">
                                <p className="text-white/80 italic">
                                    Reduces paperwork by 80% and dramatically improves communication between teachers and parents, leading to better academic outcomes.
                                </p>
                            </blockquote>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {highlights.map((h, i) => (
                                    <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-white/5">
                                        <div className="text-purple-400">{h.icon}</div>
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
                                        <Check className="w-4 h-4 text-purple-400" />
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
                                            <div className="p-2 rounded-lg bg-purple-500/20">
                                                <div className="text-purple-400">{feature.icon}</div>
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
                                        className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-sm font-medium hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all flex items-center justify-center gap-2"
                                    >
                                        <GraduationCap className="w-4 h-4" />
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
                        <h3 className="text-2xl font-light mb-4">Modernize Your School Administration</h3>
                        <p className="text-white/60 mb-8">
                            Join schools that have transformed their operations and improved student outcomes with our comprehensive management platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="flex-1 max-w-xs mx-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <GraduationCap className="w-4 h-4" />
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

export default SchoolManagement