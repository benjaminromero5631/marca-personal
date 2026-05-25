import Link from "next/link";

const links = [
  { href: "#inicio",    label: "Inicio" },
  { href: "#sobre-mi",  label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#asesoria",  label: "Asesorías" },
  { href: "#contacto",  label: "Contacto" },
];

function ScalesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <line x1="14" y1="3"  x2="14" y2="10" stroke="#C9A96E" strokeWidth="1.5"/>
      <line x1="5"  y1="10" x2="23" y2="10" stroke="#C9A96E" strokeWidth="1.5"/>
      <line x1="5"  y1="10" x2="1"  y2="19" stroke="#C9A96E" strokeWidth="1.5"/>
      <line x1="23" y1="10" x2="27" y2="19" stroke="#C9A96E" strokeWidth="1.5"/>
      <ellipse cx="3"  cy="19" rx="3"  ry="1.8" stroke="#C9A96E" strokeWidth="1.2"/>
      <ellipse cx="25" cy="19" rx="3"  ry="1.8" stroke="#C9A96E" strokeWidth="1.2"/>
      <line x1="10" y1="25" x2="18" y2="25" stroke="#C9A96E" strokeWidth="1.5"/>
      <line x1="14" y1="10" x2="14" y2="25" stroke="#C9A96E" strokeWidth="1.2"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#0A1535", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", textAlign: "center" }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem", marginBottom: "1.5rem" }}>
          <ScalesIcon />
          <span className="font-script italic" style={{ fontSize: "1.15rem", color: "#E8D5B0" }}>
            Francesca Valdivieso
          </span>
          <span className="font-body" style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
            · Abogada de Familia
          </span>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation" style={{ marginBottom: "1.25rem" }}>
          <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.25rem 1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-body text-sm" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Instagram */}
        <div style={{ marginBottom: "1.5rem" }}>
          <a
            href="https://instagram.com/abogada.valdivieso"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm"
            style={{ color: "rgba(201,169,110,0.6)", textDecoration: "none" }}
            aria-label="Instagram @abogada.valdivieso"
          >
            @abogada.valdivieso
          </a>
        </div>

        {/* Copyright */}
        <p className="font-script italic" style={{ fontSize: "13px", color: "rgba(201,169,110,0.4)" }}>
          &copy; 2025 Francesca Valdivieso Montero &middot; Abogada de Familia
        </p>
      </div>
    </footer>
  );
}
