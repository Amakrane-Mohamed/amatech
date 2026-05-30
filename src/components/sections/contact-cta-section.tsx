"use client";

import { motion } from "framer-motion";

const f = "var(--font-inter), Inter, Arial, sans-serif";

export function ContactCtaSection() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        backgroundColor: "#010104",
        padding: "160px 0 180px",
        overflow: "hidden",
      }}
    >
      {/* Moving gradient orbs */}
      <div aria-hidden style={{
        position: "absolute", top: "10%", left: "8%",
        width: "560px", height: "560px",
        background: "radial-gradient(circle, rgba(207,254,37,0.07) 0%, transparent 65%)",
        filter: "blur(70px)", pointerEvents: "none",
        animation: "ctaOrb1 9s ease-in-out infinite alternate",
      }} />
      <div aria-hidden style={{
        position: "absolute", bottom: "5%", right: "5%",
        width: "440px", height: "440px",
        background: "radial-gradient(circle, rgba(160,144,255,0.06) 0%, transparent 65%)",
        filter: "blur(90px)", pointerEvents: "none",
        animation: "ctaOrb2 11s ease-in-out infinite alternate",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: "60%", left: "45%",
        width: "320px", height: "320px",
        background: "radial-gradient(circle, rgba(64,208,240,0.04) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
        animation: "ctaOrb3 7s ease-in-out infinite alternate",
      }} />

      {/* Top gradient line */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "50%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(207,254,37,0.18), transparent)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ margin: "0 0 28px", fontFamily: f, fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cffe25" }}
        >
          Let&apos;s work together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ margin: "0 0 28px", fontFamily: f, fontSize: "clamp(48px, 6.5vw, 84px)", lineHeight: 1.0, fontWeight: 800, letterSpacing: "-0.055em", color: "#fff" }}
        >
          Ready to build<br />
          <span style={{ color: "#cffe25" }}>something great?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ margin: "0 0 64px", fontFamily: f, fontSize: "18px", lineHeight: "30px", letterSpacing: "-0.01em", color: "rgba(210,210,210,0.48)" }}
        >
          Tell us about your project. We&apos;ll get back to you within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}
        >
          <a
            href="mailto:hello@amatech.dev"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "18px 42px", borderRadius: "100px",
              backgroundColor: "#cffe25", textDecoration: "none",
              fontFamily: f, fontSize: "16px", fontWeight: 700,
              letterSpacing: "-0.02em", color: "#010104",
              boxShadow: "0 0 36px rgba(207,254,37,0.28)",
              transition: "transform 0.22s, box-shadow 0.22s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.02)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 56px rgba(207,254,37,0.45)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 36px rgba(207,254,37,0.28)";
            }}
          >
            Start a project
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="mailto:hello@amatech.dev"
            style={{
              display: "inline-flex", alignItems: "center",
              padding: "18px 42px", borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.14)", textDecoration: "none",
              fontFamily: f, fontSize: "16px", fontWeight: 600,
              letterSpacing: "-0.02em", color: "rgba(255,255,255,0.75)",
              transition: "border-color 0.22s, background 0.22s, color 0.22s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.35)";
              el.style.background = "rgba(255,255,255,0.05)";
              el.style.color = "#fff";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.14)";
              el.style.background = "transparent";
              el.style.color = "rgba(255,255,255,0.75)";
            }}
          >
            Book a call
          </a>
        </motion.div>

        {/* Email nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ margin: "36px 0 0", fontFamily: f, fontSize: "13px", color: "rgba(255,255,255,0.2)", letterSpacing: "-0.01em" }}
        >
          or email us directly at{" "}
          <a href="mailto:hello@amatech.dev" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.15)" }}>
            hello@amatech.dev
          </a>
        </motion.p>
      </div>

      <style>{`
        @keyframes ctaOrb1 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(50px, -40px) scale(1.12); }
        }
        @keyframes ctaOrb2 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-40px, 30px) scale(1.08); }
        }
        @keyframes ctaOrb3 {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-20px, -50px) scale(1.15); }
        }
      `}</style>
    </section>
  );
}
