import { useState, useEffect } from "react";
import { personal } from "../data/portfolioData";

export default function Hero({ onViewResume }) {
  const [typed, setTyped] = useState("");
  const roles = ["Frontend Developer", "React.js", "UI Engineer", "Web Developer"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [imgErr, setImgErr] = useState(false);

  // Typewriter
  useEffect(() => {
    let i = 0;
    const role = roles[roleIdx];
    const interval = setInterval(() => {
      setTyped(role.slice(0, i + 1));
      i++;
      if (i === role.length) {
        clearInterval(interval);
        setTimeout(() => {
          let j = role.length;
          const del = setInterval(() => {
            setTyped(role.slice(0, j - 1));
            j--;
            if (j === 0) {
              clearInterval(del);
              setRoleIdx(idx => (idx + 1) % roles.length);
            }
          }, 40);
        }, 2000);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [roleIdx]);

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100 }}>
      <div className="container" style={{ width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "60px",
          alignItems: "center",
        }}>
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(0,212,170,0.08)",
              border: "1px solid rgba(0,212,170,0.2)",
              borderRadius: 100, padding: "6px 16px",
              marginBottom: 28,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00D4AA", display: "inline-block", boxShadow: "0 0 8px #00D4AA" }} />
              <span style={{ fontSize: 12, color: "#00D4AA", fontFamily: "var(--mono)", letterSpacing: "0.06em" }}>Available for work</span>
            </div>

            {/* Name */}
            <h1 style={{ fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.0, marginBottom: 16 }}>
              <span style={{ fontSize: "clamp(36px, 5.5vw, 66px)", color: "#00D4AA", display: "block" }}>
                SIRIGINEEDI
              </span>
              <span style={{ fontSize: "clamp(36px, 5.5vw, 66px)", color: "#fff", display: "block" }}>
                UDAY SRI SAI
              </span>
            </h1>

            {/* Role with typewriter */}
            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 600,
              color: "var(--text2)",
              marginBottom: 20,
              minHeight: "1.5em",
            }}>
              Frontend Developer{" "}
              <span style={{ color: "#fff" }}>|</span>{" "}
              <span style={{ color: "#00D4AA" }}>{typed}<span style={{ animation: "blink 1s step-end infinite", opacity: 1 }}>|</span></span>
            </p>

            <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.75, maxWidth: 520, marginBottom: 36 }}>
              {personal.bio}
            </p>

            {/* CTA row */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#projects" className="btn-teal">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                View Projects
              </a>
              <a href="/Uday_Resume.pdf" download className="btn-outline">
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 32, marginTop: 48 }}>
              {[
                { val: "2+", label: "Projects Built" },
                { val: "React", label: "Primary Stack" },
                { val: "2025", label: "Graduating" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#00D4AA", letterSpacing: "-0.02em" }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: "0.05em" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            {/* Glow ring */}
            <div style={{
              position: "absolute", inset: -16,
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(0,212,170,0.15), rgba(59,130,246,0.1))",
              filter: "blur(20px)",
              animation: "glowPulse 3s ease-in-out infinite",
            }} />
            {/* Photo frame */}
            <div style={{
              position: "relative",
              width: 280, height: 320,
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(0,212,170,0.2)",
              background: "rgba(255,255,255,0.03)",
            }}>
              {!imgErr ? (
                <img
                  src={personal.photo}
                  alt="Uday Sri Sai"
                  onError={() => setImgErr(true)}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                /* Placeholder avatar when no photo */
                <div style={{
                  width: "100%", height: "100%",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  background: "linear-gradient(135deg, rgba(0,212,170,0.08), rgba(59,130,246,0.08))",
                  gap: 12,
                }}>
                  <div style={{
                    width: 90, height: 90, borderRadius: "50%",
                    background: "linear-gradient(135deg, #00D4AA, #3b82f6)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 36, fontWeight: 800, color: "#000",
                  }}>U</div>
                  <p style={{ fontSize: 13, color: "var(--text2)", textAlign: "center", padding: "0 20px" }}>
                    Add <strong>profile.jpg</strong><br/>to <code>/public/</code>
                  </p>
                </div>
              )}

              {/* Bottom overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                padding: "20px 16px 14px",
              }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>Uday Sri Sai</p>
                <p style={{ fontSize: 11, color: "#00D4AA", fontFamily: "var(--mono)" }}>Frontend Developer</p>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", top: -16, right: -20,
              background: "rgba(0,212,170,0.12)",
              border: "1px solid rgba(0,212,170,0.25)",
              backdropFilter: "blur(12px)",
              borderRadius: 10, padding: "8px 14px",
            }}>
              <p style={{ fontSize: 11, color: "#00D4AA", fontFamily: "var(--mono)", fontWeight: 600 }}>React.js</p>
              <p style={{ fontSize: 10, color: "var(--text2)" }}>Specialist</p>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ textAlign: "center", marginTop: 64, opacity: 0.4 }}>
          <p style={{ fontSize: 11, fontFamily: "var(--mono)", color: "var(--text2)", letterSpacing: "0.1em" }}>SCROLL DOWN</p>
          <div style={{
            width: 1, height: 40, background: "linear-gradient(to bottom, #00D4AA, transparent)",
            margin: "8px auto 0",
          }} />
        </div>
      </div>

      <style>{`
        @keyframes glowPulse {
          0%,100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          #home .container > div { grid-template-columns: 1fr !important; }
          #home .container > div > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
