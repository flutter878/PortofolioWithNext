import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { projectsData } from "@/lib/projects";
import { getTechIcon } from "@/lib/tech-icons";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Portofolio`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-[calc(100vh-100px)] py-16 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-colors mb-8 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero */}
        <div
          className={`h-64 sm:h-80 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-10 relative overflow-hidden`}
        >
          <span className="text-8xl sm:text-9xl font-bold text-white/10 select-none">
            {project.title.charAt(0)}
          </span>
        </div>

        {/* Title & Meta */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs text-emerald-500 font-medium uppercase tracking-wider border border-emerald-500/30 rounded-full px-3 py-1">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
            <span className="text-xs text-muted-foreground">|</span>
            <span className="text-xs text-muted-foreground">{project.role}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold">{project.title}</h1>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-600 transition-colors"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-full hover:border-emerald-500 hover:text-emerald-500 transition-colors"
            >
              <FiGithub /> Source Code
            </a>
          )}
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.fullDescription}
          </p>
        </section>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => {
              const Icon = getTechIcon(tech);
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full text-sm font-medium"
                >
                  {Icon && <Icon className="text-lg shrink-0" />}
                  {tech}
                </span>
              );
            })}
          </div>
        </section>

        {/* Navigation */}
        <div className="border-t border-border pt-8 mt-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-emerald-500 hover:gap-3 transition-all font-medium"
          >
            <FiArrowLeft />
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
