'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Send,
    Mail,
    Phone,
    MapPin,
    Clock,
    CheckCircle,
    User,
    MessageSquare,
    Linkedin,
    Github,
    Twitter,
    ArrowRight
} from "lucide-react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        projectType: ""
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const projectTypes = [
        "Management System",
        "Website Development",
        "Mobile Application",
        "UI/UX Design",
        "Custom Software",
        "Other"
    ]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: "", email: "", message: "", projectType: "" })
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const contactInfo = [
        {
            icon: <Mail size={20} />,
            title: "Email",
            value: "hello@shidda.agency",
            action: "mailto:hello@shidda.agency"
        },
        {
            icon: <Phone size={20} />,
            title: "Phone",
            value: "+1 (555) 123-4567",
            action: "tel:+15551234567"
        },
        {
            icon: <MapPin size={20} />,
            title: "Location",
            value: "Digital Agency, Worldwide",
            action: null
        },
        {
            icon: <Clock size={20} />,
            title: "Response Time",
            value: "Within 24 hours",
            action: null
        }
    ]

    const socialLinks = [
        {
            icon: <Linkedin size={18} />,
            label: "LinkedIn",
            href: "https://linkedin.com/company/shidda-agency"
        },
        {
            icon: <Github size={18} />,
            label: "GitHub",
            href: "https://github.com/shidda-dev"
        },
        {
            icon: <Twitter size={18} />,
            label: "Twitter",
            href: "https://twitter.com/shidda_dev"
        }
    ]

    return (
        <div className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[1px] w-8 bg-white/20"></div>
                        <span className="text-sm uppercase tracking-widest text-white/40">Get In Touch</span>
                        <div className="h-[1px] w-8 bg-white/20"></div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
                        Let&apos;s Build
                        <span className="block mt-2 text-white/80">Something Amazing</span>
                    </h1>

                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s discuss how we can bring your vision to life with precision and expertise.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="lg:sticky lg:top-8 h-fit"
                    >
                        <div className="p-6 sm:p-8 border border-white/10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                                    <h3 className="text-2xl font-light mb-3">Message Sent!</h3>
                                    <p className="text-white/60 mb-8">
                                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:border-white/40 transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-light mb-2">Send a Message</h2>
                                    <p className="text-white/60 mb-8">
                                        Fill out the form below and we&apos;ll respond as soon as possible.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Field */}
                                        <div>
                                            <label className="block text-sm text-white/60 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <User className="w-4 h-4" />
                                                    Full Name
                                                </div>
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label className="block text-sm text-white/60 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="w-4 h-4" />
                                                    Email Address
                                                </div>
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {/* Project Type */}
                                        <div>
                                            <label className="block text-sm text-white/60 mb-2">
                                                Project Type
                                            </label>
                                            <select
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors appearance-none"
                                            >
                                                <option value="">Select a project type</option>
                                                {projectTypes.map((type, index) => (
                                                    <option key={index} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Message Field */}
                                        <div>
                                            <label className="block text-sm text-white/60 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <MessageSquare className="w-4 h-4" />
                                                    Your Message
                                                </div>
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none"
                                                placeholder="Tell us about your project..."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full px-6 py-4 rounded-full font-medium flex items-center justify-center gap-3 transition-all ${isSubmitting
                                                ? 'bg-blue-600/50 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]'
                                                }`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                    <ArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h3 className="text-sm uppercase tracking-widest text-white/40 mb-4 text-center lg:text-left">
                                Connect With Us
                            </h3>
                            <div className="flex justify-center lg:justify-start gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        whileHover={{ y: -2 }}
                                        className="p-3 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/5 transition-all"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Info & FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Contact Info Cards */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-white/40 mb-6">
                                Contact Information
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className={`p-5 border border-white/10 rounded-xl hover:bg-white/5 transition-all ${info.action ? 'cursor-pointer' : ''}`}
                                        onClick={() => info.action && window.open(info.action, '_blank')}
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-white/10">
                                                <div className="text-white/60">{info.icon}</div>
                                            </div>
                                            <h4 className="font-medium">{info.title}</h4>
                                        </div>
                                        <p className="text-white/60 text-sm">{info.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ/Process */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-white/40 mb-6">
                                Our Process
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { step: "01", title: "Initial Consultation", desc: "We discuss your project requirements and goals" },
                                    { step: "02", title: "Proposal & Planning", desc: "Detailed project proposal with timeline and budget" },
                                    { step: "03", title: "Development Phase", desc: "Regular updates and milestone reviews" },
                                    { step: "04", title: "Launch & Support", desc: "Deployment and ongoing maintenance" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="flex items-start gap-4 p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                                            <span className="text-sm font-medium">{item.step}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">{item.title}</h4>
                                            <p className="text-sm text-white/60">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Statistics */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-white/40 mb-6">
                                Why Choose Us
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { value: "50+", label: "Projects" },
                                    { value: "100%", label: "Satisfaction" },
                                    { value: "24/7", label: "Support" },
                                    { value: "2+", label: "Years" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="text-center p-4 border border-white/10 rounded-lg"
                                    >
                                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-xs text-white/40">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="p-6 border border-white/10 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 text-center"
                        >
                            <h3 className="text-xl font-light mb-3">Prefer a Call?</h3>
                            <p className="text-white/60 mb-4">
                                Schedule a 30-minute consultation call with our team.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:border-white/40 transition-colors flex items-center gap-2 mx-auto"
                            >
                                <Clock className="w-4 h-4" />
                                Schedule a Call
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}