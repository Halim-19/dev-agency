'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import {
    Stethoscope,
    User,
    Calendar,
    FileText,
    Pill,
    Shield,
    Clock,
    Activity,
    Database,
    Check,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Bell,
    HeartPulse,
    ClipboardCheck
} from "lucide-react"
import DesktopMockup from "@/components/mockup/DesktopMockup";
import Image from 'next/image'
import Link from "next/link";

function Doctors() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        {
            src: '/doctors/appointment.png',
            title: "Appointment Scheduling",
            description: "Efficient appointment booking and management interface"
        },
        {
            src: '/doctors/patientFiles.png',
            title: "Patient Records",
            description: "Comprehensive patient history and medical records"
        },
        {
            src: '/doctors/prescription.png',
            title: "Prescription Management",
            description: "Digital prescription generation and tracking"
        }
    ];

    const features = [
        {
            icon: <Calendar size={20} />,
            title: "Appointment Scheduling",
            description: "Efficient booking system with calendar integration and automated reminders"
        },
        {
            icon: <User size={20} />,
            title: "Patient Management",
            description: "Complete patient profiles with medical history and treatment plans"
        },
        {
            icon: <FileText size={20} />,
            title: "Medical Records",
            description: "Secure digital health records with easy access and updates"
        },
        {
            icon: <Pill size={20} />,
            title: "Prescription Management",
            description: "Digital prescription generation, tracking, and pharmacy integration"
        },
        {
            icon: <Activity size={20} />,
            title: "Health Analytics",
            description: "Patient health tracking and treatment progress monitoring"
        },
        {
            icon: <Database size={20} />,
            title: "Lab Integration",
            description: "Seamless connection with laboratory systems for test results"
        }
    ];

    const benefits = [
        "Reduce administrative workload by 70%",
        "Improve patient care coordination",
        "Ensure HIPAA compliance",
        "Minimize prescription errors",
        "Enhance patient satisfaction"
    ];

    const complianceFeatures = [
        {
            icon: <Shield size={18} />,
            text: "HIPAA Compliant"
        },
        {
            icon: <Bell size={18} />,
            text: "Automated Alerts"
        },
        {
            icon: <HeartPulse size={18} />,
            text: "Patient Monitoring"
        },
        {
            icon: <ClipboardCheck size={18} />,
            text: "Treatment Tracking"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-px w-8 bg-white/20"></div>
                        <span className="text-sm uppercase tracking-widest text-white/40">Medical Management</span>
                        <div className="h-px w-8 bg-white/20"></div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
                        Medical Clinic
                        <span className="block mt-2 text-white/80">Management System</span>
                    </h1>

                    <p className="text-lg text-white/60 max-w-3xl mx-auto mb-8">
                        Comprehensive healthcare management solution designed to streamline clinic operations,
                        enhance patient care, and ensure HIPAA compliance.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <div className="px-3 py-1.5 text-sm bg-green-500/20 text-green-400 rounded-full flex items-center gap-2">
                            <Check className="w-3.5 h-3.5" />
                            Available Now
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-400 rounded-full">
                            HIPAA Compliant
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-purple-500/20 text-purple-400 rounded-full">
                            Multi-Device Support
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Left Column - Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:w-1/2"
                    >
                        {/* System Overview */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-white/20 flex-1"></div>
                                <h2 className="text-sm uppercase tracking-widest text-white/40">System Overview</h2>
                                <div className="h-px bg-white/20 flex-1"></div>
                            </div>

                            <p className="text-white/60 leading-relaxed mb-8">
                                A complete healthcare management solution that provides secure, role-based access
                                for doctors, nurses, receptionists, and administrative staff. Streamline patient care,
                                appointments, medical records, and billing in one integrated platform.
                            </p>

                            <blockquote className="p-6 border-l-4 border-emerald-500 bg-gradient-to-r from-white/5 to-transparent rounded-r-lg mb-8">
                                <p className="text-white/80 italic">
                                    Improves patient care coordination by 60% and reduces administrative errors,
                                    leading to enhanced operational efficiency and better patient outcomes.
                                </p>
                            </blockquote>

                            {/* Compliance Features */}
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {complianceFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-white/5">
                                        <div className="text-emerald-400">
                                            {feature.icon}
                                        </div>
                                        <span className="text-sm text-white/80">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Benefits */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-white/20 flex-1"></div>
                                <h2 className="text-sm uppercase tracking-widest text-white/40">Key Benefits</h2>
                                <div className="h-px bg-white/20 flex-1"></div>
                            </div>

                            <div className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <Check className="w-4 h-4 text-emerald-400" />
                                        <span className="text-white/80">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Key Features Grid */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-white/20 flex-1"></div>
                                <h2 className="text-sm uppercase tracking-widest text-white/40">Core Features</h2>
                                <div className="h-px bg-white/20 flex-1"></div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-emerald-500/20">
                                                <div className="text-emerald-400">
                                                    {feature.icon}
                                                </div>
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

                    {/* Right Column - Mockup with Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="sticky top-8">
                            {/* Image Navigation */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-px bg-white/20 w-8"></div>
                                    <h2 className="text-sm uppercase tracking-widest text-white/40">Interface Preview</h2>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={prevImage}
                                        className="p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Image Indicator Dots */}
                            <div className="flex justify-center gap-2 mb-4">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white' : 'bg-white/30'}`}
                                    />
                                ))}
                            </div>

                            {/* Image Title */}
                            <div className="text-center mb-4">
                                <h3 className="font-medium text-white/90">{images[currentImageIndex].title}</h3>
                                <p className="text-sm text-white/60">{images[currentImageIndex].description}</p>
                            </div>

                            {/* Mockup Container */}
                            <DesktopMockup>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative w-full h-full flex items-center justify-center bg-black"
                                    >
                                        <Image
                                            src={images[currentImageIndex].src}
                                            alt={`Screenshot: ${images[currentImageIndex].title}`}
                                            width={1366}
                                            height={768}
                                            className="w-full h-full object-contain"
                                            priority={true}
                                        />
                                        {/* Subtle grid overlay */}
                                        <div className="absolute inset-0 pointer-events-none opacity-5">
                                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </DesktopMockup>

                            {/* Auto-play indicator */}
                            <div className="text-center mt-4">
                                <div className="inline-flex items-center gap-2 text-xs text-white/40">
                                    <Clock className="w-3 h-3" />
                                    <span>Auto-rotating every 4 seconds</span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                <Link href='/contact' className="flex-1">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full text-sm font-medium hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Schedule Demo
                                    </motion.button>
                                </Link>
                                <Link href='/contact' className="flex-1">
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

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 pt-12 border-t border-white/10"
                >
                    <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-2xl font-light mb-4">Transform Your Medical Practice</h3>
                        <p className="text-white/60 mb-8">
                            Join hundreds of medical professionals who have streamlined their operations with our comprehensive clinic management system.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href='/contact' className="flex-1 max-w-xs mx-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Stethoscope className="w-4 h-4" />
                                    Start Free Trial
                                </motion.button>
                            </Link>
                            <Link href='/contact' className="flex-1 max-w-xs mx-auto">
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
    );
}

export default Doctors;