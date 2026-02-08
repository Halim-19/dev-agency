import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

function Hero() {
    return (
        <section
            id="hero"
            className="min-h-[90vh]  flex flex-col justify-center items-center text-center mb-32"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full"
            >
                {/* Subtle animated line */}
                <motion.div
                    className="h-px]bg-linear-to-r from-transparent via-white/20 to-transparent mb-12 mx-auto max-w-md"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Agency name with subtle effect */}
                <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6">
                    frameless
                    <span className="block mt-2 text-white/70">Agency</span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    className="text-lg text-white/60 mb-12 max-w-md mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Turning ideas into digital reality.
                    <br />
                    {/* <span className="text-white/40 text-sm">— Created by @frameless_dev</span> */}
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mx-auto group px-8 py-3 border border-white/20 rounded-full flex md:hidden  flex-row justify-center items-center gap-6   hover:border-white/40 transition-all duration-300"
                >
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/frameless_agency/">
                        <FaInstagram className="w-10 h-10 p-2.5 cursor-pointer rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300" />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61561030740617">
                        <FaFacebook className="w-10 h-10 p-2.5 cursor-pointer rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300" />
                    </a>
                    <a href="https://wa.me/+213551085452">
                        <FaWhatsapp className="w-10 h-10 p-2.5 cursor-pointer rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300" />
                    </a>
                </motion.button>

                {/* Scroll indicator */}
                <motion.div
                    className="mt-24"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-5 h-5 text-white/30 mx-auto" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero