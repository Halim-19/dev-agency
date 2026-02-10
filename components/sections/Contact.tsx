import { motion } from "framer-motion"
import Link from "next/link"

function Contact() {
    return (
        <section className="mb-32 md:px-12" id="contact">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-white/20 flex-1"></div>
                <h2 className="text-sm uppercase tracking-widest text-white/40">Contact</h2>
                <div className="h-px bg-white/20 flex-1"></div>
            </div>

            <div className="text-center">
                <h3 className="text-2xl font-light mb-6">Ready to Begin?</h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto">
                    Let&apos;s discuss your project and explore how we can bring your vision to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                    >
                        <Link className="w-full h-full" href='/contact'>Start a Project</Link>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:border-white/40 transition-colors"
                    >
                        <Link className="w-full h-full" href='/contact'>Schedule a Call</Link>
                    </motion.button>
                </div>

                <div className="text-sm text-white/40 space-y-2">
                    <div>bensalemhalim19@gmail.com</div>
                    <div>@frameless_dev</div>
                </div>
            </div>
        </section>
    )
}

export default Contact