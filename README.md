# HEMA Las Rozas

Sitio web para introducir las Artes Marciales Históricas Europeas (HEMA) en Las Rozas de Madrid. Especializado en Espada Larga, Ropera y Daga & Rodela.

## Estética

**"Renacentista limpio"** — fondo crema/marfil (#F5F0E8), acentos en borgoña (#7B1F2E), oro antiguo (#C4A84A) y negro cálido (#1A1008). Tipografía serif fina (Cormorant Garamond + Lora). Período de referencia: Baja Edad Media → Barroco (~1350–1700).

## Stack

- **Astro** v6 — static site generator
- **CSS puro** — custom properties, sin frameworks
- **JavaScript vanilla** — smooth scroll, nav interactivo, hamburger móvil
- **Netlify Forms** — formulario de contacto
- **Responsive** — mobile-first, 100% fluid

## Estructura

```
/
├── src/
│   ├── layouts/Layout.astro          # Shell HTML, <head>, fonts
│   ├── components/
│   │   ├── Nav.astro                 # Sticky nav + hamburger
│   │   ├── Hero.astro                # Portada
│   │   ├── QueEsHema.astro           # Historia + timeline
│   │   ├── TimelineItem.astro        # Componente timeline reutilizable
│   │   ├── ArmasEstilos.astro        # Tres disciplinas
│   │   ├── DisciplineCard.astro      # Card reutilizable
│   │   ├── UneteAlEquipo.astro       # Sobre el instructor
│   │   ├── Contacto.astro            # Formulario Netlify
│   │   ├── Footer.astro              # Footer
│   │   └── SectionDivider.astro      # Divisor SVG
│   ├── pages/index.astro             # Página principal
│   ├── scripts/main.js               # Interactividad
│   └── styles/
│       ├── global.css                # Tokens + reset
│       └── animations.css            # Keyframes
├── public/favicon.svg                # Logo espadas cruzadas
├── netlify.toml                      # Config Netlify
└── astro.config.mjs                  # Config Astro
```

## Secciones

1. **Hero** — Portada con título, disciplinas, CTA
2. **¿Qué son las HEMA?** — Historia desde Liechtenauer (1350) hasta Barroco (1700), timeline, tratados clave
3. **Armas y Estilos** — Espada Larga, Ropera, Daga y Rodela (cards con descripción)
4. **Únete al equipo** — Sobre el instructor, localización, qué esperar en primera sesión
5. **Contacto** — Formulario Netlify Forms

## Desarrollo

```bash
npm install
npm run dev          # Dev server en http://localhost:4321
npm run build        # Build para producción (→ dist/)
npm run preview      # Preview local del build
```

## Deploy

### Opción 1: Netlify CLI (rápido)
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Opción 2: GitHub + Netlify (recomendado)
1. Push a GitHub
2. Conectar repo en Netlify dashboard
3. Build command: `npm run build` | Publish: `dist`
4. Netlify detecta `netlify.toml` automáticamente

## Features

✅ Navegación sticky con subrayado activo  
✅ Menú hamburger responsivo (mobile)  
✅ Scroll suave (anchor links)  
✅ Timeline visual con marcadores  
✅ Cards de disciplinas con hover effect  
✅ Formulario Netlify Forms integrado  
✅ Ornamentos CSS (sin imágenes): líneas, diamantes, fleurones  
✅ Google Fonts preconnect  
✅ Meta tags OpenGraph  
✅ Favicon SVG personalizado  
✅ Build rápido (~2.4s)  

## Notas

- Todo el sitio es **estático** (HTML puro generado)
- No requiere backend — Netlify Forms maneja el email
- CSS variables centralizadas para fácil ajuste de colores/espaciado
- Sin dependencias externas (excepto Google Fonts)
- Performance-optimized: Lighthouse-ready

---

**Creado:** 2026-04-30  
**Autor:** HEMA Las Rozas  
**Contacto:** charlyp1397@gmail.com
