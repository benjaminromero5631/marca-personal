"use client";
import { useEffect, useRef, useState } from "react";

const testimonios = [
  {
    texto: "Francesca me acompañó en un proceso de divorcio muy difícil. Su claridad, empatía y profesionalismo hicieron toda la diferencia. Nunca me sentí sola en el proceso.",
    nombre: "María José R.",
    caso: "Divorcio de mutuo acuerdo",
  },
  {
    texto: "Gracias a Francesca obtuve una pensión de alimentos justa para mis hijos. Explica todo con paciencia y defiende tus derechos con mucha convicción.",
    nombre: "Carlos A.",
    caso: "Pensión de alimentos",
  },
  {
    texto: "Me ayudó a obtener la salida del país para mi hijo con toda la urgencia que el caso necesitaba. Rápida, eficiente y muy cercana. La recomiendo sin dudarlo.",
    nombre: "Valentina P.",
    caso: "Autorización de salida del país",
  },
  {
    texto: "Cuando más lo necesité, Francesca estuvo presente. Me orientó en una situación de violencia intrafamiliar con mucha sensibilidad y me dio las herramientas para protegerme.",
    nombre: "Daniela M.",
    caso: "Violencia intrafamiliar",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#C9A96E" aria-hidden="true">
          <path d="M7 1l1.5 3.5H12L9 6.7l1.2 3.8L7 8.5l-3.2 2 1.2-3.8L2 4.5h3.5z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonios() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive((prev) => (prev + 1) % testimonios.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={ref}
      style={{ background: "var(--cream)", padding: "5rem 0" }}
      aria-label="Testimonios de clientes"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="mb-8 reveal stagger-1">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Testimonios
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(1.8rem, 6vw, 2.6rem)", color: "var(--navy)", lineHeight: 1.1 }}
          >
            Lo que dicen mis clientes
          </h2>
        </div>

        {/* MÓVIL — card activa + puntos */}
        <div className="md:hidden reveal stagger-2">
          <div
            style={{
              background: "#ffffff",
              padding: "1.5rem",
              boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
            }}
          >
            <Stars />
            <p
              className="font-script italic leading-relaxed mb-5"
              style={{ fontSize: "1.05rem", color: "var(--charcoal)", lineHeight: 1.7 }}
            >
              &ldquo;{testimonios[active].texto}&rdquo;
            </p>
            <div style={{ borderTop: "1px solid rgba(201,169,110,0.25)", paddingTop: "0.9rem" }}>
              <p className="font-body font-medium" style={{ fontSize: "13px", color: "var(--charcoal)" }}>
                {testimonios[active].nombre}
              </p>
              <p className="font-body" style={{ fontSize: "12px", color: "var(--muted)", marginTop: "2px" }}>
                {testimonios[active].caso}
              </p>
            </div>
          </div>

          {/* Puntos de navegación */}
          <div className="flex items-center justify-center gap-2 mt-5" role="tablist" aria-label="Testimonios">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={active === i}
                aria-label={`Testimonio ${i + 1}`}
                className="cursor-pointer transition-all duration-300"
                style={{
                  width: active === i ? "20px" : "7px",
                  height: "7px",
                  borderRadius: "4px",
                  background: active === i ? "var(--gold)" : "rgba(15,30,74,0.18)",
                  border: "none",
                  padding: 0,
                  minWidth: 0,
                  minHeight: 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP — layout asimétrico */}
        <div className="hidden md:grid md:grid-cols-[1fr_2fr] gap-16 xl:gap-24 items-start">
          <div className="reveal stagger-1">
            <div
              className="select-none hidden lg:block"
              style={{ fontSize: "9rem", color: "rgba(201,169,110,0.07)", lineHeight: 0.7, fontFamily: "Georgia, serif" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => setActive((prev) => (prev - 1 + testimonios.length) % testimonios.length)}
                aria-label="Anterior"
                style={{ background: "none", border: "none", color: "var(--muted)", fontSize: "1.2rem", cursor: "pointer", padding: 0, minWidth: "44px", minHeight: "44px" }}
              >←</button>
              <span className="font-body text-xs" style={{ color: "var(--muted)" }}>
                {active + 1} / {testimonios.length}
              </span>
              <button
                onClick={() => setActive((prev) => (prev + 1) % testimonios.length)}
                aria-label="Siguiente"
                style={{ background: "none", border: "none", color: "var(--muted)", fontSize: "1.2rem", cursor: "pointer", padding: 0, minWidth: "44px", minHeight: "44px" }}
              >→</button>
            </div>
          </div>

          <div className="reveal stagger-2">
            <Stars />
            <p
              className="font-script italic leading-relaxed mb-6"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "var(--charcoal)", lineHeight: 1.7 }}
            >
              &ldquo;{testimonios[active].texto}&rdquo;
            </p>
            <div style={{ borderTop: "1px solid rgba(201,169,110,0.3)", paddingTop: "1rem" }}>
              <p className="font-body font-medium text-sm" style={{ color: "var(--charcoal)" }}>
                {testimonios[active].nombre}
              </p>
              <p className="font-body text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                {testimonios[active].caso}
              </p>
            </div>
            <div className="mt-6 space-y-0">
              {testimonios.map((item, i) => i !== active && (
                <button
                  key={item.nombre}
                  onClick={() => setActive(i)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "0.75rem 0",
                    background: "none",
                    border: "none",
                    borderTop: "1px solid rgba(15,30,74,0.07)",
                    opacity: 0.4,
                    cursor: "pointer",
                  }}
                  aria-label={`Ver testimonio de ${item.nombre}`}
                >
                  <p className="font-body text-xs font-medium" style={{ color: "var(--navy)" }}>{item.nombre}</p>
                  <p className="font-body" style={{ fontSize: "11px", color: "var(--muted)" }}>{item.caso}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
