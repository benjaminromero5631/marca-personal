"use client"

import Image from "next/image"
import { motion } from "framer-motion"
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
        overflow: "hidden",
      }}
    >
      {/* Lata decorativa flotante — derecha */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.18, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          right: "-40px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "340px",
          height: "340px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: "100%", height: "100%" }}
        >
          <Image
            src="/images/lata-antigua.png"
            alt="Lata Otuna decorativa"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </motion.div>
      </motion.div>

      {/* Headline block */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.span
          style={HEADLINE_STYLE}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          OTUNA
        </motion.span>

        {/* Línea 2: PURO + imagen + ATÚN */}
        <motion.span
          style={{ ...HEADLINE_STYLE, display: "flex", alignItems: "center", gap: "16px" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          PURO
          <Image
            src="/images/lata-antigua.png"
            alt="Lata Otuna en Agua"
            width={140}
            height={140}
            style={{
              transform: "rotate(-8deg)",
              filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.2))",
              flexShrink: 0,
              objectFit: "contain",
            }}
          />
          ATÚN
        </motion.span>

        <motion.span
          style={HEADLINE_STYLE}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          DESDE 1980
        </motion.span>
      </div>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          fontFamily: "var(--font-dm-sans, system-ui)",
          fontSize: "13px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "rgba(26,74,154,0.7)",
          marginTop: "32px",
          textAlign: "center",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {HERO_CONTENT.subheadline}
      </motion.p>

      {/* Botón scroll */}
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
          zIndex: 1,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
