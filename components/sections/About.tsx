import { motion } from 'framer-motion'
import {
    Target,
    Clock,
    Lock,
    Heart
} from 'lucide-react'


function About() {
    const values = [
        { icon: <Target size={20} />, title: "Precision", desc: "Attention to every detail" },
        { icon: <Clock size={20} />, title: "Efficiency", desc: "Timely delivery" },
        { icon: <Lock size={20} />, title: "Security", desc: "Enterprise-grade protection" },
        { icon: <Heart size={20} />, title: "Passion", desc: "Dedication to excellence" },
    ]
    return (
        <section className="mb-32 md:px-12" id='about'>
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-white/20 flex-1"></div>
                <h2 className="text-sm uppercase tracking-widest text-white/40">About</h2>
                <div className="h-px bg-white/20 flex-1"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h3 className="text-2xl font-light mb-6">Digital Craftsmanship</h3>
                    <p className="text-white/60 leading-relaxed mb-6">
                        We specialize in building sophisticated digital products with a focus on performance,
                        security, and user experience. Every project receives our undivided attention.
                    </p>
                    <p className="text-white/60 leading-relaxed">
                        Based on meticulous engineering principles, we deliver solutions that stand the test of time
                        while embracing modern development practices.
                    </p>
                </div>

                <div className="space-y-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4"
                        >
                            <div className="text-white/40 mt-1">{value.icon}</div>
                            <div>
                                <h4 className="font-medium mb-1">{value.title}</h4>
                                <p className="text-white/40 text-sm">{value.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About