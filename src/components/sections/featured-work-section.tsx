"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const f = "var(--font-inter), Inter, Arial, sans-serif";

const ARROW = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const PROJECTS = [
  { num: "01", title: "High-Performance Store", category: "E-Commerce", tech: ["Next.js", "Shopify"], year: "2025", accent: "#cffe25", type: "ecommerce" },
  { num: "02", title: "Cross-Platform App",    category: "Mobile",      tech: ["React Native", "Expo"], year: "2025", accent: "#a090ff", type: "mobile"    },
  { num: "03", title: "Analytics Platform",    category: "SaaS",        tech: ["TypeScript", "Python"], year: "2024", accent: "#40d0f0", type: "analytics" },
  { num: "04", title: "AI Automation Suite",   category: "AI Product",  tech: ["Python", "LLMs"],       year: "2024", accent: "#ff9060", type: "ai"        },
] as const;

/* ─── Mockup: E-Commerce ──────────────────────────────────────────── */
function MockupEcommerce({ accent }: { accent: string }) {
  return (
    <div style={{ padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Browser chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)" }} />
        ))}
        <div style={{ flex: 1, height: "20px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.05)", marginLeft: "8px" }} />
        <div style={{ width: "28px", height: "20px", borderRadius: "6px", backgroundColor: "rgba(255,255,255,0.04)" }} />
      </div>

      {/* Nav bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div style={{ height: "9px", width: "52px", backgroundColor: "rgba(255,255,255,0.65)", borderRadius: "4px" }} />
          {[40, 34, 48].map((w, i) => (
            <div key={i} style={{ height: "6px", width: `${w}px`, backgroundColor: "rgba(255,255,255,0.14)", borderRadius: "3px" }} />
          ))}
        </div>
        <div style={{ padding: "7px 16px", borderRadius: "100px", backgroundColor: accent, fontFamily: f, fontSize: "10px", fontWeight: 700, color: "#010104", whiteSpace: "nowrap" }}>
          Cart (3)
        </div>
      </div>

      {/* Hero banner */}
      <div style={{
        borderRadius: "12px", padding: "22px",
        background: `linear-gradient(130deg, ${accent}1a 0%, ${accent}06 100%)`,
        border: `1px solid ${accent}25`,
        display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0,
      }}>
        <div>
          <div style={{ height: "13px", width: "140px", backgroundColor: "rgba(255,255,255,0.85)", borderRadius: "6px", marginBottom: "10px" }} />
          <div style={{ height: "7px", width: "100px", backgroundColor: "rgba(255,255,255,0.22)", borderRadius: "3px", marginBottom: "18px" }} />
          <div style={{ display: "inline-flex", padding: "8px 18px", borderRadius: "100px", backgroundColor: accent, fontFamily: f, fontSize: "10px", fontWeight: 700, color: "#010104" }}>
            Shop Now →
          </div>
        </div>
        <div style={{ width: "76px", height: "76px", borderRadius: "14px", background: `linear-gradient(135deg, ${accent}28, ${accent}08)`, border: `1px solid ${accent}30`, flexShrink: 0 }} />
      </div>

      {/* Product grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", flex: 1 }}>
        {[1, 0.75, 0.92].map((op, i) => (
          <div key={i} style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.03)" }}>
            <div style={{ height: "60px", background: `linear-gradient(135deg, ${accent}${Math.round(op * 22).toString(16)}0 0%, transparent 100%)` }} />
            <div style={{ padding: "10px" }}>
              <div style={{ height: "6px", width: "75%", backgroundColor: "rgba(255,255,255,0.28)", borderRadius: "3px", marginBottom: "6px" }} />
              <div style={{ height: "5px", width: "48%", backgroundColor: accent + "70", borderRadius: "3px" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Mockup: Mobile App ──────────────────────────────────────────── */
function MockupMobile({ accent }: { accent: string }) {
  return (
    <div style={{ padding: "24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "24px" }}>
      {/* Phone frame */}
      <div style={{ width: "155px", height: "290px", borderRadius: "32px", border: "2px solid rgba(255,255,255,0.11)", backgroundColor: "#080810", overflow: "hidden", position: "relative", flexShrink: 0 }}>
        {/* Notch */}
        <div style={{ height: "30px", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "6px" }}>
          <div style={{ width: "48px", height: "14px", borderRadius: "100px", backgroundColor: "rgba(0,0,0,0.85)", border: "1px solid rgba(255,255,255,0.07)" }} />
        </div>
        {/* Content */}
        <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: `${accent}28`, border: `1px solid ${accent}45`, flexShrink: 0 }} />
            <div>
              <div style={{ height: "6px", width: "60px", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: "3px", marginBottom: "5px" }} />
              <div style={{ height: "5px", width: "38px", backgroundColor: "rgba(255,255,255,0.18)", borderRadius: "3px" }} />
            </div>
          </div>
          <div style={{ height: "78px", borderRadius: "14px", background: `linear-gradient(135deg, ${accent}1e 0%, ${accent}07 100%)`, border: `1px solid ${accent}28`, padding: "14px" }}>
            <div style={{ height: "8px", width: "80px", backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "4px", marginBottom: "8px" }} />
            <div style={{ height: "6px", width: "52px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "3px" }} />
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.04)" }}>
              <div style={{ width: "24px", height: "24px", borderRadius: "8px", backgroundColor: accent + "1e", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: "5px", width: "70%", backgroundColor: "rgba(255,255,255,0.32)", borderRadius: "3px", marginBottom: "5px" }} />
                <div style={{ height: "4px", width: "44%", backgroundColor: "rgba(255,255,255,0.13)", borderRadius: "3px" }} />
              </div>
            </div>
          ))}
        </div>
        {/* Bottom nav */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "46px", borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#080810", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "0 10px" }}>
          {[true, false, false, false].map((active, i) => (
            <div key={i} style={{ width: "20px", height: "20px", borderRadius: "6px", backgroundColor: active ? accent + "22" : "rgba(255,255,255,0.05)", border: active ? `1px solid ${accent}40` : "none" }} />
          ))}
        </div>
      </div>

      {/* Side stats */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {[
          { label: "Downloads", value: "14K+" },
          { label: "Rating", value: "4.9 ★" },
          { label: "Platforms", value: "iOS · Android" },
        ].map((s, i) => (
          <div key={i} style={{ padding: "12px 16px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.03)" }}>
            <div style={{ fontFamily: f, fontSize: "9px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "6px" }}>{s.label}</div>
            <div style={{ fontFamily: f, fontSize: "15px", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Mockup: Analytics Dashboard ────────────────────────────────── */
function MockupAnalytics({ accent }: { accent: string }) {
  const bars = [38, 62, 48, 82, 54, 92, 68, 84];

  return (
    <div style={{ padding: "24px", height: "100%", display: "flex", gap: "18px" }}>
      {/* Sidebar */}
      <div style={{ width: "42px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", paddingTop: "6px" }}>
        <div style={{ width: "34px", height: "34px", borderRadius: "10px", backgroundColor: accent + "1e", border: `1px solid ${accent}35`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "14px", height: "14px", borderRadius: "4px", backgroundColor: accent }} />
        </div>
        {[0.28, 0.14, 0.14, 0.14].map((op, i) => (
          <div key={i} style={{ width: "34px", height: "34px", borderRadius: "10px", backgroundColor: `rgba(255,255,255,${op})` }} />
        ))}
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
          {[
            { val: "$84K", label: "Revenue", delta: "+18%" },
            { val: "2.4K", label: "Users", delta: "+32%" },
            { val: "91%", label: "Retention", delta: "+5%" },
          ].map((k, i) => (
            <div key={i} style={{ borderRadius: "10px", padding: "11px", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontFamily: f, fontSize: "15px", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", marginBottom: "4px" }}>{k.val}</div>
              <div style={{ fontFamily: f, fontSize: "9px", color: "rgba(255,255,255,0.32)", marginBottom: "4px" }}>{k.label}</div>
              <div style={{ fontFamily: f, fontSize: "9px", fontWeight: 700, color: accent }}>{k.delta}</div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div style={{ flex: 1, borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)", padding: "14px", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
            <div style={{ height: "8px", width: "64px", backgroundColor: "rgba(255,255,255,0.4)", borderRadius: "4px" }} />
            <div style={{ display: "flex", gap: "6px" }}>
              {["1W", "1M", "3M"].map((l, i) => (
                <div key={i} style={{ padding: "3px 8px", borderRadius: "100px", backgroundColor: i === 1 ? accent + "1e" : "transparent", border: `1px solid ${i === 1 ? accent + "40" : "rgba(255,255,255,0.08)"}`, fontFamily: f, fontSize: "9px", color: i === 1 ? accent : "rgba(255,255,255,0.28)" }}>
                  {l}
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "5px" }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, borderRadius: "4px 4px 2px 2px", background: i === 5 ? accent : `${accent}28`, height: `${h}%`, minHeight: "6px" }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mockup: AI Pipeline ─────────────────────────────────────────── */
function MockupAI({ accent }: { accent: string }) {
  return (
    <div style={{ padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "14px" }}>
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ height: "10px", width: "110px", backgroundColor: "rgba(255,255,255,0.7)", borderRadius: "5px", marginBottom: "7px" }} />
          <div style={{ height: "6px", width: "72px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "3px" }} />
        </div>
        <div style={{ padding: "6px 14px", borderRadius: "100px", backgroundColor: accent + "1e", border: `1px solid ${accent}40`, fontFamily: f, fontSize: "10px", fontWeight: 700, color: accent }}>
          ● Running
        </div>
      </div>

      {/* Pipeline canvas */}
      <div style={{ flex: 1, borderRadius: "14px", border: "1px solid rgba(255,255,255,0.07)", backgroundColor: "rgba(255,255,255,0.02)", position: "relative", overflow: "hidden" }}>
        {/* Grid bg */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />

        {/* SVG connections */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 400 180" preserveAspectRatio="none">
          <line x1="90" y1="52" x2="168" y2="52" stroke={accent + "55"} strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="232" y1="52" x2="308" y2="52" stroke={accent + "55"} strokeWidth="1.5" strokeDasharray="5 3" />
          <line x1="200" y1="72" x2="200" y2="120" stroke={accent + "38"} strokeWidth="1.5" strokeDasharray="5 3" />
          <polygon points="168,48 176,52 168,56" fill={accent + "70"} />
          <polygon points="308,48 316,52 308,56" fill={accent + "70"} />
          <polygon points="196,120 200,128 204,120" fill={accent + "55"} />
        </svg>

        {/* Nodes */}
        {[
          { x: "12%", y: "28%", label: "Data Input",  sub: "REST API",   active: false },
          { x: "50%", y: "28%", label: "LLM Layer",   sub: "GPT-4o",     active: true  },
          { x: "88%", y: "28%", label: "Output",      sub: "JSON",       active: false },
          { x: "50%", y: "72%", label: "Memory",      sub: "Vector DB",  active: false },
        ].map((n, i) => (
          <div key={i} style={{ position: "absolute", left: n.x, top: n.y, transform: "translate(-50%, -50%)" }}>
            <div style={{
              padding: "9px 13px", borderRadius: "10px", textAlign: "center", minWidth: "70px",
              backgroundColor: n.active ? accent + "1a" : "rgba(255,255,255,0.05)",
              border: `1px solid ${n.active ? accent + "50" : "rgba(255,255,255,0.1)"}`,
            }}>
              <div style={{ fontFamily: f, fontSize: "10px", fontWeight: 700, color: n.active ? accent : "rgba(255,255,255,0.8)", marginBottom: "3px", whiteSpace: "nowrap" }}>{n.label}</div>
              <div style={{ fontFamily: f, fontSize: "8px", color: "rgba(255,255,255,0.28)", whiteSpace: "nowrap" }}>{n.sub}</div>
            </div>
          </div>
        ))}

        {/* Log console */}
        <div style={{ position: "absolute", bottom: "12px", left: "12px", right: "12px", borderRadius: "8px", backgroundColor: "rgba(0,0,0,0.55)", padding: "10px 12px" }}>
          {["→ Ingesting data stream...", "→ Running inference pass...", "→ Output ready ✓"].map((line, i) => (
            <div key={i} style={{ fontFamily: "monospace", fontSize: "9px", color: i === 2 ? accent : "rgba(255,255,255,0.38)", marginBottom: i < 2 ? "4px" : 0 }}>{line}</div>
          ))}
        </div>
      </div>

      {/* Metrics row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
        {[{ label: "Latency", value: "42ms" }, { label: "Req/s", value: "12K" }, { label: "Accuracy", value: "98.7%" }].map((m, i) => (
          <div key={i} style={{ padding: "9px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
            <div style={{ fontFamily: f, fontSize: "13px", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>{m.value}</div>
            <div style={{ fontFamily: f, fontSize: "8px", color: "rgba(255,255,255,0.28)", marginTop: "3px" }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Default state (nothing hovered) ────────────────────────────── */
function DefaultPreviewState() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px", gap: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", width: "100%" }}>
        {PROJECTS.map((p, i) => (
          <div key={i} style={{
            borderRadius: "14px", height: "90px",
            background: `linear-gradient(135deg, ${p.accent}10 0%, transparent 100%)`,
            border: `1px solid ${p.accent}18`,
            padding: "14px", position: "relative", overflow: "hidden",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
          }}>
            <div aria-hidden style={{ position: "absolute", top: "10px", right: "10px", width: "22px", height: "22px", borderRadius: "50%", backgroundColor: p.accent + "18", border: `1px solid ${p.accent}35` }} />
            <div style={{ fontFamily: f, fontSize: "10px", fontWeight: 700, color: p.accent, marginBottom: "4px" }}>{p.num}</div>
            <div style={{ fontFamily: f, fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.55)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              {p.title.split(" ").slice(0, 2).join(" ")}
            </div>
          </div>
        ))}
      </div>
      <p style={{ margin: 0, fontFamily: f, fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.18)" }}>
        Hover a project to preview
      </p>
    </div>
  );
}

/* ─── Preview panel ───────────────────────────────────────────────── */
function PreviewPanel({ hovered }: { hovered: number | null }) {
  const p = hovered !== null ? PROJECTS[hovered] : null;

  function renderMockup() {
    if (!p) return <DefaultPreviewState />;
    if (p.type === "ecommerce") return <MockupEcommerce accent={p.accent} />;
    if (p.type === "mobile")    return <MockupMobile accent={p.accent} />;
    if (p.type === "analytics") return <MockupAnalytics accent={p.accent} />;
    return <MockupAI accent={p.accent} />;
  }

  return (
    <div style={{
      borderRadius: "24px",
      border: `1px solid ${p ? p.accent + "22" : "rgba(255,255,255,0.07)"}`,
      backgroundColor: "#0c0c10",
      overflow: "hidden",
      height: "390px",
      transition: "border-color 0.4s ease",
      position: "relative",
    }}>
      {/* Subtle corner glow matching accent */}
      {p && (
        <div aria-hidden style={{
          position: "absolute", top: 0, right: 0,
          width: "180px", height: "180px",
          background: `radial-gradient(circle at top right, ${p.accent}0e 0%, transparent 65%)`,
          pointerEvents: "none", borderRadius: "0 24px 0 0",
          transition: "opacity 0.4s",
        }} />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={p?.num ?? "default"}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ height: "100%" }}
        >
          {renderMockup()}
        </motion.div>
      </AnimatePresence>

      {/* Project label tag */}
      <AnimatePresence>
        {p && (
          <motion.div
            key={p.num + "-tag"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute", bottom: "16px", right: "16px",
              padding: "5px 12px", borderRadius: "100px",
              backgroundColor: p.accent + "18",
              border: `1px solid ${p.accent}35`,
              fontFamily: f, fontSize: "11px", fontWeight: 700, color: p.accent,
              pointerEvents: "none",
            }}
          >
            {p.category}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main section ────────────────────────────────────────────────── */
export function FeaturedWorkSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(listRef, { once: true, margin: "-80px" });

  return (
    <section style={{ backgroundColor: "#010104", padding: "120px 0 140px" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "72px" }}
        >
          <div>
            <p style={{ margin: "0 0 14px", fontFamily: f, fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#cffe25" }}>
              Selected Work
            </p>
            <h2 style={{ margin: 0, fontFamily: f, fontSize: "clamp(38px, 4.5vw, 58px)", lineHeight: 1.0, fontWeight: 800, letterSpacing: "-0.05em", color: "#fff" }}>
              What we&apos;ve built
            </h2>
          </div>
          <a
            href="#"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: f, fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "-0.01em", transition: "color 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)"; }}
          >
            All projects {ARROW}
          </a>
        </motion.div>

        {/* Body: project list + preview */}
        <div style={{ display: "grid", gridTemplateColumns: "55% 1fr", gap: "48px", alignItems: "start" }}>

          {/* Left — project rows */}
          <div ref={listRef} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {PROJECTS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <a
                  href="#"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "flex", alignItems: "center", gap: "28px",
                    padding: "28px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    textDecoration: "none", position: "relative", overflow: "hidden",
                  }}
                >
                  {/* Hover left bar */}
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: p.accent, borderRadius: "0 2px 2px 0", opacity: hovered === i ? 1 : 0, transition: "opacity 0.22s", pointerEvents: "none" }} />
                  {/* Hover row bg */}
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg, ${p.accent}09 0%, transparent 55%)`, opacity: hovered === i ? 1 : 0, transition: "opacity 0.22s", pointerEvents: "none" }} />

                  {/* Number */}
                  <span style={{ fontFamily: "monospace", fontSize: "12px", fontWeight: 500, color: hovered === i ? p.accent : "rgba(255,255,255,0.2)", flexShrink: 0, width: "26px", letterSpacing: "0.04em", transition: "color 0.22s", zIndex: 1 }}>
                    {p.num}
                  </span>

                  {/* Title */}
                  <motion.span
                    animate={{ x: hovered === i ? 7 : 0 }}
                    transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ fontFamily: f, flex: "1 1 auto", fontSize: "clamp(20px, 2.4vw, 36px)", fontWeight: 800, letterSpacing: "-0.045em", color: "#fff", zIndex: 1, display: "block" }}
                  >
                    {p.title}
                  </motion.span>

                  {/* Tags */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0, zIndex: 1 }}>
                    <span style={{ fontFamily: f, fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.26)", letterSpacing: "-0.01em", marginRight: "2px" }}>{p.category}</span>
                    {p.tech.map((t, ti) => (
                      <span key={ti} style={{ padding: "3px 9px", borderRadius: "100px", background: hovered === i ? `${p.accent}14` : "rgba(255,255,255,0.04)", border: `1px solid ${hovered === i ? p.accent + "35" : "rgba(255,255,255,0.07)"}`, fontFamily: f, fontSize: "10px", fontWeight: 600, color: hovered === i ? p.accent : "rgba(255,255,255,0.3)", transition: "all 0.22s", letterSpacing: "0.02em" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Year + arrow */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0, zIndex: 1 }}>
                    <span style={{ fontFamily: f, fontSize: "12px", fontWeight: 500, color: "rgba(255,255,255,0.22)" }}>{p.year}</span>
                    <span style={{ display: "flex", color: hovered === i ? p.accent : "rgba(255,255,255,0.22)", transform: hovered === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.22s, color 0.22s" }}>
                      {ARROW}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right — sticky preview panel */}
          <div style={{ position: "sticky", top: "120px" }}>
            <PreviewPanel hovered={hovered} />
          </div>
        </div>

      </div>
    </section>
  );
}
