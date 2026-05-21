import Image from "next/image"
import { BRANDING_BASES } from "@/lib/data"

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

      {/* Antes / Después — dos variantes */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        {[
          {
            variante: "LOMITOS EN AGUA",
            antesImg: "/images/lata-antigua.png",
            antesAlt: "Lata Otuna en Agua — diseño anterior",
            despuesImg: "/images/nuevas/aguanuevo.jpeg",
            despuesAlt: "Lata Otuna en Agua — nuevo diseño",
          },
          {
            variante: "LOMITOS EN ACEITE DE GIRASOL",
            antesImg: "/images/aceiteantiguo.png",
            antesAlt: "Lata Otuna en Aceite de Girasol — diseño anterior",
            despuesImg: "/images/nuevas/aceitenuevo.jpeg",
            despuesAlt: "Lata Otuna en Aceite de Girasol — nuevo diseño",
          },
        ].map((fila) => (
          <div key={fila.variante}>
            {/* Nombre de variante */}
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
              {fila.variante}
            </p>

            {/* Fila antes → después */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: "24px",
                alignItems: "center",
              }}
            >
              {/* Antes */}
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-anton, Impact, sans-serif)",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  ANTES
                </p>
                <div
                  style={{
                    height: "240px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={fila.antesImg}
                    alt={fila.antesAlt}
                    fill
                    style={{ objectFit: "contain", padding: "16px" }}
                  />
                </div>
              </div>

              {/* Flecha */}
              <div style={{ color: "#E8B84B", fontSize: "28px", lineHeight: 1 }}>→</div>

              {/* Después */}
              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontFamily: "var(--font-anton, Impact, sans-serif)",
                    fontSize: "11px",
                    color: "#E8B84B",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  DESPUÉS
                </p>
                <div
                  style={{
                    height: "240px",
                    backgroundColor: "rgba(26,74,154,0.25)",
                    border: "1px solid #E8B84B",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Image
                    src={fila.despuesImg}
                    alt={fila.despuesAlt}
                    fill
                    style={{ objectFit: "contain", padding: "16px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
