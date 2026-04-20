
The user wants:
1. Replace current logo (`src/assets/britto-logo.png`) with the new optimized `user-uploads://logo.png`.
2. Increase logo size in the header (currently `h-12` / 48px — too small for the 80px header).
3. Incorporate the 3 photos of Camila (palestra/evento) into the site, respecting the visual identity (forest green, off-white, sober editorial). Apply tasteful filters/treatments (sepia/duotone/grayscale-with-tint) so the purple/red tones don't clash with the green-forest palette.

## Photos analysis
- `camila-palestra-camara.jpeg` — Camila speaking at a podium (Câmara Municipal). Excellent for **Hero of /sobre** (founder portrait in context of authority/expertise) — replaces the generic AI hero.
- `camila-palestra-01.jpeg` — Camila in profile speaking into microphone, intimate framing. Perfect for **/sobre "Método/Fundadora" section** — replaces or complements existing imagery.
- `camila-evento.jpeg` — Group photo at "Agosto Lilás" event (Câmara de Arujá). Strong social-proof asset → use on **/cases** as evidence of public engagements/talks, replacing the AI `team-conversation.jpg`.

## Visual treatment to preserve identity
The photos contain heavy purple/lilás tones that clash with the forest-green palette. Apply CSS filter treatment: `grayscale(20%) contrast(1.05) sepia(8%)` plus a subtle warm overlay (bege `#E8DFD0` at low opacity with `mix-blend-multiply`) — keeps photos editorial, premium, and tonally aligned without destroying recognizability of Camila.

## Concrete changes

**1. Logo**
- `lov-copy user-uploads://logo.png src/assets/britto-logo.png` (overwrites)
- `SiteHeader.tsx`: increase logo from `h-12` → `h-16` (64px) on desktop, keep `h-12` on mobile. Increase header height `h-20` → `h-24` to accommodate. Adjust `width/height` attrs to `160x64`.
- `SiteFooter.tsx`: bump footer logo proportionally if used.

**2. Photos integration**
- Copy 3 images to `src/assets/`:
  - `camila-palestra-camara.jpeg` → `camila-palestra-camara.jpg`
  - `camila-palestra-01.jpeg` → `camila-palestra-perfil.jpg`
  - `camila-evento.jpeg` → `camila-evento-lilas.jpg`
- Reusable CSS class `.photo-editorial` in `styles.css` applying the filter treatment + a `::after` overlay tinted with primary/bege.

**3. Page wiring**
- **`/sobre`**: hero image → `camila-palestra-camara.jpg`. Add a "Fundadora" section featuring `camila-palestra-perfil.jpg` with short bio paragraph (Camila Britto, psicóloga, atuação em palestras e formação de lideranças). OG image → same hero.
- **`/cases`**: replace `team-conversation.jpg` with `camila-evento-lilas.jpg`. Update caption to reference real engagement context ("Palestra Agosto Lilás — Câmara Municipal de Arujá"). OG image → this photo.
- **`/`**: keep current AI hero for now (it's abstract/editorial and works); no change needed unless requested.

**4. Per-page og:image** (currently missing)
- Add `og:image` + `twitter:image` meta to `/sobre` and `/cases` pointing to the public-served photo URLs (import the asset and use the resolved URL string).

## Files to modify
- `src/assets/britto-logo.png` (overwrite)
- `src/assets/camila-palestra-camara.jpg` (new)
- `src/assets/camila-palestra-perfil.jpg` (new)
- `src/assets/camila-evento-lilas.jpg` (new)
- `src/components/site/SiteHeader.tsx` (logo size + header height)
- `src/styles.css` (`.photo-editorial` utility)
- `src/routes/sobre.tsx` (hero + founder section + og:image)
- `src/routes/cases.tsx` (replace team img + og:image)

No new dependencies. No backend changes. Approve to implement.
