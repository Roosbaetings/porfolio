"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/projects";

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.24.99.2l13.12-11.7L13.57 8.5 3.18 23.76zm17.3-11.02L17.6 11.1 13.93 14l3.72 3.31 2.83-1.59c.8-.45.8-1.53 0-1.98zM2.1.27C1.8.56 1.63.99 1.63 1.55v20.9c0 .56.17.99.47 1.28l.07.07 11.7-11.7v-.27L2.17.2 2.1.27zm11.47 11.38L2.45.57l-.14-.14 13.4 7.73-2.14 3.49z" />
  </svg>
);

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: "200px",
        height: "410px",
        background: "#111111",
        borderRadius: "44px",
        border: "2px solid #333333",
        padding: "10px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Side buttons */}
      <div className="absolute" style={{ left: "-4px", top: "80px", width: "3px", height: "32px", background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
      <div className="absolute" style={{ left: "-4px", top: "124px", width: "3px", height: "56px", background: "#2a2a2a", borderRadius: "2px 0 0 2px" }} />
      <div className="absolute" style={{ right: "-4px", top: "100px", width: "3px", height: "64px", background: "#2a2a2a", borderRadius: "0 2px 2px 0" }} />
      {/* Screen */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ borderRadius: "36px" }}
      >
        {/* Notch */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 z-10"
          style={{ width: "72px", height: "20px", background: "#111111", borderRadius: "12px" }}
        />
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="200px"
        />
      </div>
    </div>
  );
}

function WebPreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        borderRadius: "16px",
        border: "1px solid #2A2A2A",
        boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
        aspectRatio: "16/10",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  const imageCol = project.image && (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-center"
      style={{ flex: "0 0 auto", width: "100%", maxWidth: project.mobileScreenshot ? "280px" : "460px" }}
    >
      {project.mobileScreenshot ? (
        <PhoneMockup src={project.image} alt={`Screenshot van ${project.title}`} />
      ) : (
        <WebPreview src={project.image} alt={`Screenshot van ${project.title}`} />
      )}
    </motion.div>
  );

  const contentCol = (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 32 : -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center flex-1 min-w-0"
    >
      <p className="text-xs font-mono mb-4" style={{ color: "#888888" }}>
        {String(project.id).padStart(2, "0")}
      </p>

      <h3
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4"
        style={{ color: "#EDEDED" }}
      >
        {project.title}
      </h3>

      <p
        className="text-sm sm:text-base leading-relaxed mb-8"
        style={{ color: "#888888", maxWidth: "480px" }}
      >
        {project.description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 rounded-lg text-xs font-medium font-mono"
            style={{
              background: "rgba(74,204,42,0.10)",
              color: "#4ACC2A",
              border: "1px solid rgba(74,204,42,0.15)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 flex-wrap">
        {project.appStore && (
          <a
            href={project.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{ background: "#F77575", color: "#0F0F0F" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#f96a6a";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#F77575";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <AppStoreIcon />
            App Store
          </a>
        )}
        {project.googlePlay && (
          <a
            href={project.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{ background: "#F77575", color: "#0F0F0F" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#f96a6a";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#F77575";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <GooglePlayIcon />
            Google Play
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={
              project.mobileScreenshot
                ? { background: "#1A1A1A", border: "1px solid #2A2A2A", color: "#888888" }
                : { background: "#F77575", color: "#0F0F0F" }
            }
            onMouseEnter={(e) => {
              if (project.mobileScreenshot) {
                (e.currentTarget as HTMLElement).style.borderColor = "#EDEDED";
                (e.currentTarget as HTMLElement).style.color = "#EDEDED";
              } else {
                (e.currentTarget as HTMLElement).style.background = "#f96a6a";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }
            }}
            onMouseLeave={(e) => {
              if (project.mobileScreenshot) {
                (e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A";
                (e.currentTarget as HTMLElement).style.color = "#888888";
              } else {
                (e.currentTarget as HTMLElement).style.background = "#F77575";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }
            }}
          >
            <ArrowUpRight />
            Website
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", color: "#888888" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#EDEDED";
              (e.currentTarget as HTMLElement).style.color = "#EDEDED";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A";
              (e.currentTarget as HTMLElement).style.color = "#888888";
            }}
          >
            <GithubIcon />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <div
      className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 py-16"
      style={{ borderTop: "1px solid #2A2A2A" }}
    >
      {isEven ? (
        <>
          {imageCol}
          {contentCol}
        </>
      ) : (
        <>
          {contentCol}
          {imageCol}
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <p
            className="text-xs font-mono tracking-widest uppercase mb-3"
            style={{ color: "#4ACC2A" }}
          >
            Geselecteerd werk
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
            style={{ color: "#EDEDED" }}
          >
            Projecten
          </h2>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
