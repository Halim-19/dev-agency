'use client'

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Hero from "@/components/sections/Hero"
import Project from "@/components/sections/Project"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import TimeLine from "@/components/sections/TimeLine"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"

import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { name: "Home", id: "hero" },
  { name: "Work", id: "projects" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.98])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.995])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white  overflow-y-auto  selection:bg-white selection:text-black">
      {/* Background Layers */}
      <div className="fixed inset-0 bg-linear-to-br from-black via-[#0a0a0a] to-black"></div>
      <div className="fixed inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[50px_50px]"></div>

      {/*  NEW: TOP NAVIGATION BAR */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
          ease: "easeOut"
        }}
        className="fixed top-0 left-0  h-10 w-full z-100 px-4 md:px-8 py-6 flex items-center justify-end  mix-blend-difference bg-black/5 backdrop-blur-sm md:bg-transparent">

        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar max-w-full pb-2 md:pb-0">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`whitespace-nowrap text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all hover:text-white ${activeSection === item.id ? "text-white" : "text-zinc-400"
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Side Dot Navigation (Right)
      <nav className="fixed right-8 bottom-1/2 translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 items-end">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group flex items-center gap-4 transition-all"
          >
            <span className={`text-xs uppercase tracking-widest transition-opacity duration-300 ${activeSection === item.id ? "opacity-100 text-white" : "opacity-0 group-hover:opacity-50 text-zinc-400"
              }`}>
              {item.name}
            </span>
            <div className={`h-1.5 transition-all duration-300 rounded-full ${activeSection === item.id ? "w-8 bg-white" : "w-2 bg-white/20 group-hover:bg-white/50"
              }`} />
          </button>
        ))}
      </nav>
       */}

      {/* Social Links (Left) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
          ease: "easeOut"
        }}
        className="hidden md:flex fixed left-6 bottom-1/2 translate-y-1/2 flex-col gap-4 z-50">
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/frameless_agency/">
          <FaInstagram className="w-10 h-10 p-2.5 cursor-pointer rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61561030740617">
          <FaFacebook className="w-10 h-10 p-2.5 cursor-pointer rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300" />
        </a>
        <a href="https://wa.me/+213551085452">
          <FaWhatsapp className="w-10 h-10 p-2.5 cursor-pointer rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all duration-300" />
        </a>
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity, scale }} className="relative z-10 px-6 py-12 md:px-16 ">
        <section id="hero"><Hero /></section>
        <section id="projects" className="pt-20"><Project /></section>
        <section id="services" className="pt-20"><Services /></section>
        <section id="about" className="pt-20"><About /></section>
        <section id="timeline" className="pt-20"><TimeLine /></section>
        <section id="contact" className="pt-20"><Contact /></section>
        <Footer />
      </motion.div>
    </div>
  )
}