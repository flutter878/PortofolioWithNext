"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";

const categories = ["All", "Web App", "API", "UI/UX"];

const projectsData = [
  {
    title: "Admin Dashboard",
    category: "Web App",
    description:
      "Admin dashboard system with data management features, user authentication, and CRUD operations built with Next.js and Supabase.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "JavaScript"],
    gradient: "from-emerald-500 to-teal-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Ticket Booking System",
    category: "Web App",
    description:
      "Web-based ticket booking application with seat selection, payment integration, and booking management features.",
    tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    gradient: "from-blue-500 to-indigo-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Management System",
    category: "Web App",
    description:
      "Comprehensive data management platform for organizing, filtering, and exporting structured data with reporting capabilities.",
    tech: ["Next.js", "PostgreSQL", "Node.js", "Tailwind CSS"],
    gradient: "from-purple-500 to-pink-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "REST API Service",
    category: "API",
    description:
      "Scalable RESTful API with authentication, CRUD endpoints, and database integration built using Laravel and MySQL.",
    tech: ["Laravel", "MySQL", "Postman"],
    gradient: "from-orange-500 to-red-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Brand Identity Design",
    category: "UI/UX",
    description:
      "Logo design and visual identity development for businesses, including typography selection, color theory, and brand consistency.",
    tech: ["Figma", "Adobe Illustrator", "CorelDRAW"],
    gradient: "from-cyan-500 to-blue-600",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Marketing Collateral",
    category: "UI/UX",
    description:
      "Printed and digital promotional materials including banners, posters, flyers, and social media content for various clients.",
    tech: ["Adobe Illustrator", "Canva", "CorelDRAW"],
    gradient: "from-rose-500 to-amber-600",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[calc(100vh-100px)] py-16 xl:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            variants={itemVariants}
            className="text-emerald-500 font-medium tracking-wide uppercase text-sm sm:text-base mb-3"
          >
            My Portfolio
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            My <span className="text-emerald-500">Work</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            A collection of projects I have worked on as a Fullstack Web
            Developer and Graphic Designer.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-emerald-500 text-black"
                  : "bg-gray-900/50 border border-gray-800 text-gray-400 hover:border-emerald-500/50 hover:text-emerald-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-4xl font-bold text-white/20 select-none">
                    {project.title.charAt(0)}
                  </span>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors"
                    >
                      <FiExternalLink />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors"
                    >
                      <FiGithub />
                    </Link>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs text-emerald-500 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.main>
  );
}
