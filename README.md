# Blue Hours — Artifacts of Grief

A responsive, accessible slidedeck presenting seven cultural artifacts that
sit with loss: memoirs, a lyric essay, a film, and a musical. Each slide pairs
the artifact's image with concise alt text, an expandable image description,
and a short reflection on how the work holds grief.

## Run it

Open `index.html` in any browser. No build step, no dependencies (fonts load
from Google Fonts when online; the deck degrades to system serifs offline).

## Navigate

- **Arrow keys** `←` / `→` (also `PageUp` / `PageDown`, `Home` / `End`)
- On-screen **prev / next** buttons and **dot** indicators
- **Swipe** left / right on touch devices

## The artifacts

1. Joan Didion — *The Year of Magical Thinking* (memoir, 2005)
2. Joan Didion — *Blue Nights* (memoir, 2011)
3. Maggie Nelson — *Bluets* (lyric essay, 2009)
4. Yiyun Li — *Dear Friend, from My Life I Write to You in Your Life* (memoir, 2017)
5. Sarah Chihaya — *Bibliophobia* (memoir, 2025)
6. Lukas Dhont — *Close* (film, 2022)
7. *Dear Evan Hansen* (musical, 2016)

## Accessibility & design notes

- Every image carries a concise `alt`; a fuller image description is available
  behind a disclosure toggle on each slide.
- Slide changes are announced via an `aria-live` region; slides use
  `group` / `aria-roledescription="slide"` semantics.
- Honors `prefers-reduced-motion`.
- Aesthetic: a muted "blue hour" palette drawn from the covers, literary serif
  type, slow cross-fades, faint film-grain and vignette — quiet and elegiac.
