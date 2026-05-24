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
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        }),
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="asesoria"
      className="overflow-hidden"
      style={{ background: "var(--navy)", padding: "8rem 0 7rem" }}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 reveal stagger-1">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            Simple y claro
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.15 }}
          >
            Cómo funciona la asesoría
          </h2>
        </div>

        {/* Timeline horizontal */}
        <div className="relative">
          {/* Linea dorada conectora — solo desktop */}
          <div
            className="hidden md:block absolute left-0 right-0"
            style={{
              height: "1px",
              background: "linear-gradient(90deg, rgba(201,169,110,0.6), rgba(201,169,110,0.3), rgba(201,169,110,0.6))",
              top: "2.2rem",
            }}
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {pasos.map((p, i) => (
              <div
                key={p.num}
                className={`reveal stagger-${i + 1} relative`}
              >
                {/* Punto de conexion en la linea */}
                <div
                  className="hidden md:block w-2 h-2 rounded-full mb-8 relative z-10"
                  style={{ background: "var(--gold)" }}
                  aria-hidden="true"
                />

                {/* Numero watermark */}
                <span
                  className="font-script italic absolute select-none pointer-events-none hidden md:block"
                  style={{
                    fontSize: "7rem",
                    color: "rgba(201,169,110,0.08)",
                    lineHeight: 1,
                    top: "-1.5rem",
                    right: "0",
                    zIndex: 0,
                  }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>

                {/* Numero visible mobile */}
                <p
                  className="md:hidden font-body text-xs tracking-[0.2em] uppercase mb-3"
                  style={{ color: "var(--gold)", opacity: 0.7 }}
                >
                  Paso {p.num}
                </p>

                <h3
                  className="font-display font-bold text-white mb-3 relative z-10"
                  style={{ fontSize: "1.2rem" }}
                >
                  {p.titulo}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed relative z-10"
                  style={{ color: "rgba(248,245,240,0.55)" }}
                >
                  {p.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 reveal stagger-4">
          <p className="font-body text-xs text-white/40 mb-5 tracking-wide">
            Primera consulta por WhatsApp sin costo
          </p>
          <a
            href="https://wa.me/56987605936"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body font-medium px-10 py-4 cursor-pointer transition-all duration-200 hover:brightness-110"
            style={{
              border: "1.5px solid var(--gold)",
              color: "var(--gold)",
            }}
          >
            Escribirme ahora por WhatsApp
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
