"use client";
import { useEffect, useRef } from "react";

const pasos = [
  {
    num: "01",
    titulo: "Escríbeme al WhatsApp",
    descripcion: "Cuéntame brevemente tu situación. Te respondo con la seriedad y cercanía que tu caso merece.",
  },
  {
    num: "02",
    titulo: "Agendamos tu asesoría online",
    descripcion: "Coordinamos día y hora para una videollamada. Sin traslados, desde cualquier lugar de Chile.",
  },
  {
    num: "03",
    titulo: "Trabajamos tu caso juntos",
    descripcion: "Te acompaño en cada paso del proceso legal con atención personalizada y compromiso real.",
  },
];

export default function ComoFunciona() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="asesoria"
      style={{ background: "var(--navy)", padding: "5rem 0" }}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="mb-10 reveal stagger-1">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Simple y claro
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(1.8rem, 6vw, 2.8rem)", lineHeight: 1.1 }}
          >
            Cómo funciona la asesoría
          </h2>
        </div>

        {/* MÓVIL — pasos verticales con línea conectora */}
        <div className="md:hidden">
          <div style={{ borderLeft: "1px solid rgba(201,169,110,0.28)", paddingLeft: "1.5rem", marginLeft: "0.3rem" }}>
            {pasos.map((p, i) => (
              <div
                key={p.num}
                className={`reveal stagger-${i + 1} relative`}
                style={{ paddingBottom: i < pasos.length - 1 ? "2.5rem" : "0" }}
              >
                {/* Punto en la línea */}
                <div
                  className="absolute"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "var(--gold)",
                    left: "-1.9rem",
                    top: "0.6rem",
                  }}
                  aria-hidden="true"
                />

                {/* Numero watermark */}
                <span
                  className="font-script italic select-none pointer-events-none block"
                  style={{ fontSize: "2.8rem", color: "rgba(201,169,110,0.18)", lineHeight: 1, marginBottom: "0.1rem" }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>

                <h3 className="font-display font-bold text-white mb-2" style={{ fontSize: "1.15rem" }}>
                  {p.titulo}
                </h3>
                <p className="font-body leading-relaxed" style={{ fontSize: "13px", color: "rgba(248,245,240,0.55)", lineHeight: 1.75 }}>
                  {p.descripcion}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 reveal stagger-4">
            <p className="font-body text-xs mb-4" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>
              Cotiza tu asesoría por WhatsApp
            </p>
            <a
              href="https://wa.me/56987605936"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full font-body font-medium cursor-pointer transition-all duration-200 active:opacity-80"
              style={{
                border: "1px solid rgba(201,169,110,0.6)",
                color: "var(--gold)",
                padding: "14px 20px",
                fontSize: "0.9rem",
                minHeight: "44px",
              }}
            >
              Escribirme por WhatsApp
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* DESKTOP — timeline horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Línea horizontal conectora */}
            <div
              className="absolute left-0 right-0"
              style={{
                height: "1px",
                background: "linear-gradient(90deg, rgba(201,169,110,0.5), rgba(201,169,110,0.25), rgba(201,169,110,0.5))",
                top: "0.55rem",
              }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-3 gap-8">
              {pasos.map((p, i) => (
                <div key={p.num} className={`reveal stagger-${i + 1} relative pt-0`}>
                  <div
                    style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--gold)", marginBottom: "1.5rem", position: "relative", zIndex: 1 }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-script italic select-none pointer-events-none block"
                    style={{ fontSize: "5rem", color: "rgba(201,169,110,0.1)", lineHeight: 1, position: "absolute", top: "-1rem", right: "0" }}
                    aria-hidden="true"
                  >
                    {p.num}
                  </span>
                  <h3 className="font-display font-bold text-white mb-2 relative z-10" style={{ fontSize: "1.15rem" }}>
                    {p.titulo}
                  </h3>
                  <p className="font-body text-sm leading-relaxed relative z-10" style={{ color: "rgba(248,245,240,0.52)" }}>
                    {p.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 reveal stagger-4">
            <p className="font-body text-xs mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Cotiza tu asesoría por WhatsApp
            </p>
            <a
              href="https://wa.me/56987605936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body font-medium cursor-pointer transition-all duration-200 hover:brightness-110"
              style={{ border: "1.5px solid var(--gold)", color: "var(--gold)", padding: "14px 32px", fontSize: "0.9rem" }}
            >
              Escribirme ahora por WhatsApp
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
