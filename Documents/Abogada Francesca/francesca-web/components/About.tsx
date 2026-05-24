"use client";
import { useEffect, useRef } from "react";

const credenciales = [
  "Abogada de Familia",
  "Magíster en Derecho de Familia e Intervención Familiar",
  "Perito",
  "Asesorías online disponibles a todo Chile",
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right")
              .forEach((el) => el.classList.add("visible"));
            e.target.querySelectorAll(".gold-line-short")
              .forEach((el) => el.classList.add("visible"));
          }
        }),
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre-mi"
      className="overflow-hidden"
      style={{ background: "var(--off-white)", padding: "8rem 0 7rem" }}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-20 xl:gap-28 items-start">

          {/* Columna foto */}
          <div className="reveal-left stagger-1 relative">
            {/* Linea dorada vertical a la izquierda de la foto */}
            <div className="flex gap-5">
              <div
                className="flex-shrink-0 hidden lg:block"
                style={{ width: "2px", background: "var(--gold)", opacity: 0.5, alignSelf: "stretch" }}
                aria-hidden="true"
              />

              <div className="flex-1 relative">
                {/* Numero editorial detrás */}
                <span
                  className="font-script italic absolute -top-4 -right-4 select-none pointer-events-none hidden lg:block"
                  style={{ fontSize: "9rem", color: "rgba(15,30,74,0.05)", lineHeight: 1, zIndex: 0 }}
                  aria-hidden="true"
                >
                  02
                </span>

                {/* Foto */}
                <div
                  className="relative z-10 aspect-[4/5] overflow-hidden"
                  style={{ background: "linear-gradient(160deg, #1B3268 0%, #0F1E4A 100%)" }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-end pb-10">
                    <svg width="70" height="105" viewBox="0 0 80 120" fill="none" className="opacity-15" aria-hidden="true">
                      <circle cx="40" cy="30" r="22" fill="white"/>
                      <path d="M0 120 C0 80 20 60 40 60 C60 60 80 80 80 120" fill="white"/>
                    </svg>
                    <p className="font-script italic text-center mt-4 px-6" style={{ color: "rgba(232,213,176,0.25)", fontSize: "0.75rem" }}>
                      Fotografía de Francesca<br/>próximamente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna texto */}
          <div className="reveal-right stagger-1">
            {/* Label + numero editorial */}
            <div className="flex items-center gap-3 mb-6">
              <p
                className="font-body text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                Sobre mí
              </p>
            </div>

            {/* Nombre */}
            <h2
              className="font-script italic mb-1 stagger-2"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "var(--charcoal)", lineHeight: 1.1 }}
            >
              Francesca Valdivieso
            </h2>
            <p
              className="font-body text-sm tracking-[0.15em] uppercase mb-6 stagger-2"
              style={{ color: "var(--muted)" }}
            >
              Montero
            </p>

            <div className="gold-line-short mb-8" />

            {/* Quote — sin caja, solo borde izquierdo */}
            <div
              className="mb-8 stagger-3"
              style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "1.5rem" }}
            >
              <span
                className="font-script"
                style={{ fontSize: "3rem", color: "rgba(201,169,110,0.25)", lineHeight: 0.5, display: "block", marginBottom: "0.5rem" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="font-script italic leading-relaxed"
                style={{ fontSize: "1.15rem", color: "var(--charcoal)" }}
              >
                Acompaño a mis clientes en los momentos más difíciles de su vida familiar, con la seriedad y cercanía que cada caso merece.
              </p>
            </div>

            <p
              className="font-body text-base leading-relaxed mb-8 stagger-3"
              style={{ color: "var(--muted)", maxWidth: "500px" }}
            >
              Soy abogada especializada en Derecho de Familia, con formación de posgrado y
              experiencia como perito. Me dedico a orientar y representar a personas que
              enfrentan situaciones familiares complejas, entregando atención personalizada,
              cercana y profesional.
            </p>

            {/* Credenciales — lista simple sin cajas */}
            <ul className="space-y-3 stagger-4">
              {credenciales.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 font-body text-sm"
                  style={{ color: "var(--charcoal)" }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5 font-body"
                    style={{ color: "var(--gold)", fontSize: "0.85rem" }}
                    aria-hidden="true"
                  >
                    —
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
