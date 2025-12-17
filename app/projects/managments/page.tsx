'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import {
    ShoppingCart,
    Stethoscope,
    Utensils,
    GraduationCap,
    Users,
    Plus,
    ArrowRight,
    Check,
    Clock,
    Computer as Desktop,
    Smartphone,
    Tablet
} from "lucide-react"
import DesktopMockup from "@/components/mockup/DesktopMockup"
import Image from 'next/image'

// Mock image imports
import cashierImg from "@/public/supermarket/cashier.png"
import medicalImg from "@/public/doctors/appointment.png"
import restaurantImg from "@/public/supermarket/cashier.png"
import schoolImg from "@/public/supermarket/cashier.png"
import gymImg from "@/public/supermarket/cashier.png"

export default function ManagementsPage() {
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
            mockupImage: cashierImg,
            device: "desktop"
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
            mockupImage: medicalImg,
            device: "desktop"
        },
        {
            id: "restaurant",
            title: "Restaurant Management",
            category: "Hospitality",
            description: "Menu management, table reservations, order processing, and kitchen operations.",
            features: ["Menu Management", "Table Reservations", "Order Processing", "Kitchen Display"],
            icon: <Utensils size={20} />,
            color: "from-orange-500/20 to-orange-600/10",
            iconColor: "text-orange-400",
            available: false,
            mockupImage: restaurantImg,
            device: "tablet"
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
            available: false,
            mockupImage: schoolImg,
            device: "desktop"
        },
        {
            id: "gym",
            title: "Gym Management",
            category: "Fitness",
            description: "Member management, class scheduling, equipment tracking, and payment processing.",
            features: ["Member Management", "Class Scheduling", "Equipment Tracking", "Payments"],
            icon: <Users size={20} />,
            color: "from-red-500/20 to-red-600/10",
            iconColor: "text-red-400",
            available: true,
            mockupImage: gymImg,
            device: "mobile"
        }
    ]

    return (
        <div className="min-h-screen bg-black text-white">

            {/* Compact Header */}
            <div className="pt-8 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="h-[1px] w-6 bg-white/20"></div>
                            <span className="text-xs uppercase tracking-widest text-white/40">Systems</span>
                            <div className="h-[1px] w-6 bg-white/20"></div>
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

            {/* Iterative Systems Display - Compact */}
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
                                    className={`flex flex-col lg:flex-row items-center gap-6 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                >
                                    {/* Content Section - Compact */}
                                    <div className="lg:w-1/2">
                                        <div className="p-5 border border-white/10 rounded-xl bg-linear-to-br from-white/5 to-transparent">
                                            {/* System Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${system.color}`}>
                                                        <div className={system.iconColor}>
                                                            {system.icon}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs uppercase tracking-widest text-white/40">
                                                            {system.category}
                                                        </div>
                                                        <h2 className="text-lg font-medium">
                                                            {system.title}
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${system.available
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-yellow-500/20 text-yellow-400'}`}>
                                                    {system.available ? (
                                                        <>
                                                            <Check className="w-3 h-3" />
                                                            <span>Available</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Clock className="w-3 h-3" />
                                                            <span>Soon</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-sm text-white/60 mb-4 leading-relaxed">
                                                {system.description}
                                            </p>

                                            {/* Features */}
                                            <div className="mb-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {system.features.map((feature, featureIndex) => (
                                                        <span key={featureIndex} className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/60">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Buttons */}
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

                                    {/* Mockup Section - Compact */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="relative">
                                            {/* Device Type Indicator */}
                                            <div className="flex items-center justify-center gap-2 mb-3">
                                                <div className={`px-2 py-1 text-xs rounded-full ${system.device === 'desktop' ? 'bg-blue-500/20 text-blue-400' :
                                                    system.device === 'tablet' ? 'bg-purple-500/20 text-purple-400' :
                                                        'bg-pink-500/20 text-pink-400'}`}>
                                                    {system.device === 'desktop' ? (
                                                        <div className="flex items-center gap-1">
                                                            <Desktop className="w-3 h-3" />
                                                            <span>Desktop</span>
                                                        </div>
                                                    ) : system.device === 'tablet' ? (
                                                        <div className="flex items-center gap-1">
                                                            <Tablet className="w-3 h-3" />
                                                            <span>Tablet</span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center gap-1">
                                                            <Smartphone className="w-3 h-3" />
                                                            <span>Mobile</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Compact Mockup Container */}
                                            <div className="scale-90 origin-center">
                                                <DesktopMockup>
                                                    <div className="relative w-full h-full flex items-center justify-center bg-black">
                                                        <Image
                                                            src={system.mockupImage}
                                                            alt={`${system.title} interface`}
                                                            className="w-full h-full object-contain"
                                                            width={1366}
                                                            height={768} />
                                                    </div>
                                                </DesktopMockup>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                                <div className="mb-10  h-1 w-full bg-gray-800 rounded-2xl"></div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Compact Bottom CTA */}
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