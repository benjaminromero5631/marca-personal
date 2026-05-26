"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#inicio",    label: "Inicio",    num: "01" },
  { href: "#sobre-mi",  label: "Sobre mí",  num: "02" },
  { href: "#servicios", label: "Servicios", num: "03" },
  { href: "#asesoria",  label: "Asesorías", num: "04" },
  { href: "#contacto",  label: "Contacto",  num: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeSection, setActive]  = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  /* Bloquear scroll cuando el menu esta abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Navegación principal"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(15,30,74,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
          transition: "background 400ms ease, border-color 400ms ease",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between" style={{ height: "68px" }}>
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-2.5 cursor-pointer"
            aria-label="Inicio"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <line x1="14" y1="3" x2="14" y2="10" stroke="#C9A96E" strokeWidth="1.5"/>
              <line x1="5"  y1="10" x2="23" y2="10" stroke="#C9A96E" strokeWidth="1.5"/>
              <line x1="5"  y1="10" x2="1"  y2="19" stroke="#C9A96E" strokeWidth="1.5"/>
              <line x1="23" y1="10" x2="27" y2="19" stroke="#C9A96E" strokeWidth="1.5"/>
              <ellipse cx="3"  cy="19" rx="3" ry="1.8" stroke="#C9A96E" strokeWidth="1.2"/>
              <ellipse cx="25" cy="19" rx="3" ry="1.8" stroke="#C9A96E" strokeWidth="1.2"/>
              <line x1="10" y1="25" x2="18" y2="25" stroke="#C9A96E" strokeWidth="1.5"/>
              <line x1="14" y1="10" x2="14" y2="25" stroke="#C9A96E" strokeWidth="1.2"/>
            </svg>
            <span className="font-script italic" style={{ fontSize: "1.1rem", color: "#E8D5B0" }}>
              Francesca Valdivieso Montero
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-sm cursor-pointer relative pb-0.5 transition-colors duration-200"
                style={{ color: activeSection === l.href.slice(1) ? "#C9A96E" : "rgba(248,245,240,0.72)" }}
              >
                {l.label}
                {activeSection === l.href.slice(1) && (
                  <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--gold)" }} />
                )}
              </Link>
            ))}
            <a
              href="tel:+56987605936"
              className="font-body text-sm cursor-pointer transition-colors duration-200 hover:text-gold"
              style={{ color: "rgba(248,245,240,0.55)" }}
              aria-label="Llamar al +56 9 8760 5936"
            >
              +56 9 8760 5936
            </a>
            <a
              href="https://wa.me/56987605936"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold px-5 py-2.5 cursor-pointer transition-all duration-200 hover:brightness-110"
              style={{ background: "var(--gold)", color: "var(--navy)" }}
            >
              WhatsApp →
            </a>
          </div>

          {/* Hamburger móvil */}
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            style={{ minWidth: "44px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className="block h-px transition-all duration-300 origin-center"
                style={{ background: "var(--gold)", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }}
              />
              <span
                className="block h-px transition-all duration-300"
                style={{ background: "var(--gold)", opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-px transition-all duration-300 origin-center"
                style={{ background: "var(--gold)", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Menu overlay full-screen móvil */}
      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col transition-all duration-400"
        style={{
          background: "var(--navy)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          transition: "opacity 300ms ease, transform 300ms ease",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-2 px-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="w-full flex items-center gap-4 py-4 cursor-pointer transition-colors duration-200"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                color: activeSection === l.href.slice(1) ? "var(--gold)" : "rgba(248,245,240,0.85)",
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span
                className="font-script italic flex-shrink-0"
                style={{ fontSize: "0.75rem", color: "rgba(201,169,110,0.4)", width: "1.5rem" }}
                aria-hidden="true"
              >
                {l.num}
              </span>
              <span className="font-display" style={{ fontSize: "1.6rem" }}>
                {l.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Info de contacto en el overlay */}
        <div className="px-8 pb-24 text-center">
          <p className="font-body text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(201,169,110,0.5)" }}>
            Contacto directo
          </p>
          <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            +56 9 8760 5936
          </p>
        </div>
      </div>
    </>
  );
}
