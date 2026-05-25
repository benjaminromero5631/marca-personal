"use client";
import { useEffect, useRef } from "react";

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

  return (
    <section ref={ref} style={{ background: "var(--cream)", padding: "5rem 0" }} aria-label="Testimonios de clientes">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        <div className="reveal stagger-1" style={{ marginBottom: "2.5rem" }}>
          <p className="font-body uppercase tracking-[0.25em]" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "0.5rem" }}>
            Testimonios
          </p>
          <h2 className="font-serif font-bold" style={{ fontSize: "clamp(1.8rem, 6vw, 2.6rem)", color: "var(--navy)", lineHeight: 1.1 }}>
            Lo que dicen mis clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonios.map((t, i) => (
            <div
              key={t.nombre}
              className={`reveal stagger-${i + 2}`}
              style={{
                background: "#ffffff",
                borderRadius: "8px",
                padding: "1.5rem",
                boxShadow: "0 2px 16px rgba(15,30,74,0.06)",
              }}
            >
              <Stars />
              <p
                className="font-script italic leading-relaxed"
                style={{ fontSize: "17px", color: "var(--charcoal)", lineHeight: 1.7, marginBottom: "1.25rem" }}
              >
                &ldquo;{t.texto}&rdquo;
              </p>
              <div style={{ borderTop: "1px solid var(--gold)", paddingTop: "0.75rem", width: "24px" }} />
              <p className="font-body font-semibold" style={{ fontSize: "13px", color: "var(--navy)", marginTop: "0.75rem" }}>
                {t.nombre}
              </p>
              <p className="font-body font-light" style={{ fontSize: "12px", color: "var(--muted)", marginTop: "2px" }}>
                {t.caso}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
