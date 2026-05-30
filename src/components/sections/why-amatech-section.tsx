"use client";

import { motion } from "framer-motion";

const f = "var(--font-inter), Inter, Arial, sans-serif";

const REASONS = [
  {
    n: "01",
    title: "Full in-house team",
    desc: "No freelancers, no outsourcing. Every project is handled by our own designers, developers, and strategists — start to finish.",
  },
  {
    n: "02",
    title: "On-time, every time",
    desc: "We plan meticulously before we write a single line of code. Our clients ship on the date we commit to, no exceptions.",
  },
  {
    n: "03",
    title: "Built to scale",
    desc: "We architect products for where you're going, not just where you are. Clean code, solid infrastructure, ready to grow.",
  },
  {
    n: "04",
    title: "Post-launch support",
    desc: "We don't disappear after go-live. We stay close, monitor performance, and iterate fast when something needs attention.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export function WhyAmaTechSection() {
  return (
    <section style={{
      backgroundColor: "#010104",
      padding: "140px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient glow top-right */}
      <div aria-hidden style={{
        position: "absolute", top: "-160px", right: "-160px",
        width: "620px", height: "620px",
        background: "radial-gradient(circle, rgba(207,254,37,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "88px", gap: "22px" }}
        >
          <p style={{ margin: 0, fontFamily: f, fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cffe25" }}>
            Why AMATECH
          </p>
          <h2 style={{ margin: 0, fontFamily: f, fontSize: "clamp(36px, 4vw, 58px)", lineHeight: 1.0, fontWeight: 800, letterSpacing: "-0.05em", color: "#fff", maxWidth: "640px" }}>
            The agency that actually delivers
          </h2>
          <p style={{ margin: 0, fontFamily: f, fontSize: "17px", lineHeight: "28px", letterSpacing: "-0.01em", color: "rgba(210,210,210,0.45)", maxWidth: "480px" }}>
            Every principle we operate by is a direct response to agencies that over-promise and under-deliver.
          </p>
        </motion.div>

        {/* 2 × 2 card grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ borderColor: "rgba(255,255,255,0.14)", y: -4, transition: { duration: 0.25 } }}
              style={{
                padding: "48px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.07)",
                backgroundColor: "#0c0c10",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle card top-right glow */}
              <div aria-hidden style={{
                position: "absolute", top: 0, right: 0,
                width: "200px", height: "200px",
                background: "radial-gradient(circle at top right, rgba(207,254,37,0.04) 0%, transparent 65%)",
                borderRadius: "0 24px 0 0",
                pointerEvents: "none",
              }} />

              {/* Large outlined number */}
              <div style={{
                fontFamily: f, fontSize: "96px", fontWeight: 800,
                lineHeight: 1, letterSpacing: "-0.06em",
                marginBottom: "36px",
                WebkitTextStroke: "1px rgba(255,255,255,0.08)",
                color: "transparent",
                background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                display: "inline-block",
                userSelect: "none",
              }}>
                {r.n}
              </div>

              {/* Yellow accent line */}
              <div style={{ width: "36px", height: "2px", backgroundColor: "#cffe25", marginBottom: "22px", borderRadius: "1px" }} />

              <h3 style={{ margin: "0 0 12px", fontFamily: f, fontSize: "21px", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>
                {r.title}
              </h3>
              <p style={{ margin: 0, fontFamily: f, fontSize: "15px", lineHeight: "26px", letterSpacing: "-0.01em", color: "rgba(210,210,210,0.46)" }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: "center", marginTop: "72px" }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "16px 38px", borderRadius: "100px",
              backgroundColor: "#cffe25", textDecoration: "none",
              fontFamily: f, fontSize: "15px", fontWeight: 700,
              letterSpacing: "-0.02em", color: "#010104",
              boxShadow: "0 0 32px rgba(207,254,37,0.18)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 48px rgba(207,254,37,0.35)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(207,254,37,0.18)";
            }}
          >
            Start a project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
