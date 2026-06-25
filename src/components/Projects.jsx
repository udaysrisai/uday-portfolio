import { useState } from "react";
import { projects } from "../data/portfolioData";

function hexToRgb(hex) {
  if (!hex || hex.length < 7) return "0,212,170";
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function ProjectCard({ project, large }) {
  const [imgErr, setImgErr] = useState(false);
  const isLive = project.liveUrl && project.liveUrl !== "#";

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(0,212,170,0.3)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,212,170,0.06)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Screenshot */}
      <div style={{
        height: large ? 260 : 200,
        background: "linear-gradient(135deg, #0d0d1f 0%, #111130 100%)",
        position: "relative", overflow: "hidden", flexShrink: 0,
      }}>
        {!imgErr ? (
          <img src={project.image} alt={project.title} onError={() => setImgErr(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          /* Styled placeholder */
          <div style={{ width: "100%", height: "100%", padding: "18px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 7, padding: "7px 12px", display: "flex", alignItems: "center", gap: 7 }}>
              {["#ff5f57","#febc2e","#28c840"].map(c => <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, display: "inline-block" }} />)}
              <div style={{ flex: 1, height: 14, background: "rgba(255,255,255,0.05)", borderRadius: 4, marginLeft: 6 }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 8, flex: 1 }}>
              <div style={{ background: "rgba(0,212,170,0.05)", borderRadius: 7, padding: 10, display: "flex", flexDirection: "column", gap: 7 }}>
                {[75,55,55,55,55].map((w,i) => <div key={i} style={{ height: 7, background: "rgba(0,212,170,0.18)", borderRadius: 4, width: `${w}%` }} />)}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7, paddingTop: 4 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  {["#00D4AA","#3b82f6","#a78bfa"].map((c,i) => (
                    <div key={i} style={{ padding: "3px 9px", background: `${c}1a`, border: `1px solid ${c}33`, borderRadius: 5, fontSize: 9, color: c }}>Tab {i+1}</div>
                  ))}
                </div>
                {[100,75,88,65].map((w,i) => <div key={i} style={{ height: 8, background: "rgba(255,255,255,0.05)", borderRadius: 4, width: `${w}%` }} />)}
              </div>
            </div>
          </div>
        )}

        {/* Year badge */}
        <div style={{
          position: "absolute", top: 12, right: 12,
          background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 7, padding: "4px 10px",
          fontSize: 11, color: "var(--teal)", fontFamily: "var(--mono)",
        }}>{project.year}</div>

        {/* Live badge */}
        {isLive && (
          <div style={{
            position: "absolute", top: 12, left: 12,
            background: "rgba(0,212,170,0.15)", backdropFilter: "blur(8px)",
            border: "1px solid rgba(0,212,170,0.3)",
            borderRadius: 7, padding: "4px 10px",
            fontSize: 11, color: "#00D4AA", fontFamily: "var(--mono)",
            display: "flex", alignItems: "center", gap: 5,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00D4AA", display: "inline-block", boxShadow: "0 0 6px #00D4AA" }} />
            Live
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Title */}
        <div style={{ marginBottom: 14 }}>
          <h3 style={{ fontSize: large ? 20 : 17, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 3, lineHeight: 1.25 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 12, color: "var(--teal)", fontFamily: "var(--mono)" }}>{project.subtitle}</p>
        </div>

        {/* Bullet points */}
        <ul style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 18, flex: 1 }}>
          {project.bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
              <span style={{ color: "var(--teal)", flexShrink: 0, marginTop: 1 }}>▸</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 18 }}>
          {project.tech.map((t, i) => (
            <span key={t} style={{
              fontSize: 11, fontFamily: "var(--mono)", padding: "3px 10px", borderRadius: 5,
              background: `rgba(${hexToRgb(project.techColors[i] || "#00D4AA")}, 0.1)`,
              border: `1px solid rgba(${hexToRgb(project.techColors[i] || "#00D4AA")}, 0.22)`,
              color: project.techColors[i] || "#00D4AA",
            }}>{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={project.liveUrl}
            target={isLive ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={isLive ? "btn-teal" : "btn-outline"}
            style={{ fontSize: 12, padding: "8px 18px", opacity: isLive ? 1 : 0.5, pointerEvents: isLive ? "auto" : "none" }}
          >
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {isLive ? "Live Demo" : "Coming Soon"}
          </a>
          <a href={project.githubUrl} className="btn-outline" style={{ fontSize: 12, padding: "8px 18px" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--teal)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>What I've Built</p>
          <h2 className="sec-title" style={{ marginBottom: 0 }}>Featured <span>Projects</span></h2>
          <p style={{ fontSize: 15, color: "var(--text2)", marginTop: 12 }}>Production-grade applications built with modern web technologies</p>
        </div>

        {/* Featured 2-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 24, marginBottom: 24 }}>
          {featured.map(p => <ProjectCard key={p.id} project={p} large />)}
        </div>

        {/* Other projects row */}
        {others.length > 0 && (
          <>
            <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, marginTop: 8 }}>Other Projects</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
              {others.map(p => <ProjectCard key={p.id} project={p} large={false} />)}
            </div>
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #projects .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
