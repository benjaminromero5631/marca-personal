export interface Producto {
  id: string
  nombre: string
  descripcion: string
  imagen: string
  badge: string
}

export interface Stat {
  valor: string
  etiqueta: string
}

export interface HeroContent {
  headline: string
  subheadline: string
  ctaText: string
  ctaHref: string
}

export interface NosotrosContent {
  titulo: string
  texto: string
  stats: Stat[]
}

export interface NavLink {
  label: string
  href: string
}
