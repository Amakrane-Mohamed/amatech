"use client";

import { motion } from "framer-motion";

const f = "var(--font-inter), Inter, Arial, sans-serif";

const STATS = [
  { value: "6+", label: "Services" },
  { value: "100%", label: "In-House" },
  { value: "24h", label: "Response Time" },
];

export function AboutTeaserSection() {
  return (
    <section style={{
      backgroundColor: "#010104",
      padding: "140px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Left ambient glow */}
      <div aria-hidden style={{
        position: "absolute", top: "50%", left: "-100px",
        transform: "translateY(-50%)",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(207,254,37,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px" }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ margin: "0 0 56px", fontFamily: f, fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cffe25" }}
        >
          About AMATECH
        </motion.p>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "100px" }}>

          {/* Left — large heading */}
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.78, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              margin: 0, fontFamily: f,
              fontSize: "clamp(36px, 4vw, 58px)",
              lineHeight: 1.0, fontWeight: 800,
              letterSpacing: "-0.05em", color: "#fff",
            }}
          >
            Built by people who care deeply about what they build
          </motion.h2>

          {/* Right — body + link */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.78, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "18px" }}
          >
            <p style={{ margin: 0, fontFamily: f, fontSize: "17px", lineHeight: "29px", letterSpacing: "-0.01em", color: "rgba(210,210,210,0.52)" }}>
              AMATECH is a digital product studio. We partner with founders, startups, and growing companies to design and build the digital products that move their business forward.
            </p>
            <p style={{ margin: 0, fontFamily: f, fontSize: "17px", lineHeight: "29px", letterSpacing: "-0.01em", color: "rgba(210,210,210,0.52)" }}>
              We obsess over craft, performance, and outcomes — not just deliverables.
            </p>
            <div style={{ marginTop: "8px" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  fontFamily: f, fontSize: "15px", fontWeight: 700,
                  letterSpacing: "-0.02em", color: "#cffe25", textDecoration: "none",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.gap = "14px"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.gap = "10px"; }}
              >
                Meet the team
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row — full width, separated by lines */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                paddingTop: "40px",
                paddingRight: i < STATS.length - 1 ? "48px" : "0",
                paddingLeft: i > 0 ? "48px" : "0",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p style={{ margin: "0 0 10px", fontFamily: f, fontSize: "52px", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1, color: "#fff" }}>
                {s.value}
              </p>
              <p style={{ margin: 0, fontFamily: f, fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)" }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
