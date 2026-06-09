"use client";

import VSLPlayer from "@/components/VSLPlayer";
import { config } from "@/lib/config";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section
      style={{
        padding: "88px 0 104px",
        textAlign: "center",
        background:
          "radial-gradient(120% 80% at 50% -10%, rgba(126,200,227,0.08) 0%, rgba(126,200,227,0) 55%), var(--bg)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid var(--celeste)", color: "var(--celeste)",
              fontSize: 12, fontWeight: 500, letterSpacing: "0.12em",
              textTransform: "uppercase", padding: "9px 18px",
              borderRadius: 100, marginBottom: 34,
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--celeste)", display: "inline-block" }} />
            {config.heroTag}
          </span>

          <h1
            style={{
              fontFamily: "var(--font-serif)", fontWeight: 500,
              color: "var(--white)", fontSize: "clamp(40px, 9vw, 68px)",
              lineHeight: 1.04, letterSpacing: "-0.01em", marginBottom: 22,
            }}
          >
            Recupera la firmeza y juventud de tu piel con{" "}
            <span style={{ color: "var(--celeste)", fontStyle: "italic", fontWeight: 600 }}>
              {config.treatment}
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)", fontStyle: "italic",
              color: "var(--dorado)", fontSize: "clamp(20px, 4.6vw, 26px)",
              fontWeight: 500, letterSpacing: "0.01em", marginBottom: 26,
            }}
          >
            {config.treatmentTagline}
          </p>

          <p
            style={{
              color: "var(--white)", fontSize: 17, lineHeight: 1.65,
              maxWidth: 540, margin: "0 auto 48px", fontWeight: 300,
            }}
          >
            {config.treatmentDescription}
          </p>

          <VSLPlayer videoUrl={config.vslVideoUrl} subtitle={config.vslSubtitle} />

          <button
            onClick={onOpenModal}
            className="cta-btn-white"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
              letterSpacing: "0.16em", textTransform: "uppercase",
              background: "transparent", cursor: "pointer",
              padding: "18px 34px", border: "2px solid var(--white)",
              color: "var(--white)", borderRadius: 0,
              transition: "background-color .35s ease, color .35s ease",
            }}
          >
            {config.ctaText}
          </button>
        </div>
      </div>
      <style>{`
        .cta-btn-white:hover { background: var(--white) !important; color: var(--bg) !important; }
      `}</style>
    </section>
  );
}
