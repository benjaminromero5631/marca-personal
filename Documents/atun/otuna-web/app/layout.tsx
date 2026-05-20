import type { Metadata } from "next"
import { Anton, DM_Sans } from "next/font/google"
import "./globals.css"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Otuna — El sabor del mar en tu mesa",
  description:
    "Atún Otuna, calidad y tradición en cada lata. Marca chilena de atún en conserva.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${anton.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
