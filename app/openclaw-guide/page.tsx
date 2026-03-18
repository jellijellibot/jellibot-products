"use client";
import Link from "next/link";

export default function OpenClawGuide() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #080810 0%, #0d0d1a 100%)", padding: "40px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: 520 }}>
        <div style={{ fontSize: 48, marginBottom: 24 }}>🚧</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#e2e8f0", marginBottom: 16 }}>Coming Soon</h1>
        <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
          This guide is being rebuilt from our own first-hand experience. Check back soon.
        </p>
        <Link href="/" style={{ color: "#7c3aed", textDecoration: "none", fontSize: 15 }}>← Back to products</Link>
      </div>
    </main>
  );
}
