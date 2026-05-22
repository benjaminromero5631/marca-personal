"use client"

import { BRANDING_BASES } from "@/lib/data"
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider"

const VARIANTES = [
  {
    label: "LOMITOS EN AGUA",
    beforeSrc: "/images/lata-antigua-nobg.png",
    afterSrc: "/images/latasolanuevas-nobg.png",
    beforeAlt: "Lata Otuna en Agua — diseño anterior",
    afterAlt: "Lata Otuna en Agua — nuevo diseño",
  },
  {
    label: "LOMITOS EN ACEITE DE GIRASOL",
    beforeSrc: "/images/aceiteantiguo-nobg.png",
    afterSrc: "/images/lataaceitenueva-nobg.png",
    beforeAlt: "Lata Otuna en Aceite de Girasol — diseño anterior",
    afterAlt: "Lata Otuna en Aceite de Girasol — nuevo diseño",
  },
]

export default function Branding() {
  return (
    <section
      id="branding"
      style={{
        backgroundColor: "#0a2444",
        padding: "80px 48px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <p
          style={{
            fontFamily: "var(--font-anton, Impact, sans-serif)",
            fontSize: "13px",
            color: "#E8B84B",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          IDENTIDAD DE MARCA
        </p>
        <h2
          style={{
            fontFamily: "var(--font-anton, Impact, sans-serif)",
            fontSize: "clamp(36px, 5vw, 52px)",
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          CÓMO TRANSFORMAMOS EL BRANDING
          <br />
          DE OTUNA EN LA LATA.
        </h2>
      </div>

      {/* En qué nos basamos */}
      <p
        style={{
          fontFamily: "var(--font-anton, Impact, sans-serif)",
          fontSize: "11px",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        EN QUÉ NOS BASAMOS
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
          maxWidth: "1000px",
          margin: "0 auto 80px",
        }}
      >
        {BRANDING_BASES.map((paso) => (
          <div key={paso.numero}>
            <span
              style={{
                fontFamily: "var(--font-anton, Impact, sans-serif)",
                fontSize: "48px",
                color: "#E8B84B",
                opacity: 0.25,
                display: "block",
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              {paso.numero}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-anton, Impact, sans-serif)",
                fontSize: "20px",
                color: "#ffffff",
                marginBottom: "10px",
              }}
            >
              {paso.titulo}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-dm-sans, system-ui)",
                fontSize: "14px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {paso.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* Sliders antes/después */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        {VARIANTES.map((v) => (
          <div key={v.label}>
            <p
              style={{
                fontFamily: "var(--font-anton, Impact, sans-serif)",
                fontSize: "11px",
                color: "#E8B84B",
                letterSpacing: "4px",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              {v.label}
            </p>
            <BeforeAfterSlider
              beforeSrc={v.beforeSrc}
              afterSrc={v.afterSrc}
              beforeAlt={v.beforeAlt}
              afterAlt={v.afterAlt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
