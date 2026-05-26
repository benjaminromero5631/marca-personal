"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const credenciales = [
  "Abogada de Familia",
  "Magíster en Derecho de Familia e Intervención Familiar",
  "Perito",
  "Diplomada en Derecho de Familia",
  "Diplomada en Actualización Profesional en Derecho",
  "Diplomada en Marco Jurídico para la Intervención Familiar",
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => el.classList.add("visible"));
          e.target.querySelectorAll(".gold-line-short").forEach((el) => el.classList.add("visible"));
        }
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre-mi"
      style={{ background: "#ffffff", padding: "5rem 0" }}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Layout: en móvil columna única, en desktop dos columnas */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 md:gap-20 xl:gap-28 items-start">

          {/* Columna foto — solo visible en desktop */}
          <div className="hidden md:block reveal-left stagger-1 relative">
            <div className="flex gap-5">
              <div
                className="flex-shrink-0"
                style={{ width: "2px", background: "var(--gold)", opacity: 0.45, alignSelf: "stretch" }}
                aria-hidden="true"
              />
              <div className="flex-1 relative">
                <span
                  className="font-script italic absolute -top-4 -right-4 select-none pointer-events-none"
                  style={{ fontSize: "8rem", color: "rgba(15,30,74,0.05)", lineHeight: 1, zIndex: 0 }}
                  aria-hidden="true"
                >
                  02
                </span>
                <div
                  className="relative z-10 overflow-hidden"
                  style={{
                    aspectRatio: "4/5",
                    outline: "2px solid var(--gold)",
                    outlineOffset: "6px",
                  }}
                >
                  <Image
                    src="/images/abogada.png"
                    alt="Francesca Valdivieso Montero, Abogada de Familia"
                    fill
                    sizes="(max-width: 768px) 0px, 40vw"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Columna texto */}
          <div className="reveal-right stagger-1">

            <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
              Sobre mí
            </p>

            <h2
              className="font-script italic mb-1 stagger-2"
              style={{ fontSize: "clamp(2.2rem, 8vw, 3.2rem)", color: "var(--charcoal)", lineHeight: 1.05 }}
            >
              Francesca Valdivieso Montero
            </h2>
            <div className="gold-line-short mb-7" style={{ marginTop: "0.75rem" }} />

            {/* Quote sin caja */}
            <div
              className="mb-7 stagger-3"
              style={{ borderLeft: "3px solid var(--gold)", paddingLeft: "1rem" }}
            >
              <span
                className="font-script block"
                style={{ fontSize: "2.5rem", color: "rgba(201,169,110,0.22)", lineHeight: 0.5, marginBottom: "0.6rem" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="font-script italic leading-relaxed"
                style={{ fontSize: "clamp(1rem, 3.5vw, 1.15rem)", color: "var(--charcoal)" }}
              >
                Acompaño a mis clientes en los momentos más difíciles de su vida familiar,
                con la seriedad y cercanía que cada caso merece.
              </p>
            </div>

            <p
              className="font-body leading-relaxed mb-7 stagger-3"
              style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "500px", lineHeight: 1.8 }}
            >
              Soy abogada especializada en Derecho de Familia, con formación de posgrado y
              experiencia como perito. Me dedico a orientar y representar a personas que
              enfrentan situaciones familiares complejas, con atención personalizada, cercana
              y profesional.
            </p>

            {/* Credenciales sin cajas */}
            <ul className="space-y-3 stagger-4">
              {credenciales.map((c) => (
                <li key={c} className="flex items-start gap-3 font-body" style={{ fontSize: "14px", color: "var(--charcoal)", lineHeight: 1.6 }}>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} aria-hidden="true">—</span>
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
