"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => lineRef.current?.classList.add("visible"), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden" style={{ background: "var(--navy-deep)" }}>

      {/* ── MOBILE: foto full-width con texto overlay ── */}
      <div className="md:hidden relative" style={{ aspectRatio: "4/5" }}>

        {/* Foto / Placeholder */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, #1B3268 0%, #0F1E4A 100%)" }}
        >
          {/* Nombre como watermark placeholder */}
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none"
            aria-hidden="true"
          >
            <span
              className="font-script italic text-center leading-tight px-4"
              style={{ fontSize: "clamp(2.5rem, 14vw, 5rem)", color: "rgba(201,169,110,0.08)", lineHeight: 1.1 }}
            >
              Francesca<br/>Valdivieso
            </span>
          </div>
        </div>

        {/* Overlay gradiente de abajo hacia arriba */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #0F1E4A 30%, rgba(15,30,74,0.6) 65%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Texto sobre la foto — anclado al fondo */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-7 pt-16">
          <div ref={lineRef} className="gold-line-short mb-5" />

          <h1
            className="font-display font-light text-white"
            style={{ fontSize: "clamp(2.4rem, 11vw, 3.2rem)", lineHeight: 1.05, marginBottom: "0.15em" }}
          >
            Tu familia
          </h1>
          <h1
            className="font-display italic"
            style={{ fontSize: "clamp(2.4rem, 11vw, 3.2rem)", lineHeight: 1.05, marginBottom: "0.15em" }}
          >
            <span className="shimmer-gold">merece la mejor</span>
          </h1>
          <h1
            className="font-display font-light text-white"
            style={{ fontSize: "clamp(2.4rem, 11vw, 3.2rem)", lineHeight: 1.05, marginBottom: "1.2rem" }}
          >
            defensa.
          </h1>

          <p
            className="font-body uppercase tracking-[0.2em] mb-5"
            style={{ fontSize: "11px", color: "var(--gold-light)" }}
          >
            Abogada de Familia · Magíster · Perito
          </p>

          <a
            href="https://wa.me/56987605936"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center font-body font-medium cursor-pointer transition-all duration-200 active:brightness-90"
            style={{
              background: "var(--gold)",
              color: "var(--navy)",
              padding: "15px 0",
              fontSize: "0.9rem",
              borderRadius: "4px",
              minHeight: "44px",
            }}
            aria-label="Agendar asesoría por WhatsApp"
          >
            Agenda tu asesoría online
          </a>
        </div>
      </div>

      {/* ── DESKTOP: dos columnas ── */}
      <div
        className="hidden md:grid"
        style={{ gridTemplateColumns: "50% 50%", minHeight: "100vh" }}
      >
        {/* Columna izquierda — texto sobre fondo navy */}
        <div
          className="relative flex flex-col justify-center px-12 xl:px-16"
          style={{
            background: "var(--navy-deep)",
            paddingTop: "120px",
            paddingBottom: "80px",
          }}
        >
          {/* Patron lineal sutil */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent 0px, transparent 79px, rgba(201,169,110,0.03) 79px, rgba(201,169,110,0.03) 80px)`,
            }}
            aria-hidden="true"
          />

          <div className="relative z-10" style={{ maxWidth: "520px" }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-script italic" style={{ fontSize: "0.8rem", color: "rgba(201,169,110,0.5)" }} aria-hidden="true">01</span>
              <div style={{ width: "28px", height: "1px", background: "rgba(201,169,110,0.35)" }} aria-hidden="true" />
              <span className="font-body uppercase tracking-[0.22em]" style={{ fontSize: "0.65rem", color: "rgba(232,213,176,0.55)" }}>
                Abogada de Familia · Magíster · Perito
              </span>
            </div>

            <h1 className="font-display font-light text-white" style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)", lineHeight: 1.0, marginBottom: "0.05em" }}>
              Tu familia
            </h1>
            <h1 className="font-display italic" style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)", lineHeight: 1.0, marginBottom: "0.05em" }}>
              <span className="shimmer-gold">merece la mejor</span>
            </h1>
            <h1 className="font-display font-light text-white" style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)", lineHeight: 1.0, marginBottom: "2rem" }}>
              defensa.
            </h1>

            <div ref={lineRef} className="gold-line-short mb-7" />

            <p className="font-body font-light mb-10" style={{ fontSize: "1rem", lineHeight: 1.85, color: "rgba(248,245,240,0.6)", maxWidth: "440px" }}>
              Abogada especializada en familia con atención empática, clara y comprometida.
              Asesorías online disponibles para toda Chile.
            </p>

            <div className="flex gap-4">
              <a
                href="https://wa.me/56987605936"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-medium px-8 py-4 cursor-pointer transition-all duration-200 hover:brightness-110"
                style={{ background: "var(--gold)", color: "var(--navy)", fontSize: "0.9rem" }}
              >
                Agenda tu asesoría
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 font-body font-light px-8 py-4 border cursor-pointer transition-all duration-200 hover:border-gold hover:text-gold"
                style={{ borderColor: "rgba(255,255,255,0.18)", color: "rgba(248,245,240,0.65)", fontSize: "0.9rem" }}
              >
                Ver servicios
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Columna derecha — foto */}
        <div className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #1B3268 0%, #0F1E4A 100%)" }}>
          {/* Watermark placeholder */}
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none"
            aria-hidden="true"
          >
            <span
              className="font-script italic text-center leading-tight px-8"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "rgba(201,169,110,0.06)", lineHeight: 1.1 }}
            >
              Francesca<br/>Valdivieso
            </span>
          </div>
          {/* Degradado lateral para fusionar con el texto */}
          <div
            className="absolute inset-y-0 left-0 w-24"
            style={{ background: "linear-gradient(to right, var(--navy-deep), transparent)" }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Scroll indicator desktop */}
      <div className="hidden md:flex absolute bottom-8 left-8 z-20 flex-col items-center gap-2" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="font-body text-[10px] tracking-[0.35em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
