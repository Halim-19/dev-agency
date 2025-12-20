'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import {
    Globe,
    Palette,
    Code,
    Smartphone,
    Zap,
    Shield,
    Check,
    ArrowRight,
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize2,
    Search,
    ShoppingCart,
    Users,
    BarChart,
    Mail,
    Calendar,
    Settings,
    Database,
    Cloud,
    Lock,
    Monitor
} from "lucide-react"
import DesktopMockup from "@/components/mockup/DesktopMockup";
import Link from "next/link";

function WebsiteProject() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Video files - replace with your actual video paths
    const videos = [
        {
            src: '/video/ecommerce1.webm',
            poster: '/videos/website-poster-1.jpg',
            title: "E-commerce Platform",
            description: "Full online shopping experience with cart and checkout"
        },
        // {
        //     src: '/videos/website-demo-2.mp4',
        //     poster: '/videos/website-poster-2.jpg',
        //     title: "Dashboard Interface",
        //     description: "Modern admin dashboard with real-time analytics"
        // },
        // {
        //     src: '/videos/website-demo-3.mp4',
        //     poster: '/videos/website-poster-3.jpg',
        //     title: "Mobile Web App",
        //     description: "Responsive mobile-first web application"
        // }
    ];

    const currentVideo = videos[currentVideoIndex];

    const websiteTypes = [
        {
            icon: <Globe size={20} />,
            title: "Business Websites",
            description: "Professional corporate sites with CMS",
            features: ["Responsive Design", "SEO Optimized", "Content Management", "Contact Forms"]
        },
        {
            icon: <ShoppingCart size={20} />,
            title: "E-commerce Stores",
            description: "Full-featured online stores with payment integration",
            features: ["Product Management", "Shopping Cart", "Secure Payments", "Order Tracking"]
        },
        {
            icon: <BarChart size={20} />,
            title: "Web Applications",
            description: "Custom web apps with advanced functionality",
            features: ["User Authentication", "Real-time Data", "Admin Dashboard", "API Integration"]
        },
        {
            icon: <Mail size={20} />,
            title: "Landing Pages",
            description: "High-converting pages for marketing campaigns",
            features: ["Lead Generation", "A/B Testing", "Analytics", "Mobile Optimized"]
        }
    ];

    const developmentProcess = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "Understand requirements and create project roadmap"
        },
        {
            step: "02",
            title: "UI/UX Design",
            description: "Create wireframes and visual designs"
        },
        {
            step: "03",
            title: "Development",
            description: "Code implementation with modern frameworks"
        },
        {
            step: "04",
            title: "Testing & Launch",
            description: "Quality assurance and deployment"
        }
    ];

    const technologies = [
        { name: "Next.js", icon: "⚡", desc: "React framework for production" },
        { name: "TypeScript", icon: "📘", desc: "Type-safe JavaScript" },
        { name: "Tailwind CSS", icon: "🎨", desc: "Utility-first CSS framework" },
        { name: "Framer Motion", icon: "✨", desc: "Smooth animations" },
        { name: "Node.js", icon: "🟢", desc: "Backend runtime" },
        { name: "MongoDB", icon: "🍃", desc: "Database solution" }
    ];

    const benefits = [
        "Increase online visibility and credibility",
        "Generate more leads and conversions",
        "Provide 24/7 customer access",
        "Showcase products and services effectively",
        "Improve customer engagement"
    ];

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.play().catch(console.error);
        } else {
            video.pause();
        }
    }, [isPlaying, currentVideoIndex]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = isMuted;
    }, [isMuted]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const nextVideo = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        setIsPlaying(true);
    };

    const prevVideo = () => {
        setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
        setIsPlaying(true);
    };

    const handleVideoEnded = () => {
        nextVideo();
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
                        <span className="text-sm uppercase tracking-widest text-white/40">Web Development</span>
                        <div className="h-px w-8 bg-white/20"></div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
                        Website
                        <span className="block mt-2 text-white/80">Development</span>
                    </h1>

                    <p className="text-lg text-white/60 max-w-3xl mx-auto mb-8">
                        Crafting exceptional digital experiences with modern web technologies.
                        From simple landing pages to complex web applications.
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center">
                        <div className="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-400 rounded-full flex items-center gap-2">
                            <Check className="w-3.5 h-3.5" />
                            Responsive Design
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-purple-500/20 text-purple-400 rounded-full">
                            SEO Optimized
                        </div>
                        <div className="px-3 py-1.5 text-sm bg-emerald-500/20 text-emerald-400 rounded-full">
                            Fast & Secure
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
                        {/* Overview */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-white/20 flex-1"></div>
                                <h2 className="text-sm uppercase tracking-widest text-white/40">Overview</h2>
                                <div className="h-px bg-white/20 flex-1"></div>
                            </div>

                            <p className="text-white/60 leading-relaxed mb-8">
                                We build modern, performant websites that not only look great but also drive results.
                                Using cutting-edge technologies, we create responsive, accessible, and scalable web solutions
                                tailored to your business needs.
                            </p>

                            <blockquote className="p-6 border-l-4 border-blue-500 bg-gradient-to-r from-white/5 to-transparent rounded-r-lg mb-8">
                                <p className="text-white/80 italic">
                                    A well-designed website is not just about aesthetics—it s about creating
                                    meaningful experiences that convert visitors into customers.
                                </p>
                            </blockquote>
                        </div>

                        {/* Website Types */}
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-white/20 flex-1"></div>
                                <h2 className="text-sm uppercase tracking-widest text-white/40">What We Build</h2>
                                <div className="h-px bg-white/20 flex-1"></div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {websiteTypes.map((type, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-blue-500/20">
                                                <div className="text-blue-400">
                                                    {type.icon}
                                                </div>
                                            </div>
                                            <h3 className="font-medium text-white/90">{type.title}</h3>
                                        </div>
                                        <p className="text-sm text-white/60 mb-3">{type.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {type.features.map((feature, idx) => (
                                                <span key={idx} className="px-2 py-1 text-xs bg-white/10 rounded-full text-white/60">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-8">
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
                                        <Check className="w-4 h-4 text-blue-400" />
                                        <span className="text-white/80">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Video Mockup & Tech */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="sticky top-8">
                            {/* Video Carousel */}
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-px bg-white/20 w-8"></div>
                                        <h2 className="text-sm uppercase tracking-widest text-white/40">Live Demo</h2>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={prevVideo}
                                            className="p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                                        >
                                            <ArrowRight className="w-4 h-4 rotate-180" />
                                        </button>
                                        <button
                                            onClick={nextVideo}
                                            className="p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Video Indicator Dots */}
                                <div className="flex justify-center gap-2 mb-4">
                                    {videos.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setCurrentVideoIndex(index);
                                                setIsPlaying(true);
                                            }}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentVideoIndex ? 'bg-white' : 'bg-white/30'}`}
                                        />
                                    ))}
                                </div>

                                {/* Video Title */}
                                <div className="text-center mb-4">
                                    <h3 className="font-medium text-white/90">{currentVideo.title}</h3>
                                    <p className="text-sm text-white/60">{currentVideo.description}</p>
                                </div>

                                {/* Video Mockup Container */}
                                <DesktopMockup>
                                    <div className="relative w-full h-full bg-black overflow-hidden group">
                                        <AnimatePresence mode="wait">
                                            <motion.video
                                                key={currentVideoIndex}
                                                ref={videoRef}
                                                src={currentVideo.src}
                                                poster={currentVideo.poster}
                                                className="w-full h-full object-contain"
                                                muted={isMuted}
                                                loop={true}
                                                onEnded={handleVideoEnded}
                                                playsInline
                                                preload="metadata"

                                            />
                                        </AnimatePresence>

                                        {/* Video Controls Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <button
                                                            onClick={togglePlay}
                                                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                                        >
                                                            {isPlaying ? (
                                                                <Pause className="w-4 h-4" />
                                                            ) : (
                                                                <Play className="w-4 h-4" />
                                                            )}
                                                        </button>
                                                        <button
                                                            onClick={toggleMute}
                                                            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                                        >
                                                            {isMuted ? (
                                                                <VolumeX className="w-4 h-4" />
                                                            ) : (
                                                                <Volume2 className="w-4 h-4" />
                                                            )}
                                                        </button>
                                                        <div className="text-xs text-white/60">
                                                            {currentVideoIndex + 1} / {videos.length}
                                                        </div>
                                                    </div>
                                                    <div className="text-xs text-white/60">
                                                        Click to interact
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Play/Pause Overlay */}
                                        {!isPlaying && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <button
                                                    onClick={togglePlay}
                                                    className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                                                >
                                                    <Play className="w-8 h-8" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </DesktopMockup>

                                {/* Video Navigation Info */}
                                <div className="text-center mt-4">
                                    <div className="inline-flex items-center gap-2 text-xs text-white/40">
                                        <Play className="w-3 h-3" />
                                        <span>Click play to watch demo • Auto-advances to next video</span>
                                    </div>
                                </div>
                            </div>

                            {/* Development Process */}
                            <div className="mb-8">
                                <h3 className="text-sm uppercase tracking-widest text-white/40 mb-6 text-center">
                                    Our Process
                                </h3>
                                <div className="space-y-4">
                                    {developmentProcess.map((step, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 border border-white/10 rounded-lg">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                                                <span className="text-sm font-medium">{step.step}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-1">{step.title}</h4>
                                                <p className="text-sm text-white/60">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h3 className="text-sm uppercase tracking-widest text-white/40 mb-6 text-center">
                                    Technologies We Use
                                </h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {technologies.map((tech, index) => (
                                        <div key={index} className="text-center p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                                            <div className="text-xl mb-2">{tech.icon}</div>
                                            <div className="text-sm font-medium mb-1">{tech.name}</div>
                                            <div className="text-xs text-white/40">{tech.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                                <Link href='/contact' className="flex-1">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-sm font-medium hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2"
                                    >
                                        <Code className="w-4 h-4" />
                                        Start Project
                                    </motion.button>
                                </Link>
                                <Link href='/contact' className="flex-1">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:border-white/40 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <span>Get Quote</span>
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
                        <h3 className="text-2xl font-light mb-4">Ready to Launch Your Website?</h3>
                        <p className="text-white/60 mb-8">
                            Let s build a website that not only looks amazing but also drives real business results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href='/contact' className="flex-1 max-w-xs mx-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Globe className="w-4 h-4" />
                                    Free Consultation
                                </motion.button>
                            </Link>
                            <Link href='/projects' className="flex-1 max-w-xs mx-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:border-white/40 transition-colors"
                                >
                                    View Portfolio
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default WebsiteProject;