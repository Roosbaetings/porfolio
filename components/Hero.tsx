"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
    >
      {/* Top colour bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 pointer-events-none"
        style={{ height: "320px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247,117,117,0.18) 0%, transparent 40%, transparent 60%, rgba(74,204,42,0.14) 100%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(247,117,117,0.06) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full pt-24">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-8"
        >
          <div className="relative shrink-0">
            <div
              className="w-14 h-14 rounded-full overflow-hidden"
              style={{ border: "2px solid #2A2A2A" }}
            >
              <Image
                src="/roos.jpg"
                alt="Roos Baetings"
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
            <span
              className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full"
              style={{
                background: "#4ACC2A",
                border: "2px solid #0F0F0F",
                boxShadow: "0 0 6px rgba(74,204,42,0.6)",
              }}
            />
          </div>
          <span
            className="text-sm font-mono tracking-widest uppercase"
            style={{ color: "#4ACC2A" }}
          >
            Werkzaam als Frontend Developer
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight mb-6"
          style={{ color: "#EDEDED" }}
        >
          Roos Baetings
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl font-light mb-8"
          style={{ color: "#888888" }}
        >
          Frontend Developer
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg leading-relaxed max-w-xl mb-12"
          style={{ color: "#888888" }}
        >
          Ik bouw snelle, toegankelijke en mooie webapplicaties. Met focus op
          schone architectuur, pixel-perfecte interfaces en een geweldige
          gebruikerservaring.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              background: "#F77575",
              color: "#0F0F0F",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#f96a6a";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#F77575";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Bekijk mijn werk
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              border: "1px solid #2A2A2A",
              color: "#EDEDED",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#F77575";
              (e.currentTarget as HTMLElement).style.color = "#F77575";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A";
              (e.currentTarget as HTMLElement).style.color = "#EDEDED";
            }}
          >
            Neem contact op
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#888888" }}
      >
        <span className="text-xs tracking-widest uppercase font-mono">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, #888888, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
