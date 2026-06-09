# Blue Hours — Artifacts of Grief

A searchable, tag-filterable **library** of cultural artifacts about grief that
opens into a melancholic, responsive **slidedeck** when you click an item. Each
artifact carries 3–5 colour-coded tags, concise alt text, an expandable image
description, and a short reflection on how the work holds grief.

Static site — no backend, no build step. Runs as-is on GitHub Pages.

## Use it

- **Browse** the grid of covers on the landing page.
- **Search** by title, creator, description, or tag.
- **Filter** by clicking colour-coded tag chips (selecting several narrows to
  items that have *all* of them). "Clear filters" resets.
- **Click a card** to open the slidedeck at that item. You navigate within
  whatever you've filtered to.
- In the deck: **arrow keys** / on-screen arrows / swipe to move, **Esc** or
  **← Library** to go back, and **click any tag** to jump back to the library
  filtered by it.
- Deep links: `…/#item-<id>` opens straight to an item.

## Adding artifacts

Everything lives in **`data.js`** — no HTML editing.

1. Add the cover image (drop a file in the repo, e.g. `covers/your-image.jpg`,
   or use a full `https://…` URL).
2. Append an object to the `artifacts` array with: `id`, `image`, `title`,
   `creator`, `type`, `year`, `alt`, `imageDesc`, `reflection`, and a `tags`
   array of 3–5 tags. (See the comment block at the top of `data.js`.)
3. New tags: add them to `TAG_COLORS` in `data.js` with a hex colour (unlisted
   tags still work — they fall back to a muted grey-blue).

Commit and push; GitHub Pages redeploys automatically.

## Files

- `index.html` — the app (library + deck), embedded CSS/JS.
- `data.js` — all content + the tag→colour map. **This is the file you edit.**
- `*.jpg` / `*.jpeg` — cover images.
- `.nojekyll` — tells GitHub Pages to serve files as-is.

## Accessibility & design

- Concise `alt` on every deck image; a fuller image description behind a
  disclosure toggle. Grid thumbnails are decorative (`alt=""`) since the title
  is adjacent.
- `aria-live` announcements for search results and slide changes; keyboard
  navigable throughout; honours `prefers-reduced-motion`.
- Muted "blue hour" palette, literary serif type, slow cross-fades, faint film
  grain and vignette — quiet and elegiac.
