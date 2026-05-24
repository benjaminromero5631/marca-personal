"use client";
import { useEffect, useRef } from "react";

export default function Contacto() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
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
      id="contacto"
      style={{ background: "var(--cream)", padding: "5rem 0 6rem" }}
      ref={sectionRef}
    >
      <div className="max-w-2xl mx-auto px-5 md:px-6">

        {/* Header */}
        <div className="mb-8 reveal stagger-1">
          <p className="font-body text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            Contacto
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: "clamp(2rem, 8vw, 3rem)", color: "var(--navy)", lineHeight: 1.1 }}
          >
            ¿Necesitas orientación legal?
          </h2>
          <div className="gold-line-short mb-5" />
          <p
            className="font-body font-light leading-relaxed"
            style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.8 }}
          >
            Agenda tu asesoría online hoy. Te respondo con la
            seriedad y cercanía que tu caso merece.
          </p>
        </div>

        {/* Botones de contacto — apilados verticalmente, full-width */}
        <div className="flex flex-col gap-3 reveal stagger-2">

          {/* WhatsApp — navy, NO verde */}
          <a
            href="https://wa.me/56987605936"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 cursor-pointer transition-all duration-200 hover:brightness-110 active:brightness-90"
            style={{
              background: "var(--navy)",
              color: "white",
              padding: "18px 20px",
              minHeight: "64px",
              textDecoration: "none",
            }}
            aria-label="Contactar por WhatsApp al +56 9 8760 5936"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ flexShrink: 0, color: "var(--gold)" }} aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] mb-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                WhatsApp
              </p>
              <p className="font-display font-bold" style={{ fontSize: "1.1rem" }}>
                +56 9 8760 5936
              </p>
            </div>
          </a>

          {/* Email — outlined navy */}
          <a
            href="mailto:abogada.valdivieso.montero@gmail.com"
            className="flex items-center gap-4 cursor-pointer transition-all duration-200 hover:bg-navy/5 active:opacity-80"
            style={{
              border: "1.5px solid var(--navy)",
              color: "var(--charcoal)",
              padding: "18px 20px",
              minHeight: "64px",
              textDecoration: "none",
            }}
            aria-label="Enviar email a abogada.valdivieso.montero@gmail.com"
          >
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--navy)" }} aria-hidden="true">
              <rect x="2" y="4" width="18" height="14" rx="2"/>
              <path d="M2 7l9 6 9-6"/>
            </svg>
            <div className="min-w-0">
              <p className="font-body text-xs uppercase tracking-[0.15em] mb-0.5" style={{ color: "var(--muted)" }}>
                Email
              </p>
              <p className="font-body text-sm truncate" style={{ color: "var(--charcoal)" }}>
                abogada.valdivieso.montero@gmail.com
              </p>
            </div>
          </a>
        </div>

        {/* Nota confidencialidad */}
        <div className="text-center mt-7 reveal stagger-3">
          <p className="font-body text-xs" style={{ color: "var(--muted)", letterSpacing: "0.04em" }}>
            🔒 Información tratada con absoluta confidencialidad
          </p>
        </div>
      </div>
    </section>
  );
}
