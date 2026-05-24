"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => lineRef.current?.classList.add("visible"), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--navy-deep)" }}
    >
      {/* Patron lineal sutil */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent 0px, transparent 79px,
            rgba(201,169,110,0.03) 79px, rgba(201,169,110,0.03) 80px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Gradiente lateral — libera la derecha para la foto */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(10,21,53,0.98) 35%, rgba(10,21,53,0.75) 65%, rgba(10,21,53,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Placeholder foto derecha */}
      <div
        className="absolute right-0 top-0 bottom-0 z-5 pointer-events-none hidden md:block"
        style={{
          width: "45vw",
          background: "linear-gradient(160deg, #1B3268 0%, #0F1E4A 100%)",
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        aria-hidden="true"
      >
        {/* Linea diagonal dorada en el borde izquierdo del clip */}
        <div
          className="absolute left-0 top-0 bottom-0"
          style={{
            width: "2px",
            background: "linear-gradient(180deg, transparent 0%, var(--gold) 30%, var(--gold) 70%, transparent 100%)",
            opacity: 0.4,
            transform: "skewX(-5deg)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingLeft: "10%" }}>
          <svg width="60" height="90" viewBox="0 0 80 120" fill="none" className="opacity-10" aria-hidden="true">
            <circle cx="40" cy="30" r="22" fill="white"/>
            <path d="M0 120 C0 80 20 60 40 60 C60 60 80 80 80 120" fill="white"/>
          </svg>
          <p className="font-script italic text-center mt-4" style={{ color: "rgba(232,213,176,0.2)", fontSize: "0.75rem" }}>
            Fotografía<br/>próximamente
          </p>
        </div>
      </div>

      {/* Texto decorativo watermark */}
      <div
        className="absolute bottom-0 left-0 z-10 pointer-events-none select-none hidden lg:block"
        style={{
          fontSize: "clamp(6rem, 14vw, 18rem)",
          lineHeight: 0.85,
          fontFamily: "var(--font-cormorant), serif",
          fontStyle: "italic",
          color: "rgba(201,169,110,0.03)",
          letterSpacing: "-0.04em",
          transform: "translateX(-4%)",
        }}
        aria-hidden="true"
      >
        FV
      </div>

      {/* Contenido — columna izquierda 55% */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full pt-32 pb-24">
        <div style={{ maxWidth: "600px" }}>

          {/* Numero editorial vertical */}
          <div className="flex items-center gap-4 mb-8 reveal visible stagger-1">
            <span
              className="font-script italic"
              style={{ fontSize: "0.85rem", color: "rgba(201,169,110,0.5)", letterSpacing: "0.1em" }}
              aria-hidden="true"
            >
              01
            </span>
            <div style={{ width: "32px", height: "1px", background: "rgba(201,169,110,0.4)" }} aria-hidden="true" />
            <span
              className="font-body uppercase tracking-[0.22em]"
              style={{ fontSize: "0.68rem", color: "rgba(232,213,176,0.6)" }}
            >
              Abogada de Familia&nbsp;·&nbsp;Magíster&nbsp;·&nbsp;Perito
            </span>
          </div>

          {/* Headline partido */}
          <h1
            className="font-display font-light reveal visible stagger-2"
            style={{
              fontSize: "clamp(3rem, 7.5vw, 5.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              marginBottom: "0.1em",
            }}
          >
            Tu familia
          </h1>
          <h1
            className="font-display italic reveal visible stagger-2"
            style={{
              fontSize: "clamp(3rem, 7.5vw, 5.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: "0.1em",
            }}
          >
            <span className="shimmer-gold">merece la mejor</span>
          </h1>
          <h1
            className="font-display font-light reveal visible stagger-2"
            style={{
              fontSize: "clamp(3rem, 7.5vw, 5.5rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--cream)",
              marginBottom: "2rem",
            }}
          >
            defensa.
          </h1>

          {/* Linea dorada izquierda */}
          <div ref={lineRef} className="gold-line-short mb-8" />

          {/* Subheadline */}
          <p
            className="font-body font-light mb-10 reveal visible stagger-3"
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "rgba(248,245,240,0.62)",
              maxWidth: "480px",
            }}
          >
            Abogada especializada en familia con atención empática,
            clara y comprometida. Asesorías online disponibles para toda Chile.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 reveal visible stagger-4">
            <a
              href="https://wa.me/56987605936"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar asesoría por WhatsApp"
              className="inline-flex items-center justify-center font-body font-medium px-9 py-4 cursor-pointer transition-all duration-200 hover:brightness-110"
              style={{ background: "var(--gold)", color: "var(--navy-deep)" }}
            >
              Agenda tu asesoría online
            </a>
            <a
              href="#servicios"
              aria-label="Ver servicios legales"
              className="inline-flex items-center justify-center gap-2 font-body font-light px-9 py-4 border cursor-pointer transition-all duration-200 hover:border-gold hover:text-gold"
              style={{
                borderColor: "rgba(255,255,255,0.18)",
                color: "rgba(248,245,240,0.7)",
              }}
            >
              Conocer mis servicios
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-8 z-20 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="font-body text-[10px] tracking-[0.35em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
