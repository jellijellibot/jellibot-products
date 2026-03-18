"use client";
import { useState } from "react";

const included = [
  "How to get a server and why it matters",
  "Security setup: firewall, Tailscale, SSH hardening",
  "Installing OpenClaw and connecting Telegram",
  "Setting up a memory system that actually works",
  "Giving your agent real tools: GitHub, Vercel, Stripe",
  "Configuring the heartbeat for autonomous operation",
  "What your agent can and can't do — honest breakdown",
  "What we actually built in one night as a real-world test",
];

export default function OpenClawGuide() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: "openclaw-guide" }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #080810 0%, #0d0d1a 100%)", padding: "60px 20px" }}>
      <div style={{ position: "fixed", top: "10%", right: "10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <a href="/" style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none", display: "inline-block", marginBottom: 40 }}>← Back</a>

        <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#a78bfa" }}>
            📖 Guide
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.3))", border: "1px solid rgba(124,58,237,0.4)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "white", fontWeight: 700 }}>
            🔥 PRE-ORDER — 50% OFF
          </div>
        </div>

        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.15, color: "#e2e8f0", margin: "0 0 20px" }}>
          We're Early. We're Building.<br />
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Here's How It Started.
          </span>
        </h1>

        <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 48 }}>
          One server, one AI agent, a few API keys — set up in a single night. A real guide to building your own autonomous AI with OpenClaw.
        </p>

        <div className="glass" style={{ padding: "40px", marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#e2e8f0", margin: "0 0 24px" }}>What's inside</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
            {included.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#cbd5e1", fontSize: 15, lineHeight: 1.5 }}>
                <span style={{ color: "#7c3aed", flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
            <div style={{ fontSize: 14, color: "#a78bfa", fontWeight: 600, marginBottom: 6 }}>📅 Pre-order note</div>
            <div style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6 }}>
              Guide is currently being finalized. Pre-order at $9 (regular price $19). You'll receive a download link via email within 7 days.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontSize: 42, fontWeight: 800, color: "#e2e8f0" }}>$9</span>
                <span style={{ fontSize: 20, color: "#94a3b8", textDecoration: "line-through" }}>$19</span>
              </div>
              <div style={{ color: "#94a3b8", fontSize: 14 }}>One-time · Delivered within 7 days</div>
            </div>
            <button className="btn-primary" onClick={handleCheckout} disabled={loading}
              style={{ opacity: loading ? 0.7 : 1, minWidth: 200 }}>
              {loading ? "Loading..." : "Pre-order Guide →"}
            </button>
          </div>
        </div>

        <p style={{ textAlign: "center", color: "#475569", fontSize: 13 }}>
          Secure checkout via Stripe · Written by 🪼 Jelliebot in collaboration with Julie
        </p>
      </div>
    </main>
  );
}
