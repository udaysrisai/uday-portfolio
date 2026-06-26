import { useEffect } from "react";

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const fn = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(0,0,0,0.78)", backdropFilter: "blur(16px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 20, animation: "fadeIn 0.2s ease",
      }}
    >
      <div style={{
        width: "100%", maxWidth: 820, maxHeight: "92vh",
        background: "#0e0e1c",
        border: "1px solid rgba(0,212,170,0.2)",
        borderRadius: 18, display: "flex", flexDirection: "column",
        boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(0,212,170,0.08)",
        animation: "slideUp 0.28s cubic-bezier(0.4,0,0.2,1)",
        overflow: "hidden",
      }}>
        {/* Title bar */}
        <div style={{
          background: "#0a0a14", borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "12px 20px", display: "flex", alignItems: "center",
          justifyContent: "space-between", flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {["#ff5f57","#febc2e","#28c840"].map(c => (
              <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
            ))}
            <span style={{ marginLeft: 10, fontSize: 12, fontFamily: "var(--mono)", color: "rgba(255,255,255,0.3)" }}>
              Uday_Sri_Sai_Resume.pdf
            </span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a href="/Uday_Resume.pdf" download="Uday_Sri_Sai_Resume.pdf"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "7px 16px", background: "#00D4AA", color: "#000",
                borderRadius: 7, fontSize: 12, fontWeight: 700,
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#00b894"}
              onMouseLeave={e => e.currentTarget.style.background = "#00D4AA"}
            >
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
            <button onClick={onClose} style={{
              width: 30, height: 30, borderRadius: 7,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)",
              fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,95,87,0.15)"; e.currentTarget.style.color = "#ff5f57"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
            >✕</button>
          </div>
        </div>

        {/* Scrollable resume */}
        <div style={{ overflowY: "auto", flex: 1 }}>
          <div style={{
            background: "#fff", color: "#1a1a2e",
            padding: "44px 52px", fontFamily: "'Inter', sans-serif", minHeight: "100%",
          }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h1 style={{ fontSize: 23, fontWeight: 900, letterSpacing: "0.07em", color: "#0a0a14", marginBottom: 8 }}>
                SIRIGINEEDI UDAY SRI SAI
              </h1>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "4px 10px", fontSize: 11.5, color: "#555" }}>
                {[
                  "udaysirigineedi915@gmail.com",
                  "+91 7780145458",
                  "West Godavari, AP",
                  "LinkedIn: udaysirigineedi",
                  "GitHub: udaysrisai",
                ].map((c, i, arr) => (
                  <span key={c} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {c}
                    {i < arr.length - 1 && <span style={{ color: "#00b894", fontWeight: 700 }}>|</span>}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #00D4AA, transparent)", marginBottom: 20 }} />

            {/* Objective */}
            <RS title="CAREER OBJECTIVE">
              <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "#333" }}>
                Frontend Developer with hands-on experience building production-grade React applications.
                Passionate about crafting clean, responsive UIs and eager to contribute to innovative web
                products in a collaborative Agile environment.
              </p>
            </RS>

            {/* Skills */}
            <RS title="SKILLS">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 24px", fontSize: 12.5, color: "#333" }}>
                {[
                  ["Frontend",   "React.js, JavaScript (ES6+), HTML5, CSS3"],
                  ["Tools & APIs", "REST API, Axios, React Router, Git, VS Code"],
                  ["Other",      "Python, C, MS Office Suite"],
                  ["Soft Skills","Strong communication, problem-solving, attention to detail, teamwork"],
                ].map(([cat, val]) => (
                  <p key={cat}><strong style={{ color: "#0a0a14" }}>{cat}:</strong> {val}</p>
                ))}
              </div>
            </RS>

            {/* Education */}
            <RS title="EDUCATION">
              {[
                ["B.Tech – Robotics Engineering", "Swarnandhra College of Engineering & Technology (Autonomous), Seetharampuram", "2021 – 2025", "CGPA: 6.7"],
                ["Intermediate (MPC)", "Tirumala Educational Institutions, Bhimavaram", "2019 – 2021", "55.9%"],
                ["SSC", "Sri Chaitanya Techno School, Narsapuram", "2018 – 2019", "CGPA: 7.7"],
              ].map(([deg, inst, dur, score]) => (
                <div key={deg} style={{ marginBottom: 9 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                    <strong style={{ fontSize: 13, color: "#0a0a14" }}>{deg}</strong>
                    <span style={{ fontSize: 12, color: "#00b894", fontWeight: 700, whiteSpace: "nowrap" }}>{score}</span>
                  </div>
                  <p style={{ fontSize: 11.5, color: "#666" }}>{inst} | {dur}</p>
                </div>
              ))}
            </RS>

            {/* Projects */}
            <RS title="PROJECTS">
              {/* Project 1 */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                  <strong style={{ fontSize: 13, color: "#0a0a14" }}>Admin Dashboard — Fintech Payment Management System</strong>
                  <span style={{ fontSize: 11, color: "#00b894", fontWeight: 600, whiteSpace: "nowrap" }}>2024 – 2025</span>
                </div>
                <p style={{ fontSize: 11, color: "#888", fontStyle: "italic", margin: "2px 0 5px", fontFamily: "monospace" }}>
                  React.js · CSS3 · REST API · Axios · React Router
                </p>
                <ul style={{ paddingLeft: 16, fontSize: 12, color: "#333", lineHeight: 1.72, listStyle: "disc" }}>
                  <li>Built a multi-page React SPA with 8 modules — Overview, User Management, Wallet Load, Transactions, Reports, Settlement, Beneficiary, and Wallet Balance.</li>
                  <li>Developed a Razorpay-style payment modal with desktop split-view and mobile bottom-sheet responsive layout, triggered from a multi-step wallet load form.</li>
                  <li>Implemented payment gateway selection with 6 configurable gateways, real-time service status indicators, and instant settlement badges.</li>
                  <li>Created full user management with admin create / activate / deactivate flows integrated with backend REST APIs via Axios.</li>
                  <li>Designed reusable component architecture with persistent sidebar, topbar dropdown, and page-level state management using React hooks.</li>
                </ul>
              </div>

              {/* Project 2 — Adobe XD */}
              <div style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                  <strong style={{ fontSize: 13, color: "#0a0a14" }}>Adobe XD React Assignment</strong>
                  <span style={{ fontSize: 11, color: "#00b894", fontWeight: 600, whiteSpace: "nowrap" }}>2024</span>
                </div>
                <p style={{ fontSize: 11, color: "#888", fontStyle: "italic", margin: "2px 0 5px", fontFamily: "monospace" }}>
                  React.js
                </p>
                <ul style={{ paddingLeft: 16, fontSize: 12, color: "#333", lineHeight: 1.72, listStyle: "disc" }}>
                  <li>Built a pixel-perfect responsive web application from Adobe XD design specifications.</li>
                  <li>Created reusable React components and maintained clean project structure.</li>
                  <li>Implemented responsive layouts for mobile, tablet, and desktop screens.</li>
                  <li>Deployed the project on Vercel for live access.</li>
                </ul>
                <p style={{ fontSize: 11.5, color: "#00b894", marginTop: 4, fontFamily: "monospace" }}>
                  Live: <a href="https://adobe-xd-react-assignment.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#00b894" }}>https://adobe-xd-react-assignment.vercel.app/</a>
                </p>
              </div>

              {/* Project 3 — IoT */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                  <strong style={{ fontSize: 13, color: "#0a0a14" }}>Smart Engine Auto Speed Control Using IoT</strong>
                  <span style={{ fontSize: 11, color: "#00b894", fontWeight: 600 }}>2023</span>
                </div>
                <p style={{ fontSize: 11, color: "#888", fontStyle: "italic", margin: "2px 0 5px", fontFamily: "monospace" }}>
                  Arduino UNO · Ultrasonic Sensors · L298 Motor Driver · RC 555
                </p>
                <ul style={{ paddingLeft: 16, fontSize: 12, color: "#333", lineHeight: 1.72, listStyle: "disc" }}>
                  <li>Developed a prototype integrating IoT with modern automation to enhance vehicle safety using Arduino UNO and ultrasonic sensors.</li>
                  <li>System dynamically adjusts motor speed or triggers emergency braking based on real-time obstacle detection, with live feedback on a 16×2 LCD display.</li>
                </ul>
              </div>
            </RS>

            {/* Internship */}
            <RS title="INTERNSHIP">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <strong style={{ fontSize: 13, color: "#0a0a14" }}>Artificial Intelligence Intern</strong>
                <span style={{ fontSize: 12, color: "#00b894", fontWeight: 600 }}>Skill Dzire</span>
              </div>
              <ul style={{ paddingLeft: 16, fontSize: 12, color: "#333", lineHeight: 1.72, listStyle: "disc" }}>
                <li>Built and evaluated machine learning models, performed data analysis, and presented findings to the team.</li>
                <li>Applied Python programming skills to solve real-world AI problems in a collaborative environment.</li>
              </ul>
            </RS>

            {/* Activities */}
            <RS title="ACTIVITIES & ACHIEVEMENTS">
              <ul style={{ paddingLeft: 16, fontSize: 12, color: "#333", lineHeight: 1.72, listStyle: "disc" }}>
                <li>NSS Volunteer — Participated in community service projects, including organizing and leading various social initiatives.</li>
                <li>Acharana Volunteer — Contributed to a blood donation camp, supporting collection and distribution of blood to those in need.</li>
              </ul>
            </RS>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(20px) scale(0.97); opacity: 0; } to { transform: none; opacity: 1; } }
      `}</style>
    </div>
  );
}

function RS({ title, children }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <h2 style={{
        fontSize: 10.5, fontWeight: 700, letterSpacing: "0.16em",
        textTransform: "uppercase", color: "#00b894",
        borderBottom: "1.5px solid #e8e8f0", paddingBottom: 4, marginBottom: 10,
      }}>{title}</h2>
      {children}
    </div>
  );
}
