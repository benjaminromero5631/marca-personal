"use client";
import { useEffect, useRef, useState } from "react";

const testimonios = [
  {
    texto:
      "Francesca me acompañó en un proceso de divorcio muy difícil. Su claridad, empatía y profesionalismo hicieron toda la diferencia. Nunca me sentí sola en el proceso.",
    nombre: "María José R.",
    caso: "Divorcio de mutuo acuerdo",
  },
  {
    texto:
      "Gracias a Francesca obtuve una pensión de alimentos justa para mis hijos. Explica todo con paciencia y defiende tus derechos con mucha convicción.",
    nombre: "Carlos A.",
    caso: "Pensión de alimentos",
  },
  {
    texto:
      "Me ayudó a obtener la salida del país para mi hijo con toda la urgencia que el caso necesitaba. Rápida, eficiente y muy cercana. La recomiendo sin dudarlo.",
    nombre: "Valentina P.",
    caso: "Autorización de salida del país",
  },
  {
    texto:
      "Cuando más lo necesité, Francesca estuvo presente. Me orientó en una situación de violencia intrafamiliar con mucha sensibilidad y me dio las herramientas para protegerme.",
    nombre: "Daniela M.",
    caso: "Violencia intrafamiliar",
  },
];

export default function Testimonios() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
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

  const t = testimonios[active];

  return (
    <section
      ref={ref}
      className="overflow-hidden"
      style={{ background: "var(--cream-warm)", padding: "8rem 0 7rem" }}
      aria-label="Testimonios de clientes"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 xl:gap-24 items-start">

          {/* Columna izquierda: label + comillas decorativas */}
          <div className="reveal stagger-1">
            <p
              className="font-body text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Testimonios
            </p>
            <h2
              className="font-display font-bold mb-0"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--navy)", lineHeight: 1.15 }}
            >
              Lo que<br />dicen mis<br />clientes
            </h2>

            {/* Comillas decorativas grandes */}
            <div
              className="mt-6 select-none hidden lg:block"
              style={{ fontSize: "10rem", color: "rgba(201,169,110,0.07)", lineHeight: 0.7, fontFamily: "Georgia, serif" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            {/* Navegacion flechas */}
            <div className="hidden lg:flex items-center gap-4 mt-8">
              <button
                onClick={() => setActive((prev) => (prev - 1 + testimonios.length) % testimonios.length)}
                aria-label="Testimonio anterior"
                className="cursor-pointer transition-colors duration-200 hover:text-gold"
                style={{ color: "var(--muted)", background: "none", border: "none", padding: 0, fontSize: "1.2rem" }}
              >
                ←
              </button>
              <span className="font-body text-xs" style={{ color: "var(--muted)" }}>
                {active + 1} / {testimonios.length}
              </span>
              <button
                onClick={() => setActive((prev) => (prev + 1) % testimonios.length)}
                aria-label="Testimonio siguiente"
                className="cursor-pointer transition-colors duration-200 hover:text-gold"
                style={{ color: "var(--muted)", background: "none", border: "none", padding: 0, fontSize: "1.2rem" }}
              >
                →
              </button>
            </div>
          </div>

          {/* Columna derecha: testimonios como texto editorial */}
          <div className="reveal stagger-2">
            <p
              className="font-script italic leading-relaxed mb-6"
              style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", color: "var(--charcoal)", lineHeight: 1.7 }}
              key={active}
            >
              &ldquo;{t.texto}&rdquo;
            </p>

            {/* Autor */}
            <div
              className="pt-5"
              style={{ borderTop: "1px solid rgba(201,169,110,0.3)" }}
            >
              <p className="font-body font-medium text-sm mb-0.5" style={{ color: "var(--charcoal)" }}>
                {t.nombre}
              </p>
              <p className="font-body text-xs tracking-wide" style={{ color: "var(--muted)" }}>
                {t.caso}
              </p>
            </div>

            {/* Separador + resto de testimonios */}
            <div className="mt-8 space-y-0">
              {testimonios.map((item, i) => (
                i !== active && (
                  <button
                    key={item.nombre}
                    onClick={() => setActive(i)}
                    aria-label={`Ver testimonio de ${item.nombre}`}
                    className="w-full text-left cursor-pointer transition-colors duration-200 hover:opacity-100 block"
                    style={{
                      padding: "0.9rem 0",
                      borderTop: "1px solid rgba(15,30,74,0.08)",
                      opacity: 0.45,
                      background: "none",
                    }}
                  >
                    <p className="font-body text-xs font-medium mb-0.5" style={{ color: "var(--navy)" }}>
                      {item.nombre}
                    </p>
                    <p className="font-body text-[11px]" style={{ color: "var(--muted)" }}>
                      {item.caso}
                    </p>
                  </button>
                )
              ))}
            </div>

            {/* Navegacion mobile */}
            <div className="flex items-center gap-4 mt-8 lg:hidden">
              <button
                onClick={() => setActive((prev) => (prev - 1 + testimonios.length) % testimonios.length)}
                aria-label="Testimonio anterior"
                className="cursor-pointer transition-colors duration-200"
                style={{ color: "var(--muted)", background: "none", border: "none", padding: 0, fontSize: "1.2rem" }}
              >
                ←
              </button>
              <span className="font-body text-xs" style={{ color: "var(--muted)" }}>
                {active + 1} / {testimonios.length}
              </span>
              <button
                onClick={() => setActive((prev) => (prev + 1) % testimonios.length)}
                aria-label="Testimonio siguiente"
                className="cursor-pointer transition-colors duration-200"
                style={{ color: "var(--muted)", background: "none", border: "none", padding: 0, fontSize: "1.2rem" }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
