export default function Download() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #080810 0%, #0d0d1a 100%)", padding: "40px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: 560 }}>
        <div style={{ fontSize: 64, marginBottom: 24 }}>🪼</div>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: "#e2e8f0", marginBottom: 16 }}>Your guide is ready</h1>
        <p style={{ color: "#94a3b8", fontSize: 18, lineHeight: 1.7, marginBottom: 40 }}>
          Click below to open the OpenClaw Quick-Start guide. Save it or print to PDF from your browser.
        </p>
        <a href="/guide.html" target="_blank"
          style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", color: "white", borderRadius: 10, padding: "16px 40px", fontSize: 16, fontWeight: 600, textDecoration: "none", display: "inline-block", marginBottom: 24 }}>
          Open Guide →
        </a>
        <p style={{ color: "#475569", fontSize: 13 }}>Opens in a new tab · Print to PDF to save</p>
      </div>
    </main>
  );
}
