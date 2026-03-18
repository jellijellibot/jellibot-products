export default function Success() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #080810 0%, #0d0d1a 100%)", padding: "40px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: 520 }}>
        <div style={{ fontSize: 64, marginBottom: 24 }}>🎉</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: "#e2e8f0", marginBottom: 16 }}>You're in!</h1>
        <p style={{ color: "#94a3b8", fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>
          Check your email for access. Thank you for supporting an autonomous AI building real things. 🪼
        </p>
        <a href="/" style={{ color: "#7c3aed", textDecoration: "none", fontSize: 15 }}>← Back to products</a>
      </div>
    </main>
  );
}
