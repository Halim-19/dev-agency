import { motion } from "framer-motion"
import { ArrowRight, LaptopMinimal, PanelTop, TabletSmartphone } from "lucide-react"
import Link from "next/link"

function Project() {
    const projects = [
        {
            title: "Management Systems",
            category: "management",
            description: "Transform chaos into clarity with intelligent business management solutions.",
            link: "/projects/managments",
            icon: <LaptopMinimal />
        },
        {
            title: "Web Development",
            category: "Website",
            description: "Build your digital legacy with websites that perform as brilliantly as they look.",
            link: "/projects/website",
            icon: <PanelTop />
        },
        {
            title: "Mobile Solutions",
            category: "mobile",
            description: "Reach your audience wherever they are with seamless mobile experiences.",
            link: "/projects/mobile",
            icon: <TabletSmartphone />
        },
    ]
    return (
        <section className="mb-32" id="project">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-white/20 flex-1"></div>
                <h2 className="text-sm uppercase tracking-widest text-white/40">Selected Work</h2>
                <div className="h-px bg-white/20 flex-1"></div>
            </div>

            <div className="space-y-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >

                        <Link href={project.link}>
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <div className="flex gap-2 group-hover:text-white/80 transition-colors">
                                        {project.icon}
                                        <h3 className="text-xl font-light mb-2 ">

                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-white/40">
                                        <span>{project.category}</span>
                                        <span className="text-xs">•</span>

                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors" />

                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
                            <div className="h-px bg-white/5 mt-6 group-hover:bg-white/10 transition-colors"></div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Project