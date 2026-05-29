"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "Dart",
  "Framer Motion",
  "REST APIs",
  "Bluetooth BLE",
  "Figma",
  "Git",
  "CI/CD",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-2xl p-10 sm:p-14"
          style={{
            background: "#1A1A1A",
            border: "1px solid #2A2A2A",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-xs font-mono tracking-widest uppercase mb-3"
                style={{ color: "#4ACC2A" }}
              >
                Over mij
              </p>
              <h2
                className="text-3xl font-semibold tracking-tight mb-6"
                style={{ color: "#EDEDED" }}
              >
                Bouwen voor het web, met aandacht voor detail.
              </h2>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                  Ik ben een frontend developer met een passie voor het omzetten van
                  complexe problemen naar eenvoudige, elegante interfaces. Ik hecht veel
                  waarde aan de details — van pixel-perfecte layouts tot vloeiende
                  interacties.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                  Mijn focus ligt op het bouwen van producten die snel, toegankelijk
                  en prettig in gebruik zijn. Ik werk het best op het snijvlak van
                  design en engineering.
                </p>
              </div>
            </motion.div>

            {/* Right — Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-xs font-mono tracking-widest uppercase mb-6"
                style={{ color: "#888888" }}
              >
                Technologieën
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium font-mono"
                    style={{
                      background: "rgba(74,204,42,0.10)",
                      color: "#4ACC2A",
                      border: "1px solid rgba(74,204,42,0.15)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
