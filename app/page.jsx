"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  { icon: FaGithub, href: "https://github.com/musliadi", label: "GitHub" },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/musliadi",
    label: "LinkedIn",
  },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Technologies" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-100px)] flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center xl:text-left max-w-2xl">
            <motion.p
              variants={itemVariants}
              className="text-emerald-500 font-medium tracking-wide uppercase text-sm sm:text-base mb-3"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              Musliadi As&#39;ad
              <br />
              <span className="text-emerald-500">Fullstack Web Developer</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto xl:mx-0 mb-8"
            >
              Fullstack Web Developer with hands-on experience in building and
              maintaining modern web applications from frontend to backend using
              Next.js, JavaScript, Laravel, and databases like MySQL and
              Supabase.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center xl:justify-start"
            >
              <Link href="/contact">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-6 text-base rounded-full group">
                  Hire Me
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 px-8 py-6 text-base rounded-full"
                >
                  View My Work
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-10 justify-center xl:justify-start"
            >
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-emerald-500 hover:text-emerald-500 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon className="text-lg" />
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* Avatar / Illustration */}
          <motion.div
            variants={itemVariants}
            className="hidden xl:flex items-center justify-center flex-shrink-0"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-emerald-500/20" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center">
                <span className="text-8xl font-bold text-emerald-500/80">
                  M
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="grid grid-cols-3 gap-6 mt-16 xl:mt-24 border-t border-gray-800 pt-12 max-w-2xl mx-auto xl:mx-0"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center xl:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-emerald-500 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
}
