import { useState } from "react";
import { personal, activities } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens default email client with pre-filled content
    window.location.href = `mailto:${personal.email}?subject=Portfolio Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const socials = [
    { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: "✉", color: "#00D4AA" },
    { label: "Phone", value: personal.phone, href: `tel:${personal.phone}`, icon: "📱", color: "#3b82f6" },
    { label: "GitHub", value: "github.com/udaysrisai", href: personal.github, icon: "⌨", color: "#a78bfa" },
    { label: "LinkedIn", value: "linkedin.com/in/udaysirigineedi", href: personal.linkedin, icon: "🔗", color: "#0ea5e9" },
    { label: "Location", value: personal.location, href: null, icon: "📍", color: "#f472b6" },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--teal)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Let's Talk</p>
          <h2 className="sec-title" style={{ marginBottom: 0 }}>Get In <span>Touch</span></h2>
          <p style={{ fontSize: 15, color: "var(--text2)", marginTop: 12 }}>Available for full-time frontend roles. Let's build something great together.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>

          {/* Left: Info */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href || undefined}
                  className="glass-card"
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "14px 18px",
                    cursor: s.href ? "pointer" : "default",
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  target={s.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <div style={{
                    width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                    background: `rgba(${hexToRgb(s.color)}, 0.1)`,
                    border: `1px solid rgba(${hexToRgb(s.color)}, 0.2)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16,
                  }}>{s.icon}</div>
                  <div>
                    <p style={{ fontSize: 10, fontFamily: "var(--mono)", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{s.label}</p>
                    <p style={{ fontSize: 13, color: "var(--text)" }}>{s.value}</p>
                  </div>
                  {s.href && <div style={{ marginLeft: "auto", fontSize: 16, color: "var(--text3)" }}>↗</div>}
                </a>
              ))}
            </div>

            {/* Activities */}
            <div className="glass-card" style={{ padding: "20px 22px" }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>Activities</p>
              {activities.map((a, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: i < activities.length - 1 ? 10 : 0 }}>
                  <span style={{ color: "var(--teal)", marginTop: 2, flexShrink: 0 }}>●</span>
                  <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="glass-card" style={{ padding: "32px 28px" }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Send a Message</h3>
            <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 28 }}>I'll get back to you within 24 hours.</p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { key: "name", label: "Your Name", type: "text", placeholder: "Rahul Kumar" },
                { key: "email", label: "Email Address", type: "email", placeholder: "rahul@example.com" },
              ].map(field => (
                <div key={field.key}>
                  <label style={{ fontSize: 12, fontFamily: "var(--mono)", color: "var(--text2)", letterSpacing: "0.05em", display: "block", marginBottom: 8 }}>{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key]}
                    onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 14px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 10, color: "var(--text)", fontSize: 14,
                      outline: "none", fontFamily: "var(--ff)",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(0,212,170,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </div>
              ))}

              <div>
                <label style={{ fontSize: 12, fontFamily: "var(--mono)", color: "var(--text2)", letterSpacing: "0.05em", display: "block", marginBottom: 8 }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="I'd like to discuss a frontend role..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%", padding: "12px 14px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10, color: "var(--text)", fontSize: 14,
                    outline: "none", fontFamily: "var(--ff)", resize: "vertical",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(0,212,170,0.4)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>

              <button
                className="btn-teal"
                onClick={handleSubmit}
                style={{ justifyContent: "center", padding: "14px" }}
              >
                {sent ? "✓ Opening Email..." : "Send Message →"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function hexToRgb(hex) {
  if (!hex || hex.length < 7) return "0,212,170";
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
