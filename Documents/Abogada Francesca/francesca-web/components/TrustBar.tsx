"use client";

export default function TrustBar() {
  return (
    <div
      style={{
        background: "var(--navy)",
        borderTop: "1px solid rgba(201,169,110,0.15)",
        borderBottom: "1px solid rgba(201,169,110,0.15)",
        padding: "1.5rem 1.5rem",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="font-body text-center tracking-[0.18em] uppercase"
          style={{ fontSize: "0.72rem", color: "var(--gold-light)" }}
        >
          +500 casos&nbsp;&nbsp;·&nbsp;&nbsp;8+ años de experiencia&nbsp;&nbsp;·&nbsp;&nbsp;100% Online&nbsp;&nbsp;·&nbsp;&nbsp;Todo Chile
        </p>
      </div>
    </div>
  );
}
