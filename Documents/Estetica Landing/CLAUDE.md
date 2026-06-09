# Landing Clínica Estética — Zeltra Template

## Repositorio base
https://github.com/benjaminromero5631/template-landing.git

## Cómo deployar un cliente nuevo
Cuando Benjamin escriba:
"nuevo cliente: [nombre] / ciudad: [ciudad] / tratamiento: [tratamiento]"

Ejecuta en orden:

1. Clonar
```bash
git clone https://github.com/benjaminromero5631/template-landing.git [nombre-slug]-landing
cd [nombre-slug]-landing && npm install
```

2. Editar `lib/config.ts` con los datos del cliente:
   - `clinicName`, `clinicCity`, `treatment`, `treatmentTagline`, `treatmentDescription`
   - `heroTag`, `ctaText`, `metaTitle`, `metaDescription`
   - `trustItems` y `testimonials` según el cliente
   - `vslVideoUrl` → dejar vacío `""` hasta que Benjamin confirme

3. Reemplazar `public/logo.png` con el logo del cliente

4. `npm run build`

5. `vercel --prod --name [nombre-slug]-landing`

6. Confirmar URL a Benjamin

## Reglas
- Nunca modificar componentes al deployar — solo `config.ts`
- `vslVideoUrl` siempre vacío hasta que Benjamin confirme la URL del video
- No deployar si el build tiene errores

## Estructura
```
template-landing/
├── app/
│   ├── page.tsx
│   ├── gracias/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── VSLPlayer.tsx
│   ├── LeadForm.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── TrustBar.tsx
│       ├── Testimonials.tsx
│       └── FinalCTA.tsx
├── lib/
│   └── config.ts        ← ÚNICO archivo que cambia por cliente
└── public/
    └── logo.png
```

## Stack
- Next.js + TypeScript
- CSS variables (no Tailwind en componentes)
- Vercel (hosting)
