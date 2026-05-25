"use client";
import { useEffect, useRef } from "react";

const situaciones = [
  {
    emoji: "💸",
    titulo: "No me pagan la pensión",
    descripcion: "Demanda y medidas para asegurar lo que les corresponde a tus hijos.",
  },
  {
    emoji: "👶",
    titulo: "Quiero la tuición de mis hijos",
    descripcion: "Representación en juicio de cuidado personal.",
  },
  {
    emoji: "🛡️",
    titulo: "Necesito protección urgente",
    descripcion: "Medidas cautelares en casos de violencia intrafamiliar.",
  },
  {
    emoji: "🏠",
    titulo: "Quiero divorciarme",
    descripcion: "Te acompaño en todo el proceso de divorcio.",
  },
  {
    emoji: "✈️",
    titulo: "Mi ex no me deja sacar a mis hijos",
    descripcion: "Autorización judicial de salida del país.",
  },
  {
    emoji: "⚖️",
    titulo: "Me vulneraron mis derechos",
    descripcion: "Causas civiles y de vulneración de derechos.",
  },
];

function Card({ s }: { s: (typeof situaciones)[0] }) {
  return (
    <div
      className="reveal"
      style={{
        background: "#EFEDE9",
        borderLeft: "4px solid var(--gold)",
        borderRadius: "6px",
        padding: "1.25rem",
        boxShadow: "0 2px 12px rgba(15,30,74,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <span style={{ fontSize: "2rem", lineHeight: 1 }} aria-hidden="true">{s.emoji}</span>
      <p className="font-body font-bold" style={{ fontSize: "16px", color: "var(--navy)", lineHeight: 1.3 }}>
        {s.titulo}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <p className="font-body font-light" style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>
          {s.descripcion}
        </p>
        <span style={{ color: "var(--gold)", fontSize: "1.1rem", flexShrink: 0, marginLeft: "0.5rem" }} aria-hidden="true">→</span>
      </div>
    </div>
  );
}

export default function Situaciones() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--cream)", padding: "5rem 0" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        <div className="reveal stagger-1" style={{ marginBottom: "2rem" }}>
          <p className="font-body uppercase tracking-[0.25em]" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "0.5rem" }}>
            Cuéntame tu caso
          </p>
          <h2 className="font-serif font-bold" style={{ fontSize: "clamp(1.8rem, 6vw, 2.6rem)", color: "var(--navy)", lineHeight: 1.1, marginBottom: "0.5rem" }}>
            ¿Cuál es tu situación?
          </h2>
          <p className="font-body font-light" style={{ fontSize: "15px", color: "var(--muted)" }}>
            Escríbeme por WhatsApp — te respondo con seriedad y cercanía.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {situaciones.map((s, i) => (
            <div key={s.titulo} className={`stagger-${(i % 3) + 2}`}>
              <Card s={s} />
            </div>
          ))}
        </div>

        <div className="reveal stagger-5 text-center md:text-left">
          <a
            href="#servicios"
            className="font-body font-medium cursor-pointer transition-all duration-200 hover:bg-navy hover:text-white"
            style={{
              display: "inline-block",
              border: "1.5px solid var(--navy)",
              color: "var(--navy)",
              padding: "12px 28px",
              fontSize: "14px",
              borderRadius: "4px",
              minHeight: "44px",
            }}
          >
            Ver todos mis servicios ↓
          </a>
        </div>
      </div>
    </section>
  );
}
