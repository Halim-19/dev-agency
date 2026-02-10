'use client'
import { motion, easeInOut } from "framer-motion"
import { ArrowUpRight, LaptopMinimal, PanelTop, TabletSmartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Import Next.js Image component
import managmentImg from '@/public/project/managment.png'
import websiteImg from '@/public/project/websites.png'
import mobileImg from '@/public/project/mobile.png'

function Project() {
    const projects = [
        {
            title: "Management Systems",
            category: "Management",
            description: "Transform chaos into clarity with intelligent business management solutions.",
            link: "/projects/managments",
            icon: <LaptopMinimal />,
            image: managmentImg
        },
        {
            title: "Web Development",
            category: "Website",
            description: "Build your digital legacy with websites that perform as brilliantly as they look.",
            link: "/projects/website",
            icon: <PanelTop />,
            image: websiteImg
        },
        {
            title: "Mobile Solutions",
            category: "Mobile",
            description: "Reach your audience wherever they are with seamless mobile experiences.",
            link: "/projects/mobile",
            icon: <TabletSmartphone />,
            image: mobileImg
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } }
    }

    return (
        <section className=" mb-32 scroll-mt-24 px-4 md:px-12" id="projects">
            {/* Header with refined lines */}
            <div className="flex items-center gap-6 mb-16">
                <h2 className="text-[10px] uppercase tracking-[0.5em] text-white/20 whitespace-nowrap">Selected Work</h2>
                <div className="h-[1px] bg-linear-to-r from-white/10 to-transparent flex-1"></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
                {projects.map((project, index) => (
                    <Link href={project.link} key={index} className="group relative block">
                        <motion.div
                            variants={itemVariants}
                            className="relative aspect-4/5 md:aspect-3/4 lg:aspect-4/5 bg-zinc-950 rounded-2xl overflow-hidden border border-white/[0.05] group-hover:border-white/[0.15] transition-colors duration-500"
                        >
                            {/* THE IMAGE: Integrated as the main background visual */}
                            <div className="absolute inset-0 z-0 pt-20 flex items-start justify-center p-12 opacity-60 group-hover:opacity-100 transition-all duration-700">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="object-contain  scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                />
                            </div>

                            {/* Animated Spotlight Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-white/[0.05] z-10" />

                            {/* UI Content Layer */}
                            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-20">
                                <div className="flex justify-between items-start">
                                    <span className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md text-[9px] uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
                                        {project.category}
                                    </span>

                                    <div className="p-2 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-500">
                                        <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-extralight tracking-tight text-white/90 group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="h-px w-8 group-hover:w-full bg-linear-to-r from-white/40 to-transparent transition-all duration-700 ease-in-out"></div>

                                    <p className="text-sm text-white/40 group-hover:text-white/70 line-clamp-3 md:line-clamp-2 leading-relaxed transition-colors duration-500">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Vignette Overlay to ensure text readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 z-10" />
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </section>
    )
}

export default Project