'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Mail,
    Phone,
    CheckCircle,
    User,
    MessageSquare,
    Facebook,
    Instagram,
    ArrowRight,
    MessageCircle,
    MapPin,
    Briefcase
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState(false)


    const FORM_ACCESS_KEY = "a5b91727-39e8-46e8-b6ca-a1cbd5d2d55f"

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(false)

        const formData = new FormData(e.currentTarget)
        formData.append("access_key", FORM_ACCESS_KEY)

        // Optional: Custom Subject Line for your email
        formData.append("subject", "New Project Inquiry from Frameless Agency")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if (data.success) {
                setIsSubmitted(true)
                e.currentTarget.reset()
            } else {
                setError(true)
            }
        } catch (err) {
            setError(true)
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            title: "Email",
            value: "bensalemhalim19@gmail.com",
            action: "mailto:bensalemhalim19@gmail.com"
        },
        {
            icon: <MessageCircle size={20} />,
            title: "WhatsApp",
            value: "+213 551 08 54 52",
            action: "https://wa.me/+213551085452"
        }
    ]

    const socialLinks = [
        { icon: <Instagram size={18} />, label: "Instagram", href: "https://www.instagram.com/frameless_agency/" },
        { icon: <Facebook size={18} />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61561030740617" },
    ]

    return (
        <section id="contact" className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12 scroll-mt-20">

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 block mb-4">Contact</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tight mb-4">
                        Let&apos;s Build Something
                        <span className="block mt-2 text-white/40 italic">Amazing</span>
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-8 border border-white/30 rounded-3xl bg-zinc-950/50 backdrop-blur-sm relative overflow-hidden group">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-16 h-16 text-white/50 mx-auto mb-6" />
                                    <h3 className="text-2xl font-light mb-3">Message Sent</h3>
                                    <p className="text-white/40 mb-8">Check your email. We&apos;ll get back to you shortly.</p>
                                    <button onClick={() => setIsSubmitted(false)} className="text-sm border-b border-white/20 pb-1 hover:text-white transition-colors">Send another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                                            <input name="name" type="text" placeholder="Full Name" required className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-all placeholder:text-white/50" />
                                        </div>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                                            <input name="email" type="email" placeholder="Gmail Address" required className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-all placeholder:text-white/50" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                                            <input name="phone" type="tel" placeholder="Phone Number" required className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-all placeholder:text-white/50" />
                                        </div>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                                            <input name="location" type="text" placeholder="Location" required className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-all placeholder:text-white/50" />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                        <select name="project_type" required className="w-full pl-12 pr-4 py-4 bg-white/3 border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-all text-white/40 appearance-none">
                                            <option className="bg-black  text-white/50" value="" disabled selected>Select Project Type</option>
                                            <option className="bg-black  text-white/50" value="Web Development">Web Development</option>
                                            <option className="bg-black  text-white/50" value="UI/UX Design">UI/UX Design</option>
                                            <option className="bg-black  text-white/50" value="Branding">Branding</option>
                                            <option className="bg-black  text-white/50" value="Mobile App">Mobile App</option>
                                        </select>
                                    </div>

                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-white/20" />
                                        <textarea name="description" placeholder="Project Description" rows={4} required className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:border-white/30 transition-all placeholder:text-white/50 resize-none" />
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-white text-black rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    {error && <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>}
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Info Side */}
                    <div className="flex flex-col justify-between py-4">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-[10px] uppercase tracking-widest text-white/50 mb-8">Reach Us Directly</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, i) => (
                                        <a key={i} href={info.action} target="_blank" className="flex items-center gap-6 group cursor-pointer">
                                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/50 uppercase tracking-tighter">{info.title}</p>
                                                <p className="text-lg font-light tracking-tight">{info.value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[10px] uppercase tracking-widest text-white/50 mb-8">Social Presence</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, i) => (
                                        <a key={i} href={social.href} target="_blank" className="px-6 py-3 border border-white/10 rounded-full text-sm font-light hover:bg-white/5 transition-colors flex items-center gap-2">
                                            {social.icon}
                                            {social.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}