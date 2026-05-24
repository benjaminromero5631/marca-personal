"use client";
import { useEffect, useRef } from "react";

export default function Contacto() {
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
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" className="relative overflow-hidden" style={{ padding: "9rem 0 8rem" }} ref={sectionRef}>
      {/* Fondo */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, #162B60 100%)" }}
        aria-hidden="true"
      />

      {/* Patron puntillado sutil */}
      <div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,169,110,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Watermark nombre — muy sutil */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-script italic whitespace-nowrap"
          style={{ fontSize: "clamp(3rem, 9vw, 7rem)", color: "rgba(201,169,110,0.04)", lineHeight: 1 }}
        >
          Francesca Valdivieso Montero
        </span>
      </div>

      {/* Contenido */}
      <div className="relative z-20 max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-4 reveal stagger-1" style={{ color: "var(--gold)" }}>
            Contacto
          </p>
          <h2
            className="font-display font-bold text-white mb-5 reveal stagger-2"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.15 }}
          >
            ¿Necesitas orientación legal?
          </h2>
          <div className="gold-line-short mx-auto mb-6" />
          <p
            className="font-body font-light leading-relaxed reveal stagger-3"
            style={{ color: "rgba(248,245,240,0.6)", fontSize: "1.05rem", maxWidth: "480px", margin: "0 auto" }}
          >
            Agenda tu asesoría online hoy. Te respondo con la
            seriedad y cercanía que tu caso merece.
          </p>
        </div>

        {/* Contactos — layout horizontal sin cajas de color */}
        <div
          className="grid sm:grid-cols-2 gap-0 reveal stagger-3"
          style={{ borderTop: "1px solid rgba(201,169,110,0.2)", borderBottom: "1px solid rgba(201,169,110,0.2)" }}
        >
          {/* WhatsApp — navy con acento dorado, NO verde */}
          <a
            href="https://wa.me/56987605936"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 cursor-pointer transition-all duration-300 hover:bg-white/5"
            style={{
              padding: "2.5rem",
              borderRight: "1px solid rgba(201,169,110,0.15)",
            }}
            aria-label="Contactar por WhatsApp al +56 9 8760 5936"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
              className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
              style={{ color: "var(--gold)" }}
              stroke="currentColor"
              strokeWidth="1.4"
              aria-hidden="true"
            >
              <path d="M10 1.5C5.3 1.5 1.5 5.3 1.5 10c0 1.5.4 2.9 1.1 4.1L1.5 18.5l4.5-1.1c1.2.6 2.5 1 4 1 4.7 0 8.5-3.8 8.5-8.5S14.7 1.5 10 1.5zM14 12.8c-.2.5-.9.9-1.5 1-.4.1-.9.1-2.7-.6-2.3-.8-3.7-3.1-3.8-3.3-.1-.2-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.8.2-.2.5-.3.7-.3h.5c.2 0 .4.1.5.4.2.5.7 1.7.8 1.8.1.1.1.3 0 .5-.1.2-.1.3-.3.5-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1.8.7 1.4.9 1.7 1 .3.1.5 0 .6-.1.2-.2.6-.7.8-.9.2-.3.4-.2.6-.1.3.1 1.7.8 2 .9.3.1.5.2.6.3.1.3.1.9-.1 1.4z"/>
            </svg>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                WhatsApp
              </p>
              <p className="font-display font-bold text-white" style={{ fontSize: "1.2rem" }}>
                +56 9 8760 5936
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:abogada.valdivieso.montero@gmail.com"
            className="group flex items-center gap-5 cursor-pointer transition-all duration-300 hover:bg-white/5"
            style={{ padding: "2.5rem" }}
            aria-label="Enviar email a abogada.valdivieso.montero@gmail.com"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
              style={{ color: "var(--gold)" }}
              aria-hidden="true"
            >
              <rect x="2" y="4" width="18" height="14" rx="2"/>
              <path d="M2 7l9 6 9-6"/>
            </svg>
            <div className="min-w-0">
              <p className="font-body text-xs uppercase tracking-[0.15em] mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                Email
              </p>
              <p className="font-body text-sm text-white truncate">
                abogada.valdivieso.montero@gmail.com
              </p>
            </div>
          </a>
        </div>

        {/* Nota confidencialidad */}
        <div className="text-center mt-10 reveal stagger-4">
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
            Información tratada con absoluta confidencialidad
          </p>
        </div>
      </div>
    </section>
  );
}
