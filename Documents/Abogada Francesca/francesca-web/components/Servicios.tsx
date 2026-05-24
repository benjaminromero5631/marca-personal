"use client";
import { useEffect, useRef, useState } from "react";

const servicios = [
  {
    titulo: "Pensión de Alimentos",
    descripcion: "Defiendo tu derecho y el de tus hijos a una pensión justa en cada etapa del proceso.",
  },
  {
    titulo: "Cuidado Personal",
    descripcion: "Te represento en causas sobre el cuidado de tus hijos, velando por su bienestar.",
  },
  {
    titulo: "Relación Directa y Regular",
    descripcion: "Aseguro que padres e hijos mantengan el vínculo que les corresponde por ley.",
  },
  {
    titulo: "Autorización de Salida del País",
    descripcion: "Tramito permisos para que tus hijos puedan viajar al extranjero de forma legal.",
  },
  {
    titulo: "Divorcios",
    descripcion: "Te guío en cada etapa del proceso de divorcio con claridad, discreción y compromiso.",
  },
  {
    titulo: "Violencia Intrafamiliar",
    descripcion: "Protejo tu integridad con urgencia y sensibilidad. Tu seguridad es la prioridad.",
  },
  {
    titulo: "Vulneración de Derechos",
    descripcion: "Defiendo los derechos de niños y adolescentes ante situaciones de riesgo o vulneración.",
  },
  {
    titulo: "Causas Civiles",
    descripcion: "Asesoría y representación en materias civiles relacionadas con el ámbito familiar.",
  },
];

function ServicioRow({ s, index }: { s: (typeof servicios)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`reveal stagger-${Math.min((index % 4) + 1, 4)} relative cursor-default transition-colors duration-200`}
      style={{
        background: hovered ? "rgba(201,169,110,0.05)" : "transparent",
        borderBottom: "1px solid rgba(15,30,74,0.1)",
        padding: "1.6rem 0",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="listitem"
      aria-label={s.titulo}
    >
      <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[3.5rem_1fr_1fr] gap-4 items-start">
        {/* Numero */}
        <span
          className="font-display"
          style={{
            fontSize: "2.8rem",
            lineHeight: 1,
            color: "var(--gold)",
            opacity: hovered ? 1 : 0.35,
            transition: "opacity 200ms",
            userSelect: "none",
          }}
          aria-hidden="true"
        >
          {num}
        </span>

        {/* Titulo */}
        <h3
          className="font-display font-bold pt-1"
          style={{
            fontSize: "1.15rem",
            color: "var(--navy)",
            lineHeight: 1.25,
          }}
        >
          {s.titulo}
        </h3>

        {/* Descripcion — solo en md+ */}
        <p
          className="hidden md:block font-body text-sm leading-relaxed pt-1"
          style={{ color: "var(--muted)" }}
        >
          {s.descripcion}
        </p>
      </div>

      {/* Descripcion mobile */}
      <p
        className="md:hidden font-body text-sm leading-relaxed mt-2"
        style={{ color: "var(--muted)", paddingLeft: "3.5rem" }}
      >
        {s.descripcion}
      </p>

      {/* Linea dorada animada en hover */}
      <div
        className="absolute bottom-0 left-0 h-px transition-all duration-300"
        style={{
          width: hovered ? "100%" : "0",
          background: "var(--gold)",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

export default function Servicios() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
            e.target.querySelectorAll(".gold-line-short").forEach((el) => el.classList.add("visible"));
          }
        }),
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      className="overflow-hidden"
      style={{ background: "var(--cream)", padding: "8rem 0 7rem" }}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Layout — titulo izquierda / lista derecha */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 xl:gap-24">

          {/* Columna izquierda: titulo de seccion */}
          <div className="lg:sticky lg:top-32 self-start reveal stagger-1">
            <p
              className="font-body text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Áreas de práctica
            </p>
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--navy)", lineHeight: 1.1 }}
            >
              Servicios<br />Legales
            </h2>
            <div className="gold-line-short mb-6" />
            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "var(--muted)", maxWidth: "260px" }}
            >
              Atención integral en todas las materias del Derecho de Familia,
              con enfoque humano y resultados concretos.
            </p>

            <div className="mt-10 hidden lg:block">
              <a
                href="https://wa.me/56987605936"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm font-medium cursor-pointer transition-all duration-200 hover:gap-3"
                style={{ color: "var(--navy)", borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}
              >
                Consultar sobre mi caso
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna derecha: lista editorial */}
          <div role="list">
            {servicios.map((s, i) => (
              <ServicioRow key={s.titulo} s={s} index={i} />
            ))}
          </div>
        </div>

        {/* CTA mobile */}
        <div className="text-center mt-12 lg:hidden reveal stagger-4">
          <a
            href="https://wa.me/56987605936"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm font-medium px-8 py-3.5 cursor-pointer transition-all duration-200 hover:brightness-110"
            style={{ border: "1.5px solid var(--navy)", color: "var(--navy)" }}
          >
            Consultar sobre mi caso
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
