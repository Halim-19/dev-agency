import { motion } from "framer-motion";


function TimeLine() {
    const timeline = [
        { year: "2022", event: "frameless Agency Founded" },
        { year: "2023", event: "First Enterprise Client" },
        { year: "2023", event: "Team Expansion" },
        { year: "2024", event: "International Projects" },
    ]
    return (
        <section className="mb-32" id="timeline">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-white/20 flex-1"></div>
                <h2 className="text-sm uppercase tracking-widest text-white/40">Timeline</h2>
                <div className="h-px bg-white/20 flex-1"></div>
            </div>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10"></div>

                <div className="space-y-12">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-16"
                        >
                            {/* Dot */}
                            <div className="absolute left-[22px] top-2 w-3 h-3 rounded-full bg-white/20 border border-white/40"></div>

                            <div>
                                <div className="text-sm text-white/40 mb-2">{item.year}</div>
                                <div className="text-white/80">{item.event}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TimeLine