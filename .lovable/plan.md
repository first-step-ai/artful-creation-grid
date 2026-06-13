Add pagination to the /projects listing page so only 12 projects display at a time.

## Changes

### Route file — `src/routes/projects.index.tsx`
- Read `page` from URL search params via `Route.useSearch()` instead of local state.
- After filtering by category, slice the `visible` array to show only the current page: `slice((page-1)*12, page*12)`.
- Compute `totalPages = Math.ceil(visible.length / 12)`.
- If `page` is out of bounds, clamp it (e.g. redirect or default to 1).
- Add pagination controls below the project grid using the existing `src/components/ui/pagination.tsx` components, wired to TanStack `Link` with `search={{ page: n }}` so page numbers are URLs (shareable / bookmarkable).
- On filter change, reset `page` back to 1.

### No other files need changes.

## Result
- Projects page shows max 12 tiles per page.
- Pagination links update the URL (`?page=2`).
- Filter changes reset to page 1.
- Works with existing tile layout and styles.