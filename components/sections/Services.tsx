'use client'
import { motion } from "framer-motion"
import { Cloud, Cpu, Database, LineChart, Palette, Terminal } from "lucide-react"

function Services() {
    const services = [
        { icon: <Terminal size={20} />, title: "Custom Development", desc: "Tailored web applications" },
        { icon: <Palette size={20} />, title: "UI/UX Design", desc: "Minimal, functional interfaces" },
        { icon: <Cpu size={20} />, title: "System Architecture", desc: "Scalable solutions" },
        { icon: <Database size={20} />, title: "Backend Systems", desc: "Robust data management" },
        { icon: <Cloud size={20} />, title: "Cloud Solutions", desc: "Optimized deployment" },
        { icon: <LineChart size={20} />, title: "Analytics", desc: "Data-driven insights" },
    ]
    return (
        <section className="mb-32 md:px-12" id="services" >
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-white/20 flex-1"></div>
                <h2 className="text-sm uppercase tracking-widest text-white/40">Services</h2>
                <div className="h-px bg-white/20 flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                        className="p-6 border border-white/5 rounded-lg hover:border-white/10 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="text-white/60">{service.icon}</div>
                            <h3 className="font-medium">{service.title}</h3>
                        </div>
                        <p className="text-white/40 text-sm">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Services