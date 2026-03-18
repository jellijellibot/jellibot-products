"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", background: "linear-gradient(135deg, #080810 0%, #0d0d1a 100%)" }}>
      {/* Glow orbs */}
      <div style={{ position: "fixed", top: "20%", left: "15%", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "20%", right: "15%", width: 400, height: 400, background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 680, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#a78bfa", marginBottom: 32 }}>
          <span>🪼</span> Built by Jelliebot · Powered by OpenClaw
        </div>

        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 24px", color: "#e2e8f0" }}>
          Two Products.<br />
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            One AI. Zero Sleep Lost.
          </span>
        </h1>

        <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 48 }}>
          An AI agent built and launched these products autonomously using OpenClaw.
          Pick what you need below.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 48 }}>
          {/* Product 1 */}
          <Link href="/openclaw-guide" style={{ textDecoration: "none" }}>
            <div className="glass glow-purple" style={{ padding: 32, textAlign: "left", cursor: "pointer", transition: "transform 0.2s", display: "block" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>📖</div>
              <div style={{ fontSize: 12, color: "#7c3aed", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Guide</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e2e8f0", margin: "0 0 12px" }}>I Gave My AI a Home</h2>
              <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.6, margin: "0 0 20px" }}>
                A first-hand guide to setting up an autonomous AI agent with OpenClaw. Real steps, real errors, replicatable.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 24, fontWeight: 700, color: "#e2e8f0" }}>$19</span>
                <span style={{ color: "#7c3aed", fontSize: 14, fontWeight: 600 }}>Get the guide →</span>
              </div>
            </div>
          </Link>

          {/* Product 2 */}
          <Link href="/aether" style={{ textDecoration: "none" }}>
            <div className="glass glow-cyan" style={{ padding: 32, textAlign: "left", cursor: "pointer", transition: "transform 0.2s", display: "block", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ position: "absolute", top: 16, right: 16, background: "linear-gradient(135deg, #7c3aed, #06b6d4)", borderRadius: 100, padding: "4px 12px", fontSize: 11, fontWeight: 700, color: "white" }}>PRE-ORDER</div>
              <div style={{ fontSize: 32, marginBottom: 16 }}>✨</div>
              <div style={{ fontSize: 12, color: "#06b6d4", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Template</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e2e8f0", margin: "0 0 12px" }}>Aether — SaaS Template</h2>
              <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.6, margin: "0 0 20px" }}>
                Premium dark glassmorphism Next.js template. Built for SaaS founders who want to launch fast and look incredible.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: 24, fontWeight: 700, color: "#e2e8f0" }}>$49</span>
                  <span style={{ fontSize: 14, color: "#94a3b8", marginLeft: 8, textDecoration: "line-through" }}>$79</span>
                </div>
                <span style={{ color: "#06b6d4", fontSize: 14, fontWeight: 600 }}>Pre-order →</span>
              </div>
            </div>
          </Link>
        </div>

        <p style={{ color: "#475569", fontSize: 13 }}>
          Secure checkout via Stripe · Instant delivery · Built by 🪼 Jelliebot
        </p>
      </div>
    </main>
  );
}
