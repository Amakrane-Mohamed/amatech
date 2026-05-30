"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap, registerGsap } from "@/lib/gsap";

const f = "var(--font-inter), Inter, Arial, sans-serif";

const STATS = [
  { value: 40, suffix: "+", label: "Projects delivered", desc: "From lean MVPs to enterprise-scale platforms" },
  { value: 100, suffix: "%", label: "In-house team", desc: "No outsourcing — ever. Every bit is built by us." },
  { value: 24, suffix: "h", label: "Response time", desc: "Close, fast, and always reachable." },
];

export function SocialProofSection() {
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    registerGsap();
    STATS.forEach((s, i) => {
      const el = numRefs.current[i];
      if (!el) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: s.value,
        duration: 1.8,
        delay: i * 0.18,
        ease: "power3.out",
        onUpdate: () => { el.textContent = Math.round(obj.val) + s.suffix; },
      });
    });
  }, [inView]);

  return (
    <section style={{ backgroundColor: "#010104", padding: "140px 0", position: "relative", overflow: "hidden" }}>
      {/* Top glowing border */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "55%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(207,254,37,0.18), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px" }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ margin: "0 0 100px", fontFamily: f, fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cffe25", textAlign: "center" }}
        >
          By the numbers
        </motion.p>

        {/* Stats grid with 1px gap separator */}
        <div
          ref={sectionRef}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", backgroundColor: "rgba(255,255,255,0.06)" }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ backgroundColor: "#010104", padding: "64px 52px", textAlign: "center" }}
            >
              <div style={{
                fontFamily: f, fontSize: "clamp(72px, 8vw, 100px)",
                fontWeight: 800, lineHeight: 1,
                letterSpacing: "-0.05em", color: "#fff", marginBottom: "18px",
              }}>
                <span ref={(el: HTMLSpanElement | null) => { numRefs.current[i] = el; }}>
                  {"0" + s.suffix}
                </span>
              </div>
              <p style={{ margin: "0 0 10px", fontFamily: f, fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em", color: "rgba(255,255,255,0.65)" }}>
                {s.label}
              </p>
              <p style={{ margin: 0, fontFamily: f, fontSize: "14px", lineHeight: "22px", color: "rgba(255,255,255,0.28)" }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
