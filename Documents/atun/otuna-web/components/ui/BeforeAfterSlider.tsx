"use client"

import Image from "next/image"
import { ReactCompareSlider, ReactCompareSliderHandle } from "react-compare-slider"
import { motion } from "framer-motion"

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

const CARD_STYLE: React.CSSProperties = {
  height: "420px",
  borderRadius: "12px",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#0d1b2e",
}

const LABEL_BASE: React.CSSProperties = {
  fontFamily: "var(--font-anton, Impact, sans-serif)",
  fontSize: "11px",
  letterSpacing: "3px",
  textTransform: "uppercase",
  position: "absolute",
  top: "14px",
  zIndex: 10,
  pointerEvents: "none",
  padding: "4px 10px",
  borderRadius: "4px",
  backgroundColor: "rgba(13,27,46,0.6)",
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ position: "relative" }}
    >
      {/* Labels superpuestos */}
      <div style={{ ...LABEL_BASE, left: "14px", color: "rgba(255,255,255,0.5)" }}>ANTES</div>
      <div style={{ ...LABEL_BASE, right: "14px", color: "#E8B84B" }}>DESPUÉS</div>

      <ReactCompareSlider
        defaultPosition={100}
        style={CARD_STYLE}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#C9A84C",
              border: "none",
              boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "ew-resize",
            }}
            linesStyle={{ width: "2px", background: "rgba(201,168,76,0.8)" }}
          />
        }
        itemOne={
          <div style={{ width: "100%", height: "100%", position: "relative", backgroundColor: "#0d1b2e" }}>
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              style={{ objectFit: "contain", padding: "24px" }}
            />
          </div>
        }
        itemTwo={
          <div style={{ width: "100%", height: "100%", position: "relative", backgroundColor: "#0d1b2e" }}>
            <Image
              src={afterSrc}
              alt={afterAlt}
              fill
              style={{ objectFit: "contain", padding: "24px" }}
            />
          </div>
        }
      />
    </motion.div>
  )
}
