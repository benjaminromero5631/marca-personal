import Image from "next/image"
import { PRODUCTOS } from "@/lib/data"

export default function Productos() {
  return (
    <section
      id="productos"
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 48px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
          LO QUE OFRECEMOS
        </p>
        <h2
          style={{
            fontFamily: "var(--font-anton, Impact, sans-serif)",
            fontSize: "52px",
            color: "#1a4a9a",
            textAlign: "center",
            margin: 0,
          }}
        >
          Nuestros productos
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {PRODUCTOS.map((producto) => (
          <div
            key={producto.id}
            style={{
              background: "#ffffff",
              border: "1px solid #e0e8f0",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {/* Imagen */}
            <div
              style={{
                height: "260px",
                backgroundColor: "#EAF3FB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {producto.imagen ? (
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                />
              ) : (
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    backgroundColor: "#1a4a9a",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>

            {/* Texto */}
            <div style={{ padding: "20px 24px 28px" }}>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans, system-ui)",
                  fontSize: "11px",
                  color: "#1a4a9a",
                  backgroundColor: "#EAF3FB",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  display: "inline-block",
                }}
              >
                {producto.badge}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-anton, Impact, sans-serif)",
                  fontSize: "22px",
                  color: "#1a4a9a",
                  marginTop: "10px",
                  marginBottom: 0,
                }}
              >
                {producto.nombre}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans, system-ui)",
                  fontSize: "14px",
                  color: "#5a5a5a",
                  lineHeight: 1.6,
                  marginTop: "6px",
                  marginBottom: 0,
                }}
              >
                {producto.descripcion}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
