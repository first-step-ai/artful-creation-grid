## What we're building

A single, design-led **home page** for **AM Bathrooms + Projects** — a Sydney design + build renovation studio (bathrooms, kitchens, laundries, interiors). Pulled the brand & service info from ambathrooms.com.au; visual language is inspired by Craig Linke (deep burgundy, vast quiet space, hairline serif logotype) with the editorial restraint of Beralin (full-bleed interior imagery, generous breathing room, serif display + tracked sans labels).

Not long-scroll — tight, intentional, every section earning its place.

## Design direction

- **Palette (moody burgundy)**
  - Background deep oxblood `#1a0d0f` → `#3d1a1f`
  - Surface burgundy `#6b2a35`
  - Ivory text / accents `#f0ebe3`
  - Muted ivory `#c9b9a8` for labels & meta
- **Typography**
  - Display serif: *Cormorant Garamond* (light weight, wide tracking on the logotype, à la Craig Linke)
  - Body / labels: *Inter* tracked uppercase for eyebrows, regular for paragraphs
- **Motion**: very restrained — slow fade-up on scroll, subtle image parallax in hero, hover reveals on project tiles
- **Imagery**: full-bleed interior photography (warm stone, joinery, soft light) — generated via image placeholders to evoke Sydney high-end bathroom/kitchen work

## Sections (top → bottom)

1. **Top utility bar** — small ivory bar with a quiet status line (e.g. "Now taking enquiries — Sydney 2026") + phone
2. **Nav** — left: hairline serif "AM Bathrooms + Projects" logotype. Right: Work · Services · Process · Studio · Enquire
3. **Hero** — full-viewport burgundy backdrop, single hairline serif headline ("Considered interiors, built across Sydney"), subdued sub-line, one ghost-style CTA, full-bleed muted interior image behind a dark wash
4. **Intro / manifesto** — two-column: left small eyebrow "EST. 1998 · SYDNEY", right a short editorial paragraph about care, collaboration, dedication
5. **Services** — 4 quiet tiles (Bathrooms · Kitchens · Laundries · Interior Design) with hover image reveal
6. **Selected work** — 3-up asymmetric editorial grid of recent projects with serif captions
7. **Process** — numbered 4-step list (Consult → Design → Build → Handover), thin rule dividers, serif numerals
8. **Recognition strip** — single line: "HIA Awards finalist — multiple years"
9. **Enquire** — large serif "Let's begin." with a minimal contact form (Name, Email, Project type, Message) on the burgundy field
10. **Footer** — logotype, address, socials, copyright

## Technical details

- New file `src/routes/index.tsx` replacing the placeholder with the full home composition
- Section components colocated under `src/components/home/` (Hero, Manifesto, Services, Work, Process, Enquire, Footer, TopBar, Nav)
- Design tokens added to `src/styles.css`:
  - Override `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--border` with the burgundy/ivory oklch values
  - New tokens: `--ivory`, `--ivory-muted`, `--oxblood`, `--burgundy`, `--burgundy-soft`
  - Add `@theme inline` font tokens for Cormorant Garamond + Inter; load via Google Fonts `<link>` in `__root.tsx` head
- Update `__root.tsx` head meta: title "AM Bathrooms + Projects — Sydney Renovation Specialists", description, og tags
- Update `index.tsx` route `head()` with page-specific SEO (title, description, og:title, og:description, og:image pointing to the hero image)
- All imagery via `imagegen` saved to `src/assets/` (hero, 4 service tiles, 3 project tiles) — moody, warm, editorial interior photography
- Form is presentational only this round (no backend) — submit handler shows a toast confirmation
- Semantic HTML: single `<h1>` in hero, `<section>` per block, alt text on every image

## Out of scope (this round)

- No other routes (About / Projects detail / Contact pages) — home only as requested
- No backend / Lovable Cloud — contact form is non-functional placeholder
- No CMS — content hard-coded from the AM Bathrooms site copy
- Reference images in your Drive folder weren't accessible to me; I'll lean on the Beralin + Craig Linke direction. If you want me to match specific photos from the folder, paste them into chat after this plan and I'll fold them in.
