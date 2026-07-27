"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaDownload,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const experienceData = [
  {
    title: "Freelance Software Engineer",
    company: "Freelance, Makassar",
    period: "Feb 2024 - Now",
    description:
      "Designed and developed web-based applications using Next.js and Laravel. Built frontend interfaces and backend systems including API development, database integration, and CRUD functionality for admin dashboards, data management systems, and web-based services.",
  },
  {
    title: "Graphic Designer",
    company: "Zahra Digiprint, Bantaeng",
    period: "Jan 2022 - Aug 2023",
    description:
      "Designed printing and promotional assets including banners, posters, flyers, name cards, and marketing materials. Ensured print-ready designs aligned with client needs and brand requests. Developed strong skills in layout design, typography, color composition, and time management.",
  },
];

const educationData = [
  {
    title: "Bachelor of Engineering",
    institution: "Dipa Makassar University",
    period: "2023 - Present",
    description:
      "Currently in Semester 6, progressing to Semester 7. GPA 3.54 / 4.00.",
  },
];

const organizationData = [
  {
    title: "Staff, Asset and Human Resource Development Department",
    institution: "Dipanegara Computer Club",
    period: "Jun 2025 - Now",
    description:
      "Organized weekly member development programs including learning sessions and knowledge-sharing activities. Maintained organizational asset inventory and supported coordination of internal schedules and project progress.",
  },
];

const skillsData = [
  { name: "PHP", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 65 },
  { name: "Next.js", level: 85 },
  { name: "React", level: 82 },
  { name: "Laravel", level: 80 },
  { name: "Node.js / Express.js", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Bootstrap", level: 85 },
  { name: "MySQL / PostgreSQL", level: 80 },
  { name: "Supabase", level: 72 },
  { name: "Git / GitHub", level: 85 },
  { name: "Figma / Canva", level: 88 },
  { name: "Adobe Illustrator / CorelDRAW", level: 82 },
];

const certificationsData = [
  {
    title: "Junior Web Developer Certification",
    issuer: "Digitalent Scholarship",
  },
  {
    title: "Graphic Design: Logo for Brand and Visual Identity",
    issuer: "Skill Academy",
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

export default function Resume() {
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
            My Background
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            My <span className="text-emerald-500">Resume</span>
          </motion.h1>
        </div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="w-full justify-center mb-10 bg-surface border border-border p-1 rounded-xl flex-wrap">
              <TabsTrigger
                value="experience"
                className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-emerald-500 data-[state=active]:text-black rounded-lg text-sm font-medium"
              >
                <FaBriefcase />
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-emerald-500 data-[state=active]:text-black rounded-lg text-sm font-medium"
              >
                <FaGraduationCap />
                Education
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-emerald-500 data-[state=active]:text-black rounded-lg text-sm font-medium"
              >
                <FaCode />
                Skills
              </TabsTrigger>
            </TabsList>

            {/* Experience Tab */}
            <TabsContent value="experience">
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-500 mb-6 flex items-center gap-2">
                      <FaBriefcase /> Work Experience
                    </h3>
                    {experienceData.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 mb-8 last:mb-0 before:content-[''] before:absolute before:left-3 before:top-2 before:h-full before:w-0.5 before:bg-emerald-500/30"
                      >
                        <div className="absolute left-1.5 top-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
                        <div className="bg-surface border border-border rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                          <span className="text-emerald-500 text-sm font-medium">
                            {item.period}
                          </span>
                          <h4 className="text-xl font-semibold mt-1">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-1">
                            {item.company}
                          </p>
                          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-500 mb-6 flex items-center gap-2">
                      <FaGraduationCap /> Organization
                    </h3>
                    {organizationData.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-2 before:h-full before:w-0.5 before:bg-emerald-500/30"
                      >
                        <div className="absolute left-1.5 top-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
                        <div className="bg-surface border border-border rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                          <span className="text-emerald-500 text-sm font-medium">
                            {item.period}
                          </span>
                          <h4 className="text-xl font-semibold mt-1">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-1">
                            {item.institution}
                          </p>
                          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-500 mb-6 flex items-center gap-2">
                      <FaGraduationCap /> Education
                    </h3>
                    {educationData.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 mb-8 before:content-[''] before:absolute before:left-3 before:top-2 before:h-full before:w-0.5 before:bg-emerald-500/30"
                      >
                        <div className="absolute left-1.5 top-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
                        <div className="bg-surface border border-border rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                          <span className="text-emerald-500 text-sm font-medium">
                            {item.period}
                          </span>
                          <h4 className="text-xl font-semibold mt-1">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-1">
                            {item.institution}
                          </p>
                          <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-500 mb-6 flex items-center gap-2">
                      <FaCode /> Certifications
                    </h3>
                    {certificationsData.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-2 before:h-full before:w-0.5 before:bg-emerald-500/30"
                      >
                        <div className="absolute left-1.5 top-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
                        <div className="bg-surface border border-border rounded-xl p-6 hover:border-emerald-500/50 transition-colors">
                          <h4 className="text-lg font-semibold">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-1">
                            {item.issuer}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <ScrollArea className="h-[500px] pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillsData.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-surface border border-border rounded-xl p-6"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-emerald-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + index * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.main>
  );
}
