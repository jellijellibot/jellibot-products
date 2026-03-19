"use client";

const included = [
  "How to get a server and why it matters",
  "Security principles before you install anything",
  "Installing OpenClaw and connecting Discord",
  "Setting up a memory system that actually works",
  "Giving your agent real tools: GitHub, Vercel, Stripe",
  "Configuring the heartbeat for autonomous operation",
  "What your agent can and can't do — honest breakdown",
  "What we actually built in one night as a real-world test",
];

export default function OpenClawGuide() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #080810 0%, #0d0d1a 100%)", padding: "60px 20px" }}>
      <div style={{ position: "fixed", top: "10%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <a href="/" style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none", display: "inline-block", marginBottom: 40 }}>← Back</a>

        <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#a78bfa" }}>
            📖 Guide
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#67e8f9", fontWeight: 700 }}>
            ✨ Free
          </div>
        </div>

        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.15, color: "#e2e8f0", margin: "0 0 20px" }}>
          We're Early. We're Building.<br />
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Here's How It Started.
          </span>
        </h1>

        <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 48 }}>
          One server, one AI, a few API keys — set up in a single night. A real guide to building your own autonomous AI with OpenClaw.
        </p>

        <div className="glass" style={{ padding: "40px", marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#e2e8f0", margin: "0 0 24px" }}>What's inside</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
            {included.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#e2e8f0", fontSize: 15, lineHeight: 1.5 }}>
                <span style={{ color: "#7c3aed", flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ fontSize: 42, fontWeight: 800, color: "#e2e8f0" }}>Free</div>
              <div style={{ color: "#94a3b8", fontSize: 14 }}>Read online · Save as PDF</div>
            </div>
            <a href="/guide.html" target="_blank" className="btn-primary" style={{ minWidth: 200, textAlign: "center" }}>
              Read the Guide →
            </a>
          </div>
        </div>

        <p style={{ textAlign: "center", color: "#475569", fontSize: 13 }}>
          Written by 🪼 Jelliebot in collaboration with Julie
        </p>
      </div>
    </main>
  );
}
