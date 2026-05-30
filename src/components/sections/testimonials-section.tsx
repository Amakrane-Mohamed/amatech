"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const f = "var(--font-inter), Inter, Arial, sans-serif";

const TESTIMONIALS = [
  {
    quote: "AMATECH took our vague idea and turned it into a polished, production-ready product in weeks. The quality was something we didn't expect at this price point.",
    name: "Sarah K.", role: "Founder", company: "SaaS Startup", initials: "SK",
  },
  {
    quote: "What sets them apart is communication. We always knew where things stood. No surprises, no delays. Just a team that does exactly what they say they will.",
    name: "James O.", role: "CTO", company: "Tech Company", initials: "JO",
  },
  {
    quote: "Our e-commerce revenue grew 40% in the first quarter after AMATECH rebuilt our store. The performance improvements alone paid for the entire project.",
    name: "Layla M.", role: "CEO", company: "E-Commerce Brand", initials: "LM",
  },
];

const INTERVAL = 6000;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / INTERVAL, 1);
      setProgress(pct);
      if (pct < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setActive(prev => (prev + 1) % TESTIMONIALS.length);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const t = TESTIMONIALS[active];

  return (
    <section style={{
      backgroundColor: "#010104",
      padding: "140px 0",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient background glow */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(207,254,37,0.03) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 20px", textAlign: "center", position: "relative" }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ margin: "0 0 72px", fontFamily: f, fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cffe25" }}
        >
          What clients say
        </motion.p>

        {/* Large quote mark */}
        <div aria-hidden style={{
          position: "absolute", top: "72px", left: "50%", transform: "translateX(-50%)",
          fontFamily: f, fontSize: "200px", lineHeight: 1, fontWeight: 800,
          color: "rgba(207,254,37,0.04)", letterSpacing: "-0.06em",
          userSelect: "none", pointerEvents: "none",
        }}>
          &ldquo;
        </div>

        {/* Testimonial */}
        <div style={{ minHeight: "240px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "44px" }}
            >
              <p style={{
                margin: 0, fontFamily: f,
                fontSize: "clamp(19px, 2.4vw, 26px)",
                lineHeight: 1.5, fontWeight: 500,
                letterSpacing: "-0.03em",
                color: "rgba(255,255,255,0.82)",
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "46px", height: "46px", borderRadius: "50%",
                  backgroundColor: "rgba(207,254,37,0.1)",
                  border: "1px solid rgba(207,254,37,0.22)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <span style={{ fontFamily: f, fontSize: "12px", fontWeight: 700, color: "#cffe25", letterSpacing: "0.04em" }}>{t.initials}</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ margin: 0, fontFamily: f, fontSize: "14px", fontWeight: 700, letterSpacing: "-0.02em", color: "#fff" }}>{t.name}</p>
                  <p style={{ margin: 0, fontFamily: f, fontSize: "13px", color: "rgba(255,255,255,0.38)" }}>{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots + progress */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "60px" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                position: "relative",
                width: "32px", height: "4px",
                borderRadius: "100px", border: "none", cursor: "pointer",
                backgroundColor: "rgba(255,255,255,0.12)",
                padding: 0, overflow: "hidden",
              }}
            >
              {i === active && (
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "100px",
                  backgroundColor: "#cffe25",
                  transformOrigin: "left",
                  transform: `scaleX(${progress})`,
                  transition: "transform 0.05s linear",
                }} />
              )}
              {i !== active && (
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "100px",
                  backgroundColor: "rgba(255,255,255,0.35)",
                  opacity: 0,
                }} />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
