"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ETIQUETAS = [
  {
    label: "LOMITOS EN AGUA",
    src: "/images/nuevas/aguanuevo.jpeg",
    alt: "Etiqueta para producción — Lomitos en Agua",
  },
  {
    label: "LOMITOS EN ACEITE DE GIRASOL",
    src: "/images/nuevas/aceitenuevo.jpeg",
    alt: "Etiqueta para producción — Lomitos en Aceite de Girasol",
  },
]

export default function EtiquetaProduccion() {
  return (
    <section
      id="etiqueta"
      style={{
        backgroundColor: "#0a2444",
        padding: "80px 48px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
            margin: "0 0 16px",
            lineHeight: 1.05,
          }}
        >
          Etiqueta para Producción
        </h2>
        <p
          style={{
            fontFamily: "var(--font-dm-sans, system-ui)",
            fontSize: "14px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Arte final aprobado para imprenta. Incluye información nutricional,
          código de barras, gramaje y consideraciones técnicas de etiquetado.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {ETIQUETAS.map((e, i) => (
          <motion.div
            key={e.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
          >
            {/* Label variante */}
            <p
              style={{
                fontFamily: "var(--font-anton, Impact, sans-serif)",
                fontSize: "11px",
                color: "#E8B84B",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {e.label}
            </p>

            {/* Card */}
            <div
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Badge tamaño */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  zIndex: 10,
                  backgroundColor: "rgba(10,36,68,0.75)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  fontFamily: "var(--font-dm-sans, system-ui)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "1px",
                }}
              >
                28 cm × 3 cm
              </div>

              {/* Imagen con hover zoom */}
              <div
                style={{ overflow: "hidden" }}
                className="etiqueta-img-wrap"
              >
                <Image
                  src={e.src}
                  alt={e.alt}
                  width={1600}
                  height={877}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                  className="etiqueta-img"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .etiqueta-img-wrap:hover .etiqueta-img {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  )
}
