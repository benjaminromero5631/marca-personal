"use client";
import { useEffect, useRef, useState } from "react";

const servicios = [
  { titulo: "Pensión de Alimentos",         descripcion: "Defiendo tu derecho y el de tus hijos a una pensión justa en cada etapa del proceso." },
  { titulo: "Cuidado Personal",             descripcion: "Te represento en causas sobre el cuidado de tus hijos, velando por su bienestar." },
  { titulo: "Relación Directa y Regular",   descripcion: "Aseguro que padres e hijos mantengan el vínculo que les corresponde por ley." },
  { titulo: "Autorización Salida del País", descripcion: "Tramito permisos para que tus hijos puedan viajar al extranjero de forma legal." },
  { titulo: "Divorcios",                    descripcion: "Te guío en cada etapa del proceso de divorcio con claridad, discreción y compromiso." },
  { titulo: "Violencia Intrafamiliar",      descripcion: "Protejo tu integridad con urgencia y sensibilidad. Tu seguridad es la prioridad." },
  { titulo: "Vulneración de Derechos",      descripcion: "Defiendo los derechos de niños y adolescentes ante situaciones de riesgo o vulneración." },
  { titulo: "Causas Civiles",               descripcion: "Represento y asesoro en causas civiles con el mismo rigor y dedicación que cada caso merece." },
];

/* Acordeon item — usado en móvil */
function AcordeonItem({ s, index, open, onToggle }: {
  s: (typeof servicios)[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ borderBottom: "1px solid rgba(201,169,110,0.2)" }}>
      <button
        className="w-full flex items-center gap-4 text-left cursor-pointer transition-colors duration-200"
        style={{
          padding: "1.1rem 0",
          background: "none",
          border: "none",
          minHeight: "44px",
        }}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span
          className="font-display flex-shrink-0"
          style={{ fontSize: "1.15rem", color: "var(--gold)", width: "2rem", opacity: open ? 1 : 0.5 }}
          aria-hidden="true"
        >
          {num}
        </span>
        <span
          className="font-display flex-1"
          style={{ fontSize: "1.05rem", color: "var(--charcoal)", lineHeight: 1.25 }}
        >
          {s.titulo}
        </span>
        <span
          className="flex-shrink-0 font-body transition-transform duration-300"
          style={{
            color: "var(--gold)",
            fontSize: "1.3rem",
            lineHeight: 1,
            transform: open ? "rotate(45deg)" : "none",
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Cuerpo con animación de altura */}
      <div
        ref={bodyRef}
        style={{
          overflow: "hidden",
          maxHeight: open ? "200px" : "0",
          transition: "max-height 350ms cubic-bezier(0.4,0,0.2,1)",
        }}
        aria-hidden={!open}
      >
        <p
          className="font-body leading-relaxed pb-4"
          style={{ fontSize: "14px", color: "var(--muted)", paddingLeft: "3rem", lineHeight: 1.75 }}
        >
          {s.descripcion}
        </p>
      </div>
    </div>
  );
}

/* Fila editorial — usada en desktop */
function ServicioRow({ s, index }: { s: (typeof servicios)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className="relative cursor-default transition-colors duration-200"
      style={{
        background: hovered ? "rgba(201,169,110,0.05)" : "transparent",
        borderBottom: "1px solid rgba(15,30,74,0.1)",
        padding: "1.5rem 0",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="listitem"
    >
      <div className="grid grid-cols-[3.5rem_1fr_1fr] gap-4 items-start">
        <span
          className="font-display"
          style={{ fontSize: "2.5rem", lineHeight: 1, color: "var(--gold)", opacity: hovered ? 1 : 0.3, transition: "opacity 200ms", userSelect: "none" }}
          aria-hidden="true"
        >
          {num}
        </span>
        <h3 className="font-display font-bold pt-1" style={{ fontSize: "1.1rem", color: "var(--navy)", lineHeight: 1.25 }}>
          {s.titulo}
        </h3>
        <p className="font-body text-sm leading-relaxed pt-1" style={{ color: "var(--muted)" }}>
          {s.descripcion}
        </p>
      </div>
      <div
        className="absolute bottom-0 left-0 h-px transition-all duration-300"
        style={{ width: hovered ? "100%" : "0", background: "var(--gold)", opacity: 0.35 }}
        aria-hidden="true"
      />
    </div>
  );
}

export default function Servicios() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
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
      style={{ background: "var(--cream)", padding: "5rem 0" }}
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="mb-8 md:mb-0 reveal stagger-1">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Áreas de práctica
          </p>
          <h2
            className="font-display font-bold mb-2"
            style={{ fontSize: "clamp(1.8rem, 6vw, 2.8rem)", color: "var(--navy)", lineHeight: 1.1 }}
          >
            Servicios Legales
          </h2>
          <div className="gold-line-short mb-6 md:mb-0" />
        </div>

        {/* MÓVIL — acordeón */}
        <div className="md:hidden mt-2">
          {servicios.map((s, i) => (
            <AcordeonItem
              key={s.titulo}
              s={s}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
          <div className="mt-8">
            <a
              href="https://wa.me/56987605936"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-body font-medium cursor-pointer transition-all duration-200 active:brightness-90"
              style={{
                background: "var(--navy)",
                color: "white",
                padding: "14px 0",
                fontSize: "0.9rem",
                minHeight: "44px",
              }}
            >
              Consultar sobre mi caso
            </a>
          </div>
        </div>

        {/* DESKTOP — lista editorial dos columnas */}
        <div className="hidden md:grid md:grid-cols-[1fr_2fr] gap-16 xl:gap-24 mt-12">
          <div className="lg:sticky lg:top-32 self-start reveal stagger-1">
            <p className="font-body text-sm leading-relaxed mb-8" style={{ color: "var(--muted)", maxWidth: "240px" }}>
              Atención integral en todas las materias del Derecho de Familia,
              con enfoque humano y resultados concretos.
            </p>
            <a
              href="https://wa.me/56987605936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-medium cursor-pointer transition-all duration-200 hover:gap-3"
              style={{ color: "var(--navy)", borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}
            >
              Consultar sobre mi caso
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div role="list">
            {servicios.map((s, i) => (
              <ServicioRow key={s.titulo} s={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
