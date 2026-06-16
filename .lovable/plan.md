The navigation bar (Nav.tsx) uses `am-mark.png` as its logo. The footer currently uses a different asset (`am-footer-logo.png`).

**Change:**
- In `src/components/home/Footer.tsx`, replace the import of `am-footer-logo.png.asset.json` with `am-mark.png.asset.json` (same asset used in Nav.tsx).
- Update the `<img>` `src` accordingly.
- Keep the existing white inversion filter since the footer background is dark charcoal (`#404640`).

This is a one-line import change and a one-line `src` update.