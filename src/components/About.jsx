import { skills, education, experience, personal } from "../data/portfolioData";

function hexToRgb(hex) {
  if (!hex || hex.length < 7) return "0,212,170";
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function SkillBar({ skill, delay }) {
  return (
    <div
      className="glass-card"
      style={{ padding: "13px 15px", cursor: "default" }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,212,170,0.35)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 9 }}>
        <div style={{
          width: 30, height: 30, borderRadius: 7, flexShrink: 0,
          background: `rgba(${hexToRgb(skill.color)}, 0.12)`,
          border: `1px solid rgba(${hexToRgb(skill.color)}, 0.25)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: skill.icon.length <= 2 ? 10 : 15,
          fontWeight: 700, color: skill.color, fontFamily: "var(--mono)",
        }}>{skill.icon}</div>
        <span style={{ fontSize: 13, fontWeight: 600, flex: 1 }}>{skill.name}</span>
        <span style={{ fontSize: 11, color: "var(--teal)", fontFamily: "var(--mono)", fontWeight: 600 }}>{skill.level}%</span>
      </div>
      <div style={{ height: 3, borderRadius: 2, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
        <div style={{
          height: "100%", width: `${skill.level}%`, borderRadius: 2,
          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
          boxShadow: `0 0 8px ${skill.color}55`,
          animation: `growBar 1.2s ${delay}ms ease-out forwards`,
          transform: "scaleX(0)", transformOrigin: "left",
        }} />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>

          {/* ── LEFT ── */}
          <div>
            <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--teal)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Who I Am</p>
            <h2 className="sec-title"><span>About</span></h2>
            <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.8, marginBottom: 32 }}>{personal.bio}</p>

            {/* Contact info chips */}
            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 40 }}>
              {[
                { label: "Email",    value: personal.email,    icon: "✉" },
                { label: "Phone",    value: personal.phone,    icon: "📱" },
                { label: "Location", value: personal.location, icon: "📍" },
              ].map(item => (
                <div key={item.label} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "11px 15px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 10,
                }}>
                  <span style={{ fontSize: 14 }}>{item.icon}</span>
                  <span style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--mono)", width: 56 }}>{item.label}</span>
                  <span style={{ fontSize: 13, color: "var(--text)" }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Education */}
            <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--teal)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Education</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
              {education.map((e, i) => (
                <div key={i} className="glass-card" style={{ padding: "14px 18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{e.degree}</p>
                      <p style={{ fontSize: 12, color: "var(--text2)", marginBottom: 3 }}>{e.institution}</p>
                      <p style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--mono)" }}>{e.location} · {e.duration}</p>
                    </div>
                    <span style={{
                      fontSize: 11, fontFamily: "var(--mono)", fontWeight: 600,
                      color: "#00D4AA", background: "rgba(0,212,170,0.08)",
                      border: "1px solid rgba(0,212,170,0.2)",
                      borderRadius: 6, padding: "3px 10px", whiteSpace: "nowrap", flexShrink: 0,
                    }}>{e.score}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience / Internship */}
            <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--teal)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Experience</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {experience.map((exp, i) => (
                <div key={i} className="glass-card" style={{ padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, marginBottom: 3 }}>{exp.role}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{
                          fontSize: 11, fontFamily: "var(--mono)", fontWeight: 600,
                          color: "#00D4AA", background: "rgba(0,212,170,0.08)",
                          border: "1px solid rgba(0,212,170,0.2)",
                          borderRadius: 5, padding: "2px 9px",
                        }}>{exp.company}</span>
                        <span style={{ fontSize: 11, color: "var(--text3)", fontFamily: "var(--mono)" }}>{exp.duration}</span>
                      </div>
                    </div>
                    <div style={{
                      width: 36, height: 36, borderRadius: 9,
                      background: "rgba(0,212,170,0.08)",
                      border: "1px solid rgba(0,212,170,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, flexShrink: 0,
                    }}>🤖</div>
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {exp.highlights.map((h, j) => (
                      <li key={j} style={{ display: "flex", gap: 8, fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
                        <span style={{ color: "var(--teal)", flexShrink: 0, marginTop: 1 }}>▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Skills ── */}
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <div>
                <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--teal)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Tech Stack</p>
                <h2 className="sec-title" style={{ marginBottom: 20 }}><span>Skills</span></h2>
              </div>
              <span style={{
                padding: "5px 14px", borderRadius: 8,
                background: "rgba(0,212,170,0.08)",
                border: "1px solid rgba(0,212,170,0.2)",
                color: "#00D4AA", fontSize: 12, fontFamily: "var(--mono)",
              }}>Core</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 70} />
              ))}
            </div>

            {/* Skill category summary */}
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Frontend",    items: "React.js, JavaScript (ES6+), HTML5, CSS3",      color: "#61DAFB" },
                { label: "Tools & APIs", items: "REST API, Axios, React Router, Git, VS Code",  color: "#00D4AA" },
                { label: "Other",       items: "Python, C, MS Office Suite",                    color: "#3776AB" },
                { label: "Soft Skills", items: "Communication, Problem-solving, Teamwork",      color: "#a78bfa" },
              ].map(cat => (
                <div key={cat.label} style={{
                  display: "flex", gap: 12, padding: "11px 14px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10,
                }}>
                  <div style={{
                    width: 4, borderRadius: 2, background: cat.color, flexShrink: 0,
                    boxShadow: `0 0 8px ${cat.color}66`,
                  }} />
                  <div>
                    <p style={{ fontSize: 11, fontFamily: "var(--mono)", color: cat.color, fontWeight: 600, marginBottom: 3 }}>{cat.label}</p>
                    <p style={{ fontSize: 12, color: "var(--text2)" }}>{cat.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes growBar { to { transform: scaleX(1); } }
        @media (max-width: 900px) {
          #about .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
