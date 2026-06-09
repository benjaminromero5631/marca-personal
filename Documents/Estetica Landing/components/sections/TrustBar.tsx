import { config } from "@/lib/config";

const icons: Record<string, React.ReactNode> = {
  certificate: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 52, height: 52 }}>
      <path d="M9 12l2 2 4-4" /><path d="M12 2l7 3v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V5l7-3z" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 52, height: 52 }}>
      <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /><circle cx="12" cy="12" r="9" />
    </svg>
  ),
  "shield-check": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 52, height: 52 }}>
      <path d="M12 2l2.4 6.9H22l-6 4.6 2.3 7L12 16.9 5.7 20.5l2.3-7-6-4.6h7.6L12 2z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ width: 52, height: 52 }}>
      <path d="M17 20v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9.5" cy="7" r="3.5" />
      <path d="M22 20v-2a4 4 0 00-3-3.87M16 3.13A4 4 0 0117 11" />
    </svg>
  ),
};

export default function TrustBar() {
  return (
    <section
      style={{
        background: "var(--bg-alt)",
        padding: "92px 0",
        borderTop: "1px solid var(--hairline)",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 14,
          }}
        >
          {config.trustItems.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 16,
                padding: "30px 20px",
              }}
            >
              <div style={{ color: "var(--celeste)" }}>{icons[item.icon]}</div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--white)",
                  fontSize: 23,
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
