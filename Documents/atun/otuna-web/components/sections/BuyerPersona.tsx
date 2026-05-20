const ATRIBUTOS = [
  { label: "Edad", valor: "28 — 45 años" },
  { label: "Perfil", valor: "Jefe/a de hogar, clase media chilena" },
  { label: "Contexto", valor: "Compra en supermercado 1—2 veces por semana" },
  { label: "Ingreso", valor: "$600.000 — $1.200.000 mensual" },
  { label: "Prioridad", valor: "Relación calidad-precio, no el precio más bajo" },
  { label: "Canal", valor: "Lider, Jumbo, Santa Isabel" },
]

const DOLORES = [
  "Compra el atún más barato y después se arrepiente de la textura.",
  "No sabe distinguir entre marcas — todas le parecen iguales.",
  "Quiere comer sano pero no tiene tiempo para cocinar complejo.",
]

const GANANCIAS = [
  "Que la lata se vea premium sin pagar precio de premium.",
  "Confiar en que lo que comprá es 100% natural.",
  "Sentir que elige bien, no que compra lo que quedaba.",
]

export default function BuyerPersona() {
  return (
    <section
      id="buyer-persona"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 48px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <p
          style={{
            fontFamily: "var(--font-anton, Impact, sans-serif)",
            fontSize: "13px",
            color: "#1a4a9a",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          ESTRATEGIA DE MARCA
        </p>
        <h2
          style={{
            fontFamily: "var(--font-anton, Impact, sans-serif)",
            fontSize: "52px",
            color: "#1a4a9a",
            margin: 0,
          }}
        >
          Buyer persona del rebranding
        </h2>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Columna izquierda — perfil */}
        <div>
          {/* Avatar placeholder */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#EAF3FB",
              border: "3px solid #1a4a9a",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a4a9a" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-anton, Impact, sans-serif)",
              fontSize: "26px",
              color: "#1a4a9a",
              marginBottom: "4px",
            }}
          >
            "La Caro"
          </h3>
          <p
            style={{
              fontFamily: "var(--font-dm-sans, system-ui)",
              fontSize: "13px",
              color: "#888",
              marginBottom: "28px",
            }}
          >
            Representa al comprador objetivo de Otuna post-rebranding
          </p>

          {/* Atributos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {ATRIBUTOS.map((a) => (
              <div
                key={a.label}
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "baseline",
                  borderBottom: "1px solid #f0f0f0",
                  paddingBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-anton, Impact, sans-serif)",
                    fontSize: "11px",
                    color: "#1a4a9a",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    minWidth: "90px",
                    flexShrink: 0,
                  }}
                >
                  {a.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans, system-ui)",
                    fontSize: "14px",
                    color: "#3a3a3a",
                  }}
                >
                  {a.valor}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha — dolores y ganancias */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Dolores */}
          <div
            style={{
              backgroundColor: "#fff5f5",
              border: "1px solid #fde0e0",
              borderRadius: "12px",
              padding: "24px 28px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-anton, Impact, sans-serif)",
                fontSize: "13px",
                color: "#c0392b",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Dolores
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {DOLORES.map((d, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-dm-sans, system-ui)",
                    fontSize: "14px",
                    color: "#3a3a3a",
                    lineHeight: 1.6,
                    paddingLeft: "16px",
                    borderLeft: "3px solid #c0392b",
                  }}
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Ganancias */}
          <div
            style={{
              backgroundColor: "#f0faf4",
              border: "1px solid #c3e6cb",
              borderRadius: "12px",
              padding: "24px 28px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-anton, Impact, sans-serif)",
                fontSize: "13px",
                color: "#27ae60",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Ganancias esperadas
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {GANANCIAS.map((g, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-dm-sans, system-ui)",
                    fontSize: "14px",
                    color: "#3a3a3a",
                    lineHeight: 1.6,
                    paddingLeft: "16px",
                    borderLeft: "3px solid #27ae60",
                  }}
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
