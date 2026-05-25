import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import TrustBar      from "@/components/TrustBar";
import UrgencyBar    from "@/components/UrgencyBar";
import Empatia       from "@/components/Empatia";
import Situaciones   from "@/components/Situaciones";
import Servicios     from "@/components/Servicios";
import About         from "@/components/About";
import ComoFunciona  from "@/components/ComoFunciona";
import Testimonios   from "@/components/Testimonios";
import FAQ           from "@/components/FAQ";
import Contacto      from "@/components/Contacto";
import Footer        from "@/components/Footer";
import MobileBar     from "@/components/MobileBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <UrgencyBar />
        <Empatia />
        <Situaciones />
        <Servicios />
        <About />
        <ComoFunciona />
        <Testimonios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <MobileBar />
      <WhatsAppFloat />
    </>
  );
}
