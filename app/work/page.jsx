"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { projectsData, categories } from "@/lib/projects";
import { getTechIcon } from "@/lib/tech-icons";

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
            className="text-muted-foreground text-sm sm:text-base leading-relaxed"
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
                  : "bg-surface border border-border text-muted-foreground hover:border-emerald-500/50 hover:text-emerald-500"
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
                className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <Link href={`/work/${project.slug}`}>
                  {/* Thumbnail */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    <span className="text-4xl font-bold text-white/20 select-none">
                      {project.title.charAt(0)}
                    </span>
                    <div className="absolute inset-0 bg-overlay-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.liveUrl, "_blank");
                        }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors cursor-pointer"
                      >
                        <FiExternalLink />
                      </div>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.githubUrl, "_blank");
                        }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-colors cursor-pointer"
                      >
                        <FiGithub />
                      </div>
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
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => {
                        const Icon = getTechIcon(tech);
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                            title={tech}
                          >
                            {Icon && <Icon className="text-sm shrink-0" />}
                            <span className="hidden sm:inline">{tech}</span>
                          </span>
                        );
                      })}
                      {project.tech.length > 4 && (
                        <span className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm text-emerald-500 font-medium group-hover:gap-2 transition-all">
                      View Details <FiArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.main>
  );
}
