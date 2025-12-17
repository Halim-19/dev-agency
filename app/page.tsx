'use client'

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  ChevronDown,
  Palette,
  Terminal,
  Cpu,
  Database,
  Cloud,
  LineChart,
  Lock,
  Clock,
  Target,
  Heart,
  TabletSmartphone,
  PanelTop,
  LaptopMinimal
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Subtle scroll transformations
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.98])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.995])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true)
  }, [])

  const services = [
    { icon: <Terminal size={20} />, title: "Custom Development", desc: "Tailored web applications" },
    { icon: <Palette size={20} />, title: "UI/UX Design", desc: "Minimal, functional interfaces" },
    { icon: <Cpu size={20} />, title: "System Architecture", desc: "Scalable solutions" },
    { icon: <Database size={20} />, title: "Backend Systems", desc: "Robust data management" },
    { icon: <Cloud size={20} />, title: "Cloud Solutions", desc: "Optimized deployment" },
    { icon: <LineChart size={20} />, title: "Analytics", desc: "Data-driven insights" },
  ]

  const values = [
    { icon: <Target size={20} />, title: "Precision", desc: "Attention to every detail" },
    { icon: <Clock size={20} />, title: "Efficiency", desc: "Timely delivery" },
    { icon: <Lock size={20} />, title: "Security", desc: "Enterprise-grade protection" },
    { icon: <Heart size={20} />, title: "Passion", desc: "Dedication to excellence" },
  ]

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

  const timeline = [
    { year: "2022", event: "Shidda Agency Founded" },
    { year: "2023", event: "First Enterprise Client" },
    { year: "2023", event: "Team Expansion" },
    { year: "2024", event: "International Projects" },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-y-auto">
      {/* Fixed background with subtle gradient */}
      <div className="fixed inset-0 bg-linear-to-br from-black via-[#0a0a0a] to-black"></div>

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 opacity-[0.02] bg-size-[50px_50px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"></div>

      {/* Main content container - centered */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-12"
      >
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            {/* Subtle animated line */}
            <motion.div
              className="h-[1px] bg-linear-to-r from-transparent via-white/20 to-transparent mb-12 mx-auto max-w-md"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Agency name with subtle effect */}
            <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6">
              Shidda
              <span className="block mt-2 text-white/70">Agency</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg text-white/60 mb-12 max-w-md mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Development studio crafting precision digital solutions.
              <br />
              <span className="text-white/40 text-sm">— Created by @shidda_dev</span>
            </motion.p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-3 border border-white/20 rounded-full inline-flex items-center gap-2 hover:border-white/40 transition-all duration-300"
            >
              <span className="text-sm tracking-wide" >Explore Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

        {/* Projects Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] bg-white/20 flex-1"></div>
            <h2 className="text-sm uppercase tracking-widest text-white/40">Selected Work</h2>
            <div className="h-[1px] bg-white/20 flex-1"></div>
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
                  <div className="h-[1px] bg-white/5 mt-6 group-hover:bg-white/10 transition-colors"></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] bg-white/20 flex-1"></div>
            <h2 className="text-sm uppercase tracking-widest text-white/40">Services</h2>
            <div className="h-[1px] bg-white/20 flex-1"></div>
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

        {/* About Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] bg-white/20 flex-1"></div>
            <h2 className="text-sm uppercase tracking-widest text-white/40">About</h2>
            <div className="h-[1px] bg-white/20 flex-1"></div>
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

        {/* Timeline */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] bg-white/20 flex-1"></div>
            <h2 className="text-sm uppercase tracking-widest text-white/40">Timeline</h2>
            <div className="h-[1px] bg-white/20 flex-1"></div>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10"></div>

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

        {/* Contact Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] bg-white/20 flex-1"></div>
            <h2 className="text-sm uppercase tracking-widest text-white/40">Contact</h2>
            <div className="h-[1px] bg-white/20 flex-1"></div>
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
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-white/20 rounded-full text-sm font-medium hover:border-white/40 transition-colors"
              >
                Schedule a Call
              </motion.button>
            </div>

            <div className="text-sm text-white/40 space-y-2">
              <div>hello@shidda.agency</div>
              <div>@shidda_dev</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/40">
              © {new Date().getFullYear()} Shidda Agency. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/60 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white/60 transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}