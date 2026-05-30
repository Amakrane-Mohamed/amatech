"use client";

import { motion } from "framer-motion";

const f = "var(--font-inter), Inter, Arial, sans-serif";

const LINKS = {
  Services: ["Web Development", "SaaS Development", "AI & Automation", "Mobile Apps", "E-Commerce", "UI / UX Design"],
  Company:  ["About", "Work", "Process", "Careers"],
  Connect:  ["hello@amatech.dev", "Twitter / X", "LinkedIn", "GitHub"],
};

const SOCIALS = [
  {
    label: "X",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: "#010104", position: "relative" }}>
      {/* Gradient top border */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(207,254,37,0.15) 30%, rgba(207,254,37,0.15) 70%, transparent 100%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 20px" }}>

        {/* Main content */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "48px", padding: "80px 0 64px" }}>

          {/* Brand col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "22px" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px",
                backgroundColor: "#cffe25",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: f, fontSize: "15px", fontWeight: 800, color: "#010104", letterSpacing: "-0.04em" }}>A</span>
              </div>
              <span style={{ fontFamily: f, fontSize: "17px", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>AMATECH</span>
            </div>
            <p style={{ margin: "0 0 32px", fontFamily: f, fontSize: "14px", lineHeight: "23px", color: "rgba(210,210,210,0.38)", maxWidth: "230px", letterSpacing: "-0.01em" }}>
              Building high-performance digital products for ambitious companies.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ borderColor: "rgba(207,254,37,0.35)", color: "#cffe25", y: -2 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.38)", textDecoration: "none",
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <p style={{ margin: "0 0 20px", fontFamily: f, fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.24)" }}>
                {heading}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "13px" }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontFamily: f, fontSize: "14px", fontWeight: 500,
                        letterSpacing: "-0.01em", color: "rgba(210,210,210,0.42)",
                        textDecoration: "none", transition: "color 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(210,210,210,0.42)"; }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "22px 0",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <p style={{ margin: 0, fontFamily: f, fontSize: "13px", color: "rgba(255,255,255,0.2)", letterSpacing: "-0.01em" }}>
            © {new Date().getFullYear()} AMATECH. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontFamily: f, fontSize: "13px", color: "rgba(255,255,255,0.2)", textDecoration: "none", transition: "color 0.2s", letterSpacing: "-0.01em" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.2)"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
