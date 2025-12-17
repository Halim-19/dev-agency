'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import {
    ShoppingCart,
    Package,
    TrendingUp,
    Users,
    Check,
    ArrowRight,
    Shield,
    Zap,
    CreditCard,
    AlertCircle,
    Clock,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import DesktopMockup from "@/components/mockup/DesktopMockup";
import Image from 'next/image'
import Link from "next/link";

function Supermarket() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Use static paths instead of imports
    const images = [
        {
            src: '/supermarket/cashier.png',
            title: "POS Interface",
            description: "Point of Sale system for fast transactions"
        },
        {
            src: '/supermarket/home.png',
            title: "Dashboard",
            description: "Real-time analytics and overview"
        },
        {
            src: '/supermarket/auth.png',
            title: "Authentication",
            description: "Secure role-based access"
        },
        {
            src: '/supermarket/bill.png',
            title: "Billing System",
            description: "Detailed invoice generation"
        }
    ];


    const features = [
        {
            icon: <ShoppingCart size={20} />,
            title: "Point of Sale (POS)",
            description: "Fast and intuitive interface for processing transactions, returns, and multiple payment methods"
        },
        {
            icon: <Package size={20} />,
            title: "Inventory Management",
            description: "Real-time stock tracking with automatic low-stock alerts and supplier integration"
        },
        {
            icon: <TrendingUp size={20} />,
            title: "Sales Analytics",
            description: "Comprehensive reports on performance, best-sellers, and staff productivity"
        },
        {
            icon: <Users size={20} />,
            title: "Staff Management",
            description: "Clock-in/out features, shift scheduling, and role-based access control"
        },
        {
            icon: <Shield size={20} />,
            title: "Security & Compliance",
            description: "Enterprise-grade security with audit trails and data encryption"
        },
        {
            icon: <Zap size={20} />,
            title: "High Performance",
            description: "Optimized for speed with offline capability and cloud synchronization"
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
                        <span className="text-sm uppercase tracking-widest text-white/40">Supermarket Management</span>
                        <div className="h-px w-8 bg-white/20"></div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
                        Supermarket
                        <span className="block mt-2 text-white/80">Management System</span>
                    </h1>

                    <p className="text-lg text-white/60 max-w-3xl mx-auto mb-8">
                        Comprehensive web-based application designed to centralize and optimize all critical retail operations.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <div className="px-3 py-1.5 text-sm bg-green-500/20 text-green-400 rounded-full flex items-center gap-2">
                            <Check className="w-3.5 h-3.5" />
                            Available Now
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-400 rounded-full">
                            Customizable
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-purple-500/20 text-purple-400 rounded-full">
                            Role-based Access
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
                                A complete retail management solution that provides role-based access for managers, cashiers,
                                and inventory staff, ensuring efficiency and accuracy across all supermarket operations.
                            </p>

                            <blockquote className="p-6 border-l-4 border-blue-500 bg-linear-to-r from-white/5 to-transparent rounded-r-lg mb-8">
                                <p className="text-white/80 italic">
                                    Reduces manual errors by 90% and provides actionable data, leading to significant boosts
                                    in operational efficiency and customer satisfaction.
                                </p>
                            </blockquote>

                            <div className="flex items-center gap-4 text-sm text-white/40">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>Real-time Updates</span>
                                </div>
                                <div className="h-4 w-px bg-white/20"></div>
                                <div className="flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>Automated Alerts</span>
                                </div>
                                <div className="h-4 w-px bg-white/20"></div>
                                <div className="flex items-center gap-2">
                                    <CreditCard className="w-4 h-4" />
                                    <span>Multiple Payments</span>
                                </div>
                            </div>
                        </div>

                        {/* Key Features Grid */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-white/20 flex-1"></div>
                                <h2 className="text-sm uppercase tracking-widest text-white/40">Key Features</h2>
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
                                            <div className="p-2 rounded-lg bg-blue-500/20">
                                                <div className="text-blue-400">
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
                                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[20px_20px]"></div>
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
                            <Link href='/contact' className="w-full flex justify-center mt-8 text-center">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:border-white/40 transition-colors inline-flex items-center gap-2 group"
                                >
                                    <span>Request Demo</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
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

                </motion.div>
            </div>
        </div>
    );
}

export default Supermarket;