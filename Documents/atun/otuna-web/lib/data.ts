import type { HeroContent, NavLink, NosotrosContent, Producto } from "@/types"

export const HERO_CONTENT: HeroContent = {
  headline: "EL SABOR DEL MAR EN TU MESA",
  subheadline: "Atún Otuna, calidad y tradición en cada lata.",
  ctaText: "Ver productos",
  ctaHref: "#productos",
}

export const PRODUCTOS: Producto[] = [
  {
    id: "atun-agua",
    nombre: "Atún en Agua",
    descripcion: "Suave y natural, ideal para ensaladas y dietas saludables.",
    imagen: "",
    badge: "Bajo en grasa",
  },
  {
    id: "atun-aceite",
    nombre: "Atún en Aceite",
    descripcion: "Textura suave y sabor intenso, perfecto para pastas y sándwiches.",
    imagen: "",
    badge: "Sabor intenso",
  },
  {
    id: "atun-tomate",
    nombre: "Atún en Salsa de Tomate",
    descripcion: "La combinación perfecta del mar con el toque de tomate natural.",
    imagen: "",
    badge: "Receta especial",
  },
]

export const NOSOTROS_CONTENT: NosotrosContent = {
  titulo: "NUESTRA HISTORIA",
  texto:
    "Otuna nació de la pasión por llevar lo mejor del océano a cada hogar chileno. Con décadas de experiencia en la industria pesquera, seleccionamos cuidadosamente el atún de mayor calidad para garantizar que cada lata entregue frescura, sabor y valor nutricional incomparables. Nuestra misión es simple: acercar el mar a tu mesa con productos 100% naturales y responsables con el medio ambiente.",
  stats: [
    { valor: "30+", etiqueta: "Años de experiencia" },
    { valor: "100%", etiqueta: "Ingredientes naturales" },
    { valor: "3", etiqueta: "Variedades premium" },
  ],
}

export const BRANDING_BASES = [
  {
    numero: "01",
    titulo: "El producto no se leía en góndola",
    descripcion: "La lata anterior se perdía entre la competencia. El nuevo diseño usa contraste fuerte y tipografía masiva para que Otuna se vea antes de que el consumidor la busque.",
  },
  {
    numero: "02",
    titulo: "La marca no transmitía los 30 años de historia",
    descripcion: "Décadas de tradición pesquera que el packaging antiguo ignoraba. El azul profundo y el dorado comunican confianza, experiencia y calidad sin necesidad de leerlo.",
  },
  {
    numero: "03",
    titulo: "El consumidor chileno compra con los ojos",
    descripcion: "Investigamos el comportamiento de compra en supermercados locales: el 70% de las decisiones se toman frente a la góndola. El rediseño habla primero y convence después.",
  },
]

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
]

export const FOOTER_CONTENT = {
  copyright: "© 2025 Otuna. Todos los derechos reservados.",
  credito: "Sitio desarrollado por Zeltra",
}
