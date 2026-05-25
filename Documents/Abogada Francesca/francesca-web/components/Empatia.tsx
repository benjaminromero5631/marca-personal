"use client";
import { useEffect, useRef } from "react";

export default function Empatia() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      }),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--cream)", padding: "5rem 1.25rem" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <h2
          className="font-serif font-bold reveal stagger-1"
          style={{ fontSize: "clamp(1.8rem, 6vw, 2.4rem)", color: "var(--navy)", lineHeight: 1.2, marginBottom: "1.25rem" }}
        >
          Sabemos que no es fácil<br />tomar esta decisión.
        </h2>
        <p
          className="font-body font-light reveal stagger-2"
          style={{ fontSize: "16px", color: "var(--charcoal)", lineHeight: 1.8 }}
        >
          Cuando se trata de tu familia, cada decisión importa.
          Estoy aquí para acompañarte con claridad, seriedad y cercanía real.
        </p>
      </div>
    </section>
  );
}
