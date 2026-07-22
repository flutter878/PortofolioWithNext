"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
    description:
      "Building modern, scalable web applications using cutting-edge technologies like Next.js, React, and more.",
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing interfaces that provide seamless user experiences.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description:
      "Creating fluid layouts that work perfectly across all devices and screen sizes.",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed, accessibility, and search engine visibility.",
  },
  {
    icon: FaCogs,
    title: "API Integration",
    description:
      "Integrating third-party APIs and building custom backend solutions for your applications.",
  },
  {
    icon: FaHeadset,
    title: "Maintenance & Support",
    description:
      "Providing ongoing maintenance, updates, and technical support for your web projects.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-100px)] py-16 xl:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            variants={itemVariants}
            className="text-emerald-500 font-medium tracking-wide uppercase text-sm sm:text-base mb-3"
          >
            What I Offer
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            My <span className="text-emerald-500">Services</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            I provide a wide range of web development services to help bring
            your ideas to life with modern technology and best practices.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together?
          </p>
          <Link href="/contact">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-6 text-base rounded-full group">
              Let&apos;s Talk
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.main>
  );
}
