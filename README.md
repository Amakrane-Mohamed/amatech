# AMATECH Website

Premium animated marketing site for **AMATECH LLC**.

## Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI motion | [Motion](https://motion.dev/) |
| Scroll / timelines | [GSAP](https://gsap.com/) + ScrollTrigger |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Deploy (planned) | [Vercel](https://vercel.com/) |

## Project structure

```text
src/
├── app/                 # Routes & global styles (start designing in page.tsx)
├── components/providers/  # Lenis + GSAP sync (ready when you need them)
├── hooks/               # Shared React hooks
└── lib/                 # GSAP setup, site config
```

The home page is intentionally **empty** — add sections and components as you design.

## Commands

```bash
npm run dev      # Start dev server → http://localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint
```

## Environment

Copy `.env.example` to `.env.local` and adjust values when needed.

## Animation conventions

- **Motion** — UI interactions, hovers, hero entrance, component transitions
- **GSAP** — ScrollTrigger sections, pinned storytelling, text/SVG effects
- **Lenis** — Smooth scroll (auto-disabled when `prefers-reduced-motion` is on)

## Next steps (design & build)

1. Brand — logo, colors, typography
2. Hero — GSAP scroll/text animation
3. Services, About, Contact sections
4. SEO — Open Graph images, sitemap
5. Deploy to Vercel
# amatech
