"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const socials = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: <GithubIcon /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: <LinkedInIcon /> },
  { label: "Email", href: "mailto:you@example.com", icon: <MailIcon /> },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-mono tracking-widest uppercase mb-3"
            style={{ color: "#F77575" }}
          >
            Neem contact op
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4"
            style={{ color: "#EDEDED" }}
          >
            Laten we connecten
          </h2>
          <p
            className="text-base max-w-md mx-auto leading-relaxed"
            style={{ color: "#888888" }}
          >
            Ik ben altijd benieuwd naar interessante mensen en projecten. Neem gerust contact op.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                color: "#888888",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#F77575";
                (e.currentTarget as HTMLElement).style.color = "#F77575";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A";
                (e.currentTarget as HTMLElement).style.color = "#888888";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
              aria-label={social.label}
            >
              {social.icon}
              <span>{social.label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div
        className="max-w-5xl mx-auto mt-24 pt-8 flex items-center justify-between"
        style={{ borderTop: "1px solid #2A2A2A" }}
      >
        <Logo />
        <p className="text-xs" style={{ color: "#888888" }}>
          © {new Date().getFullYear()} Roos Baetings
        </p>
      </div>
    </section>
  );
}
