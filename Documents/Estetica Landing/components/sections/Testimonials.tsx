import { config } from "@/lib/config";

export default function Testimonials() {
  return (
    <section style={{ background: "var(--bg)", padding: "96px 0" }}>
      <div style={{ width: "100%", maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 58px" }}>
          <h2
            style={{
              fontFamily: "var(--font-serif)", fontWeight: 500, color: "var(--white)",
              fontSize: "clamp(34px, 6.5vw, 50px)", lineHeight: 1.08, letterSpacing: "-0.01em",
            }}
          >
            Lo que lograron nuestras pacientes
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {config.testimonials.map((t, i) => (
            <article
              key={i}
              style={{
                border: "1px solid var(--hairline)",
                background: "var(--bg-alt)",
                display: "flex", flexDirection: "column",
              }}
            >
              <div
                style={{
                  aspectRatio: "4 / 3",
                  background: "linear-gradient(160deg, rgba(126,200,227,0.05), rgba(0,0,0,0) 60%), #04080F",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.14)", position: "relative",
                  borderBottom: "1px solid var(--hairline)",
                }}
              >
                <span
                  style={{
                    position: "absolute", top: 16, left: 16,
                    fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
                    color: "var(--celeste)", border: "1px solid var(--celeste)",
                    padding: "6px 12px", borderRadius: 100,
                    background: "rgba(8,14,26,0.6)", fontWeight: 500,
                  }}
                >
                  {config.treatment}
                </span>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="8.5" r="4" />
                  <path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
                </svg>
              </div>

              <div style={{ padding: "30px 28px 28px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-serif)", color: "var(--white)",
                    fontSize: 46, fontWeight: 600, lineHeight: 1,
                    letterSpacing: "-0.02em", marginBottom: 8,
                  }}
                >
                  {t.result}
                </div>
                <div style={{ color: "var(--txt-3)", fontSize: 13, letterSpacing: "0.04em", marginBottom: 22 }}>
                  {t.detail}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-serif)", fontStyle: "italic",
                    color: "var(--txt-2)", fontSize: 18, lineHeight: 1.45, marginBottom: 22,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ color: "var(--dorado)", fontSize: 13, letterSpacing: "0.06em", fontWeight: 500 }}>
                  {t.name} — {t.age} años
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
