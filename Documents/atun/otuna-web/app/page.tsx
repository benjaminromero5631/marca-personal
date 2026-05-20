import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import BuyerPersona from "@/components/sections/BuyerPersona"
import Branding from "@/components/sections/Branding"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BuyerPersona />
      <Branding />
    </main>
  )
}
