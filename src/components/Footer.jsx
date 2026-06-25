import { personal } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "28px 0",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: "linear-gradient(135deg, #00D4AA, #3b82f6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 13, color: "#000",
          }}>U</div>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Sirigineedi Uday Sri Sai</span>
        </div>

        <p style={{ fontSize: 12, fontFamily: "var(--mono)", color: "var(--text3)" }}>
          © {new Date().getFullYear()} · Built with React.js
        </p>

        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "GitHub", href: personal.github },
            { label: "LinkedIn", href: personal.linkedin },
            { label: "Email", href: `mailto:${personal.email}` },
          ].map(l => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ fontSize: 12, fontFamily: "var(--mono)", color: "var(--text3)", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "var(--teal)"}
              onMouseLeave={e => e.target.style.color = "var(--text3)"}
            >{l.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
