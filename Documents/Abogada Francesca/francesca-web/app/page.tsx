import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import TrustBar     from "@/components/TrustBar";
import About        from "@/components/About";
import Servicios    from "@/components/Servicios";
import ComoFunciona from "@/components/ComoFunciona";
import Testimonios  from "@/components/Testimonios";
import Contacto     from "@/components/Contacto";
import Footer       from "@/components/Footer";
import MobileBar    from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <TrustBar />
        <About />
        <Servicios />
        <ComoFunciona />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
