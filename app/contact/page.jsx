"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FiSend, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "musliadi123as@gmail.com",
    href: "mailto:musliadi123as@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "(+62) 81347197603",
    href: "tel:+6281347197603",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Makassar, Sulawesi Selatan",
    href: "#",
  },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/musliadi",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/musliadi",
    label: "LinkedIn",
  },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
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
            Get in Touch
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Contact <span className="text-emerald-500">Me</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Have a project in mind or just want to say hi? Fill out the form
            below and I&apos;ll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info Sidebar */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Link
                  key={index}
                  href={info.href}
                  target={info.href === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                    <Icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium mt-0.5">{info.value}</p>
                  </div>
                </Link>
              );
            })}

            {/* Social */}
            <div className="pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
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
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            className="lg:col-span-3 bg-gray-900/50 border border-gray-800 rounded-2xl p-8 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Name</label>
                <Input
                  placeholder="Your name"
                  className="bg-gray-950 border-gray-800 focus:border-emerald-500 text-white placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-950 border-gray-800 focus:border-emerald-500 text-white placeholder:text-gray-600"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Subject</label>
              <Input
                placeholder="What's this about?"
                className="bg-gray-950 border-gray-800 focus:border-emerald-500 text-white placeholder:text-gray-600"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                rows={6}
                className="bg-gray-950 border-gray-800 focus:border-emerald-500 text-white placeholder:text-gray-600 resize-none"
              />
            </div>
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-6 rounded-xl group">
              <FiSend className="mr-2 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </motion.main>
  );
}
