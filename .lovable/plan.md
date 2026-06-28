## Goal

Serve every PDF in the provided Drive folder at `artful-creation-grid.lovable.app/pdf/{slug}`, where `{slug}` is the file name (no `.pdf`). Pages are reachable only by direct URL — no nav links, no sitemap entries, no listing page.

## Files to host (slug → source filename)

| Slug | Source |
|---|---|
| `Start-Smart-Site-Consultation-AM-BP-1` | Start-Smart-Site-Consultation-AM-BP-1.pdf |
| `Advice-when-comparing-quotes-2` | Advice-when-comparing-quotes-2.pdf |
| `HIA-Housing-Article-May-2022-3` | HIA-Housing-Article-May-2022-3.pdf |
| `AMBP-Profile` | AMBP-Profile.pdf |
| `AMBP-Renovation-Discovery-Consultation` | AMBP-Renovation-Discovery-Consultation.pdf |
| `AMBP-Interior-Design-Service` | AMBP-Interior-Design-Service.pdf |
| `AMBP-Advice-when-comparing-quotes` | AMBP-Advice-when-comparing-quotes.pdf |
| `AMBP-WELCOME-PACK-BATHROOM-23` | AMBP-WELCOME-PACK-BATHROOM-23.pdf |
| `AMBP-WELCOME-PACK-KITCHEN-23` | AMBP-WELCOME-PACK-KITCHEN-23.pdf |
| `AMBP-WELCOME-PACK-INTERIOR-RENOVATION-23` | AMBP-WELCOME-PACK-INTERIOR-RENOVATION-23.pdf |
| `Studio-Jenka-Profile` | Studio-Jenka-Profile.pdf |
| `Advice-When-Selecting-A-Renovator-AMBP` | Advice-When-Selecting-A-Renovator-AMBP.pdf |
| `Advice-When-Selecting-A-Renovator-AMBP-1` | Advice-When-Selecting-A-Renovator-AMBP-1.pdf |
| `Advice-When-Selecting-A-Renovator-AMBP-2` | Advice-When-Selecting-A-Renovator-AMBP-2.pdf |
| `Advice-When-Selecting-A-Renovator-AMBP-3` | Advice-When-Selecting-A-Renovator-AMBP-3.pdf |

Slugs preserve the source filenames exactly (case-sensitive), matching the example pattern requested. URLs are case-sensitive: `/pdf/AMBP-Profile` works; `/pdf/ambp-profile` returns 404.

## Implementation

1. Download all 15 PDFs from Drive into `public/pdfs/{slug}.pdf` so Cloudflare serves them as static assets bundled with the build.
2. Add a TanStack server route at `src/routes/pdf.$slug.ts`:
   - `GET` handler looks up the slug in a static map of allowed slugs.
   - On match, fetches the static asset (`new URL('/pdfs/<slug>.pdf', request.url)`) and returns the body with `Content-Type: application/pdf` and `Content-Disposition: inline; filename="<slug>.pdf"` so the browser renders it in-tab rather than downloading.
   - On miss, returns 404.
3. No UI page, no `<Link>` anywhere, no entry in `src/routes/sitemap[.]xml.ts`, no nav changes. The routes exist only via direct URL.
4. `public/robots.txt`: add `Disallow: /pdf/` so search engines don't index them.

## Out of scope

- No password protection (anyone with the link can view).
- No analytics/tracking on opens.
- No admin page to upload more PDFs later — adding a new PDF means dropping it into `public/pdfs/` and adding its slug to the allow-list in the route.
