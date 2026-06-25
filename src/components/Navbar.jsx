import { useState, useEffect } from "react";
import { navLinks } from "../data/portfolioData";

export default function Navbar({ onViewResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0",
      transition: "all 0.3s",
    }}>
      <div style={{
        margin: "12px 32px",
        background: scrolled ? "rgba(13,13,20,0.85)" : "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "14px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.3s",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: 36, height: 36,
            background: "linear-gradient(135deg, #00D4AA, #3b82f6)",
            borderRadius: "10px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 16, color: "#000",
          }}>U</div>
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>Uday Sirigineedi</span>
        </div>

        {/* Nav links */}
        <ul style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {navLinks.map((link) => {
            if (link === "Skills") return (
              <li key={link} style={{ position: "relative" }}>
                <button
                  onClick={() => setSkillsOpen(!skillsOpen)}
                  style={{
                    background: "none", border: "none", color: "var(--text2)",
                    fontSize: 14, fontWeight: 500, cursor: "pointer",
                    padding: "6px 12px", borderRadius: 8,
                    display: "flex", alignItems: "center", gap: 4,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "var(--text2)"}
                >
                  Skills ▾
                </button>
                {skillsOpen && (
                  <div style={{
                    position: "absolute", top: "calc(100% + 8px)", left: 0,
                    background: "rgba(17,17,32,0.95)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 10, padding: "8px",
                    minWidth: 160, zIndex: 200,
                    boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
                  }}>
                    {["Frontend", "Tools & APIs", "Other"].map(s => (
                      <a key={s} href="#skills"
                        onClick={() => setSkillsOpen(false)}
                        style={{
                          display: "block", padding: "8px 14px",
                          fontSize: 13, color: "var(--text2)",
                          borderRadius: 6,
                          transition: "background 0.2s, color 0.2s",
                        }}
                        onMouseEnter={e => { e.target.style.background = "rgba(0,212,170,0.1)"; e.target.style.color = "var(--teal)"; }}
                        onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = "var(--text2)"; }}
                      >{s}</a>
                    ))}
                  </div>
                )}
              </li>
            );
            return (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} style={{
                  fontSize: 14, fontWeight: 500, color: "var(--text2)",
                  padding: "6px 12px", borderRadius: 8,
                  transition: "color 0.2s",
                  display: "block",
                }}
                  onMouseEnter={e => e.target.style.color = "#fff"}
                  onMouseLeave={e => e.target.style.color = "var(--text2)"}
                >{link}</a>
              </li>
            );
          })}
        </ul>

        {/* Resume button */}
        <button className="btn-teal" onClick={onViewResume} style={{ fontSize: 13, padding: "9px 20px" }}>
          View Resume
        </button>
      </div>
    </nav>
  );
}
