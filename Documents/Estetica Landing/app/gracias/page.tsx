import { config } from "@/lib/config";

export default function Gracias() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        textAlign: "center",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: 400, display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <div
          style={{
            width: 70, height: 70,
            border: "2px solid var(--celeste)", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--celeste)",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)", fontWeight: 500,
            color: "var(--white)", fontSize: "clamp(34px, 8vw, 48px)", lineHeight: 1.1,
          }}
        >
          Recibimos tu solicitud
        </h1>
        <p style={{ color: "var(--txt-2)", fontSize: 16, lineHeight: 1.65, fontWeight: 300 }}>
          Una de nuestras especialistas te contactará muy pronto para coordinar tu evaluación gratuita.
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            color: "var(--dorado)", fontSize: 18,
          }}
        >
          Tu piel merece resultados reales.
        </p>
        <a
          href="/"
          style={{
            marginTop: 8,
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500,
            letterSpacing: "0.14em", textTransform: "uppercase",
            background: "transparent", cursor: "pointer",
            padding: "14px 28px", border: "1px solid rgba(255,255,255,0.2)",
            color: "var(--txt-2)", borderRadius: 0,
            textDecoration: "none",
            transition: "border-color .25s, color .25s",
          }}
        >
          ← Volver al inicio
        </a>
        <p style={{ color: "var(--txt-3)", fontSize: 13 }}>{config.clinicName} · {config.clinicCity}</p>
      </div>
    </main>
  );
}
