import Image from "next/image"
import { HERO_CONTENT } from "@/lib/data"

const HEADLINE_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-anton, Impact, sans-serif)",
  fontSize: "clamp(72px, 11vw, 128px)",
  lineHeight: 0.9,
  color: "#1a4a9a",
  textTransform: "uppercase",
  display: "block",
}

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        backgroundColor: "#EAF3FB",
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 48px 80px",
        position: "relative",
      }}
    >
      {/* Headline block */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", textAlign: "center" }}>
        {/* Línea 1 */}
        <span style={HEADLINE_STYLE}>OTUNA</span>

        {/* Línea 2: PURO + imagen + ATÚN */}
        <span
          style={{
            ...HEADLINE_STYLE,
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          PURO
          <Image
            src="/images/atunagua.jpeg"
            alt="Lata Otuna"
            width={140}
            height={140}
            style={{
              transform: "rotate(-8deg)",
              filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.2))",
              flexShrink: 0,
              objectFit: "contain",
              mixBlendMode: "multiply",
            }}
          />
          ATÚN
        </span>

        {/* Línea 3 */}
        <span style={HEADLINE_STYLE}>DESDE 1980</span>
      </div>

      {/* Subtítulo */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans, system-ui)",
          fontSize: "13px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "rgba(26,74,154,0.7)",
          marginTop: "32px",
          textAlign: "center",
          width: "100%",
        }}
      >
        {HERO_CONTENT.subheadline}
      </p>

      {/* Botón scroll — esquina inferior derecha */}
      <a
        href="#productos"
        aria-label="Scroll hacia abajo"
        style={{
          position: "absolute",
          bottom: "32px",
          right: "48px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          border: "2px solid #1a4a9a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1a4a9a",
          textDecoration: "none",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
