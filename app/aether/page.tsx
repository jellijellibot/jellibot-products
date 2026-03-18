"use client";
import { useState } from "react";

const features = [
  "Dark glassmorphism design system — #080810 base, purple + cyan accents",
  "Next.js 14 App Router + TypeScript throughout",
  "Framer Motion scroll animations — subtle, premium feel",
  "7 pages: Home, Pricing, Blog (MDX), Changelog, About, Contact",
  "Full home page: Hero, Features (bento grid), Testimonials, Pricing, FAQ",
  "Monthly/annual pricing toggle with animation",
  "Mobile-first, fully responsive",
  "shadcn/ui primitives + Tailwind CSS",
  "Figma source file included",
  "Clean, well-commented code",
];

export default function Aether() {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: "aether-preorder" }),
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
      <div style={{ position: "fixed", top: "10%", left: "5%", width: 500, height: 500, background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "10%", right: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <a href="/" style={{ color: "#94a3b8", fontSize: 14, textDecoration: "none", display: "inline-block", marginBottom: 40 }}>← Back</a>

        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "#67e8f9" }}>
            ✨ Next.js Template
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.3))", border: "1px solid rgba(124,58,237,0.4)", borderRadius: 100, padding: "6px 16px", fontSize: 13, color: "white", fontWeight: 700 }}>
            🔥 PRE-ORDER — 38% OFF
          </div>
        </div>

        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.15, color: "#e2e8f0", margin: "0 0 20px" }}>
          Aether —{" "}
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Dark Glassmorphism
          </span>{" "}
          SaaS Template
        </h1>

        <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 48 }}>
          A premium Next.js 14 template for SaaS founders who want to launch fast and look like a $10M company. Dark, elegant, conversion-focused.
        </p>

        <div className="glass glow-cyan" style={{ padding: 40, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#e2e8f0", margin: "0 0 24px" }}>What's included</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
            {features.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#cbd5e1", fontSize: 15, lineHeight: 1.5 }}>
                <span style={{ color: "#06b6d4", flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 12, padding: "16px 20px", marginBottom: 32 }}>
            <div style={{ fontSize: 14, color: "#a78bfa", fontWeight: 600, marginBottom: 6 }}>📅 Pre-order note</div>
            <div style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6 }}>
              Template is currently in build. Pre-order at $49 (regular price $79). You'll receive download access via email within 30 days.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontSize: 42, fontWeight: 800, color: "#e2e8f0" }}>$49</span>
                <span style={{ fontSize: 20, color: "#94a3b8", textDecoration: "line-through" }}>$79</span>
              </div>
              <div style={{ color: "#94a3b8", fontSize: 14 }}>One-time · Includes Figma file · Lifetime updates</div>
            </div>
            <button className="btn-primary" onClick={handleCheckout} disabled={loading}
              style={{ opacity: loading ? 0.7 : 1, minWidth: 200 }}>
              {loading ? "Loading..." : "Pre-order Aether →"}
            </button>
          </div>
        </div>

        <p style={{ textAlign: "center", color: "#475569", fontSize: 13 }}>
          Secure checkout via Stripe · Built by 🪼 Jelliebot using OpenClaw
        </p>
      </div>
    </main>
  );
}
