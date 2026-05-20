"use client"

import Image from "next/image"
import { useState } from "react"

function CompetidorImagen({ src, alt, color }: { src: string; alt: string; color: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: color,
          opacity: 0.12,
        }}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
      onError={() => setError(true)}
    />
  )
}

const COMPETIDORES = [
  {
    nombre: "Salmofood",
    pais: "Chile",
    fortaleza: "Distribución masiva en supermercados nacionales y precio bajo.",
    debilidad: "Imagen genérica, sin diferenciación emocional ni historia de marca.",
    color: "#1a4a9a",
    imagen: "/images/competidor-salmofood.jpg",
  },
  {
    nombre: "Van Camp's",
    pais: "Colombia / Latam",
    fortaleza: "Presencia regional fuerte, packaging reconocible y amplia variedad.",
    debilidad: "Percibido como marca extranjera — no conecta con el consumidor chileno.",
    color: "#c0392b",
    imagen: "/images/competidor-vancamps.jpg",
  },
  {
    nombre: "Inter",
    pais: "Chile",
    fortaleza: "Precio competitivo y presencia en canales de descuento.",
    debilidad: "Posicionado en el segmento económico, difícil de subir de categoría.",
    color: "#27ae60",
    imagen: "/images/competidor-inter.jpg",
  },
]

export default function Competidores() {
  return (
    <section
      id="competidores"
      style={{
        backgroundColor: "#EAF3FB",
        padding: "80px 48px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p
          style={{
            fontFamily: "var(--font-anton, Impact, sans-serif)",
            fontSize: "13px",
            color: "#1a4a9a",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          ANÁLISIS DE MERCADO
        </p>
        <h2
          style={{
            fontFamily: "var(--font-anton, Impact, sans-serif)",
            fontSize: "52px",
            color: "#1a4a9a",
            margin: 0,
          }}
        >
          Nuestros competidores directos
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {COMPETIDORES.map((c) => (
          <div
            key={c.nombre}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e0e8f0",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {/* Imagen */}
            <div
              style={{
                height: "200px",
                backgroundColor: "#f4f8fc",
                borderBottom: "1px solid #e0e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <CompetidorImagen src={c.imagen} alt={c.nombre} color={c.color} />
            </div>

            {/* Header de card */}
            <div
              style={{
                backgroundColor: c.color,
                padding: "20px 24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-sans, system-ui)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  margin: "0 0 6px",
                }}
              >
                {c.pais}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-anton, Impact, sans-serif)",
                  fontSize: "28px",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                {c.nombre}
              </h3>
            </div>

            {/* Cuerpo */}
            <div style={{ padding: "20px 24px 28px" }}>
              <div style={{ marginBottom: "16px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-anton, Impact, sans-serif)",
                    fontSize: "11px",
                    color: "#27ae60",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  + Fortaleza
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, system-ui)",
                    fontSize: "14px",
                    color: "#3a3a3a",
                    lineHeight: 1.6,
                    marginTop: "6px",
                    marginBottom: 0,
                  }}
                >
                  {c.fortaleza}
                </p>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-anton, Impact, sans-serif)",
                    fontSize: "11px",
                    color: "#c0392b",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  - Debilidad
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans, system-ui)",
                    fontSize: "14px",
                    color: "#3a3a3a",
                    lineHeight: 1.6,
                    marginTop: "6px",
                    marginBottom: 0,
                  }}
                >
                  {c.debilidad}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
