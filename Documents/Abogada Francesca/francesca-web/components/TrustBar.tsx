"use client";
import { useEffect, useRef } from "react";

const stats = [
  { num: "+500",  label: "Casos"        },
  { num: "8+",    label: "Años exp."    },
  { num: "100%",  label: "Online"       },
  { num: "Chile", label: "Todo el país" },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      }),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--navy)",
        borderTop: "1px solid rgba(201,169,110,0.15)",
        borderBottom: "1px solid rgba(201,169,110,0.15)",
        padding: "3rem 1.5rem",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal stagger-${i + 1} text-center md:text-left`}
            >
              <p
                className="font-display font-bold"
                style={{ fontSize: "2rem", color: "var(--gold)", lineHeight: 1 }}
              >
                {s.num}
              </p>
              <p
                className="font-body uppercase tracking-[0.15em] mt-1"
                style={{ fontSize: "11px", color: "var(--gold-light)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
