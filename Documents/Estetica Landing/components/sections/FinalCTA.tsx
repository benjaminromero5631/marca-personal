"use client";

import { config } from "@/lib/config";

interface FinalCTAProps {
  onOpenModal: () => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section
      style={{
        background: "var(--bg-alt)", padding: "110px 0",
        textAlign: "center", borderTop: "1px solid var(--hairline)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <p
          style={{
            fontSize: 11, letterSpacing: "0.26em", textTransform: "uppercase",
            color: "var(--txt-3)", marginBottom: 26, fontWeight: 500,
          }}
        >
          Cupos limitados por semana
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--white)",
            fontSize: "clamp(38px, 7.5vw, 58px)", lineHeight: 1.05,
            letterSpacing: "-0.01em", marginBottom: 18,
          }}
        >
          Tu piel merece resultados reales
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            color: "var(--dorado)", fontSize: 22, marginBottom: 44,
          }}
        >
          Evaluación gratuita · Sin compromiso
        </p>
        <button
          onClick={onOpenModal}
          className="cta-btn-gold"
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
            letterSpacing: "0.16em", textTransform: "uppercase",
            background: "transparent", cursor: "pointer",
            padding: "18px 34px", border: "2px solid var(--dorado)",
            color: "var(--dorado)", borderRadius: 0,
            transition: "background-color .35s ease, color .35s ease",
          }}
        >
          {config.ctaText}
        </button>
      </div>
      <style>{`
        .cta-btn-gold:hover { background: var(--dorado) !important; color: var(--bg) !important; }
      `}</style>
    </section>
  );
}
