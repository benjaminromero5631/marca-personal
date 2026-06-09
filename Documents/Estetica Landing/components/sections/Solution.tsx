import FadeIn from "@/components/FadeIn";
import { config } from "@/lib/config";

const steps = [
  {
    title: "Diagnóstico real de tu piel",
    // REEMPLAZAR con descripción específica del tratamiento
    desc: "Antes de tocar nada, evaluamos tu historial, tipo de piel y objetivos reales. Sin suposiciones.",
  },
  {
    title: "Protocolo 100% personalizado",
    // REEMPLAZAR con descripción específica del tratamiento
    desc: "Cada parámetro del tratamiento se ajusta a ti. No existe un protocolo genérico aquí.",
  },
  {
    title: "Resultados visibles y sostenibles",
    // REEMPLAZAR con descripción específica del tratamiento
    desc: "Con seguimiento real después de cada sesión para que los resultados se mantengan.",
  },
];

export default function Solution() {
  return (
    <section
      className="w-full px-4 py-24"
      style={{
        backgroundColor: "#0A0A0A",
        backgroundImage: `radial-gradient(ellipse 60% 40% at 50% 100%, ${config.accentColor}0D, transparent)`,
      }}
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="font-display text-[42px] leading-tight text-center mb-14">
            Así funciona {config.treatment} en {config.clinicName}
          </h2>
        </FadeIn>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div
                className="flex gap-6 py-8"
                style={{
                  borderBottom:
                    i < steps.length - 1
                      ? `1px solid ${config.accentColor}20`
                      : "none",
                }}
              >
                <span
                  className="font-display text-[32px] leading-none shrink-0 pt-1"
                  style={{ color: config.accentColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-body text-[16px] font-bold text-fg mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-[14px] leading-[1.7] text-secondary">
                    {step.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
