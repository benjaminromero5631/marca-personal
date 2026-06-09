"use client";

interface VSLPlayerProps {
  videoUrl: string;
  subtitle: string;
}

export default function VSLPlayer({ videoUrl, subtitle }: VSLPlayerProps) {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      <div
        className="vsl-box"
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          border: "2px solid var(--celeste)",
          background:
            "radial-gradient(80% 120% at 50% 50%, rgba(126,200,227,0.07), rgba(6,12,24,0) 70%), #04080F",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
          animation: "vslGlow 3.4s ease-in-out infinite",
          transition: "transform .4s ease",
        }}
      >
        {videoUrl ? (
          <iframe
            src={videoUrl}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: "50%",
                border: "2px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M6 4.5v15l13-7.5-13-7.5z" fill="#fff" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--txt-3)",
                fontWeight: 500,
              }}
            >
              Video próximamente
            </span>
          </>
        )}
      </div>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          color: "var(--dorado)",
          fontSize: 19,
          marginTop: 30,
          marginBottom: 44,
          textAlign: "center",
        }}
      >
        {subtitle}
      </p>
      <style>{`
        .vsl-box:hover { transform: scale(1.012); }
        @media (prefers-reduced-motion: reduce) {
          .vsl-box { animation: none !important; box-shadow: 0 0 48px -4px rgba(126,200,227,0.4); }
        }
      `}</style>
    </div>
  );
}
