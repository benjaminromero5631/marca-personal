"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    pregunta: "¿Cuánto cuesta una asesoría?",
    respuesta: "El valor de la asesoría varía según la complejidad del caso. Cotiza tu asesoría por WhatsApp — cuéntame tu situación y te informo con claridad antes de agendar.",
  },
  {
    pregunta: "¿Puedo obtener asesoría desde cualquier región de Chile?",
    respuesta: "Sí. Todas mis asesorías son online, por videollamada. Puedes estar en cualquier ciudad o región de Chile y recibir atención con la misma calidad.",
  },
  {
    pregunta: "¿Cuánto demora un juicio de pensión de alimentos?",
    respuesta: "Depende de cada caso y tribunal. En la asesoría te explico los tiempos estimados para tu situación específica.",
  },
  {
    pregunta: "¿Mis datos son confidenciales?",
    respuesta: "Absolutamente. Todo lo que me cuentes está protegido por el secreto profesional del abogado. Tu información nunca será compartida con terceros.",
  },
  {
    pregunta: "¿Qué pasa si contacto por WhatsApp?",
    respuesta: "Te respondo personalmente con la mayor brevedad posible. Cuéntame brevemente tu situación y coordinamos una asesoría online si corresponde. Sin compromisos ni costos por el primer contacto.",
  },
];

function FAQItem({ item, open, onToggle }: { item: (typeof faqs)[0]; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(201,169,110,0.2)" }}>
      <button
        className="w-full flex items-center justify-between text-left cursor-pointer"
        style={{ padding: "20px 0", background: "none", border: "none", minHeight: "44px" }}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="font-body font-semibold" style={{ fontSize: "16px", color: "var(--navy)", lineHeight: 1.4, paddingRight: "1rem" }}>
          {item.pregunta}
        </span>
        <span
          className="flex-shrink-0 font-body transition-transform duration-300"
          style={{ color: "var(--gold)", fontSize: "20px", lineHeight: 1, transform: open ? "rotate(45deg)" : "none" }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="font-body font-light"
              style={{ fontSize: "15px", color: "var(--charcoal)", lineHeight: 1.8, paddingBottom: "20px" }}
            >
              {item.respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: "var(--cream)", padding: "5rem 0" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.25rem" }}>

        <div className="reveal stagger-1" style={{ marginBottom: "2.5rem" }}>
          <p className="font-body uppercase tracking-[0.25em]" style={{ fontSize: "11px", color: "var(--gold)", marginBottom: "0.5rem" }}>
            Preguntas frecuentes
          </p>
          <h2 className="font-serif font-bold" style={{ fontSize: "clamp(1.8rem, 5vw, 2.4rem)", color: "var(--navy)", lineHeight: 1.1 }}>
            Resuelve tus dudas
          </h2>
        </div>

        <div className="reveal stagger-2">
          {faqs.map((item, i) => (
            <FAQItem
              key={item.pregunta}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
