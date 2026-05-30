"use client";

import { useState } from "react";

const SERVICES = [
  {
    title: "Web Development",
    description: "Fast, pixel-perfect websites and web apps engineered for performance, SEO, and growth.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cffe25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "SaaS Development",
    description: "End-to-end SaaS platforms built from architecture to deployment, ready to scale from day one.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cffe25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: "AI & Automation",
    description: "Intelligent workflows and AI integrations that reduce manual work and scale with your team.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cffe25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform iOS & Android apps built for performance, retention, and delight.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cffe25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "E-Commerce",
    description: "Conversion-optimised online stores with seamless UX, fast checkout, and built to grow.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cffe25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: "UI / UX Design",
    description: "Interfaces that feel intuitive, look world-class, and turn visitors into loyal customers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#cffe25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

const f = "var(--font-inter), Inter, Arial, sans-serif";

export function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ position: "relative", backgroundColor: "#010104", padding: "110px 0 120px", overflow: "hidden" }}>

      <style>{`
        @keyframes svc-in {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0px);   filter: drop-shadow(0 0 6px rgba(207,254,37,0.5)); }
          50%       { transform: translateY(-5px);  filter: drop-shadow(0 0 12px rgba(207,254,37,0.9)); }
        }
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        @media (max-width: 1024px) { .svc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px)  { .svc-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* background glow blobs */}
      <div aria-hidden style={{
        position:"absolute", top:"-20%", right:"-10%",
        width:"600px", height:"600px", borderRadius:"50%",
        background:"radial-gradient(circle, rgba(207,254,37,0.07) 0%, transparent 70%)",
        filter:"blur(80px)", pointerEvents:"none",
      }}/>
      <div aria-hidden style={{
        position:"absolute", bottom:"-15%", left:"-10%",
        width:"700px", height:"700px", borderRadius:"50%",
        background:"radial-gradient(circle, rgba(80,100,255,0.06) 0%, transparent 70%)",
        filter:"blur(100px)", pointerEvents:"none",
      }}/>

      <div style={{ position:"relative", maxWidth:"1320px", margin:"0 auto", padding:"0 20px" }}>

        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:"64px" }}>
          <h2 style={{
            margin:"0 0 18px", fontFamily:f,
            fontSize:"clamp(34px, 4vw, 52px)", lineHeight:1.1,
            fontWeight:700, letterSpacing:"-0.04em", color:"#fff",
          }}>
            Premium digital solutions<br/>for ambitious businesses
          </h2>
          <p style={{
            margin:"0 auto", maxWidth:"460px", fontFamily:f,
            fontSize:"17px", lineHeight:"27px", letterSpacing:"-0.01em",
            color:"rgba(210,210,210,0.55)",
          }}>
            From concept to launch, we cover every angle of your digital presence with precision and purpose.
          </p>
        </div>

        {/* Grid */}
        <div className="svc-grid">
          {SERVICES.map((s, i) => {
            const on = hovered === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position:"relative",
                  overflow:"hidden",
                  borderRadius:"24px",
                  padding:"36px 30px 32px",
                  cursor:"default",

                  /* ice glass */
                  background: on
                    ? "rgba(255,255,255,0.07)"
                    : "rgba(255,255,255,0.03)",
                  backdropFilter:"blur(40px) saturate(200%) brightness(1.08)",
                  WebkitBackdropFilter:"blur(40px) saturate(200%) brightness(1.08)",

                  border:`1px solid ${on ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.07)"}`,
                  boxShadow: on
                    ? `inset 0 1px 0 rgba(255,255,255,0.22),
                       inset 0 -1px 0 rgba(255,255,255,0.05),
                       0 20px 60px rgba(0,0,0,0.45),
                       0 0  50px rgba(207,254,37,0.05)`
                    : `inset 0 1px 0 rgba(255,255,255,0.12),
                       0 4px 24px rgba(0,0,0,0.3)`,

                  transform: on ? "translateY(-4px)" : "translateY(0)",
                  transition:"transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease",

                  animation:"svc-in 0.6s cubic-bezier(0.22,1,0.36,1) both",
                  animationDelay:`${i * 0.07}s`,
                }}
              >
                {/* top-corner ice glint */}
                <div aria-hidden style={{
                  position:"absolute", top:0, right:0,
                  width:"100px", height:"100px",
                  background:"radial-gradient(circle at top right, rgba(255,255,255,0.08) 0%, transparent 70%)",
                  borderRadius:"0 24px 0 0",
                  pointerEvents:"none",
                }}/>

                {/* icon — no background, just the glyph */}
                <div style={{
                  marginBottom:"24px",
                  animation: on ? "icon-float 1.8s ease-in-out infinite" : "none",
                  display:"inline-block",
                  filter: on
                    ? "drop-shadow(0 0 10px rgba(207,254,37,0.8))"
                    : "drop-shadow(0 0 4px rgba(207,254,37,0.4))",
                  transition:"filter 0.3s ease",
                }}>
                  {s.icon}
                </div>

                {/* title */}
                <h3 style={{
                  margin:"0 0 10px", fontFamily:f,
                  fontSize:"18px", lineHeight:"24px",
                  fontWeight:700, letterSpacing:"-0.03em",
                  color:"#fff",
                }}>
                  {s.title}
                </h3>

                {/* description */}
                <p style={{
                  margin:0, fontFamily:f,
                  fontSize:"15px", lineHeight:"24px",
                  letterSpacing:"-0.01em",
                  color: on ? "rgba(210,210,210,0.65)" : "rgba(210,210,210,0.45)",
                  transition:"color 0.25s",
                }}>
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
