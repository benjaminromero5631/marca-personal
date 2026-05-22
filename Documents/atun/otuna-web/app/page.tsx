import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import BuyerPersona from "@/components/sections/BuyerPersona"
import Branding from "@/components/sections/Branding"
import EtiquetaProduccion from "@/components/sections/EtiquetaProduccion"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BuyerPersona />
      <Branding />
      <EtiquetaProduccion />
    </main>
  )
}
