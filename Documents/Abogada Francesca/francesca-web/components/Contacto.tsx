"use client";
import { useEffect, useRef } from "react";

export default function Contacto() {
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
    <section
      id="contacto"
      ref={ref}
      style={{
        background: "var(--navy)",
        padding: "6rem 1.25rem",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "radial-gradient(rgba(201,169,110,0.04) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Marca de agua */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-script italic text-center"
          style={{ fontSize: "clamp(4rem, 18vw, 13rem)", color: "rgba(201,169,110,0.03)", lineHeight: 1, whiteSpace: "nowrap" }}
        >
          Francesca Valdivieso Montero
        </span>
      </div>

      <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

        <h2
          className="font-serif font-bold reveal stagger-1"
          style={{ fontSize: "clamp(2.4rem, 8vw, 3.75rem)", color: "white", lineHeight: 1.05, marginBottom: "1rem" }}
        >
          Tu familia merece<br />la mejor defensa.<br />
          <span style={{ color: "var(--gold)" }}>Hablemos hoy.</span>
        </h2>

        <p
          className="font-body font-light reveal stagger-2"
          style={{ fontSize: "16px", color: "rgba(232,213,176,0.8)", lineHeight: 1.75, marginBottom: "2.5rem" }}
        >
          No enfrentes esto solo. Agenda tu asesoría online hoy.
        </p>

        <div className="reveal stagger-3" style={{ display: "flex", flexDirection: "column", gap: "0.875rem", alignItems: "center" }}>
          <a
            href="https://wa.me/56987605936"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold cursor-pointer transition-all duration-200 hover:brightness-110 active:brightness-90 flex items-center justify-center gap-3"
            style={{
              background: "var(--gold)",
              color: "var(--navy)",
              padding: "18px 32px",
              fontSize: "1rem",
              width: "100%",
              maxWidth: "400px",
              minHeight: "56px",
              textDecoration: "none",
            }}
            aria-label="Contactar por WhatsApp al +56 9 8760 5936"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            WhatsApp: +56 9 8760 5936
          </a>

          <a
            href="mailto:abogada.valdivieso.montero@gmail.com"
            className="font-body font-light cursor-pointer transition-all duration-200 hover:text-gold-light"
            style={{ fontSize: "14px", color: "rgba(232,213,176,0.7)", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            abogada.valdivieso.montero@gmail.com
          </a>
        </div>

        <p className="font-body reveal stagger-4" style={{ fontSize: "12px", color: "var(--muted)", marginTop: "1.5rem" }}>
          🔒 Información tratada con absoluta confidencialidad
        </p>
      </div>
    </section>
  );
}
