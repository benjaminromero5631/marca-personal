import Link from "next/link"
import { NAV_LINKS } from "@/lib/data"

export default function Navbar() {
  return (
    <header style={{ backgroundColor: "#EAF3FB" }}>
      {/* Topbar */}
      <div
        className="flex items-center justify-between px-6 py-2"
        style={{ borderBottom: "1px solid rgba(26,74,154,0.1)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans, system-ui)",
            fontSize: "11px",
            letterSpacing: "3px",
            color: "#1a4a9a",
            textTransform: "uppercase",
          }}
        >
          CONECTEMOS
        </span>

        {/* Iconos redes sociales */}
        <div className="flex items-center gap-4">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" style={{ color: "#1a4a9a", opacity: 0.7 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" style={{ color: "#1a4a9a", opacity: 0.7 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          {/* X (Twitter) */}
          <a href="#" aria-label="X" style={{ color: "#1a4a9a", opacity: 0.7 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube" style={{ color: "#1a4a9a", opacity: 0.7 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z" />
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" aria-label="TikTok" style={{ color: "#1a4a9a", opacity: 0.7 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Navbar principal */}
      <div className="relative flex items-center justify-between px-6 py-4">
        {/* Hamburger */}
        <button aria-label="Abrir menú" className="flex flex-col gap-1.5 z-10">
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#1a4a9a" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#1a4a9a" }} />
          <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#1a4a9a" }} />
        </button>

        {/* Logo centrado */}
        <div className="absolute left-0 right-0 flex justify-center pointer-events-none">
          <Link
            href="#inicio"
            className="pointer-events-auto"
            style={{
              fontFamily: "var(--font-anton, Impact, sans-serif)",
              fontSize: "28px",
              letterSpacing: "6px",
              color: "#1a4a9a",
              textDecoration: "none",
            }}
          >
            OTUNA
          </Link>
        </div>

        {/* Lupa */}
        <button aria-label="Buscar" className="z-10" style={{ color: "#1a4a9a" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      {/* Línea divisoria parcial (no cruza todo el ancho) */}
      <div className="px-6">
        <div style={{ height: "1px", backgroundColor: "rgba(26,74,154,0.15)" }} />
      </div>
    </header>
  )
}
