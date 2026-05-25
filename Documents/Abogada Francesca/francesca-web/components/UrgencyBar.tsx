export default function UrgencyBar() {
  return (
    <div style={{ background: "var(--gold)", padding: "12px 20px" }}>
      <p className="font-body text-center" style={{ fontSize: "14px", color: "var(--navy)" }}>
        ⚡ Primera consulta por WhatsApp sin costo —{" "}
        <a
          href="https://wa.me/56987605936"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline"
          style={{ color: "var(--navy)" }}
        >
          Escríbeme ahora →
        </a>
      </p>
    </div>
  );
}
