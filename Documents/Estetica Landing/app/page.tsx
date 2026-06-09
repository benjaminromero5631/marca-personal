"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import LeadForm from "@/components/LeadForm";
import { config } from "@/lib/config";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <TrustBar />
        <Testimonials />
        <FinalCTA onOpenModal={() => setModalOpen(true)} />
        <footer
          style={{
            background: "var(--bg)",
            padding: "40px 0",
            textAlign: "center",
            borderTop: "1px solid var(--hairline)",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 13, letterSpacing: "0.04em" }}>
            © {config.clinicName} · {config.clinicCity}
          </p>
        </footer>
      </main>
      <LeadForm open={modalOpen} onClose={() => setModalOpen(false)} ctaText={config.ctaText} />
    </>
  );
}
