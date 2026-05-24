"use client";

export default function MobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
      style={{
        height: "64px",
        paddingBottom: "env(safe-area-inset-bottom)",
        background: "var(--navy)",
      }}
      role="navigation"
      aria-label="Contacto rápido"
    >
      {/* Llamar */}
      <a
        href="tel:+56987605936"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-opacity duration-200 active:opacity-70"
        style={{
          background: "var(--navy)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          color: "white",
          minHeight: "44px",
          textDecoration: "none",
        }}
        aria-label="Llamar a +56 9 8760 5936"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
        <span className="font-body" style={{ fontSize: "10px", letterSpacing: "0.04em", color: "rgba(255,255,255,0.8)" }}>
          Llamar
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/56987605936"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-opacity duration-200 active:opacity-70"
        style={{
          background: "var(--gold)",
          color: "var(--navy)",
          minHeight: "44px",
          textDecoration: "none",
        }}
        aria-label="WhatsApp: Escríbeme ahora"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
        <span className="font-body font-medium" style={{ fontSize: "10px", letterSpacing: "0.04em", color: "var(--navy)" }}>
          WhatsApp
        </span>
      </a>
    </div>
  );
}
