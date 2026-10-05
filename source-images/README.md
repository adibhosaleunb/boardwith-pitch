# Source images

Drop the original attached files here, then run `npm run images`. The script
writes the WebP/PNG files the deck uses into `public/images/` (and the favicon).
Originals in this folder are git-ignored, except the two scene drawings below;
the converted files are what you commit.

| Put this file here | Becomes | Slide |
| --- | --- | --- |
| `boardwith-lockup-on-teal.png` | `public/images/logo-lockup.png` + `public/favicon.png` | 1, 10 |
| `story-alone.svg` (committed) | `public/images/story-alone.webp` + `public/images/cover-story.webp` (1040 × 1520 crop) | 1 |
| `solution-together.svg` (committed) | `public/images/solution-together.webp` | 4 |
| `Aditya…`, `Adarsh…`, `Shivani…` photos (a `…_headshot…` file is used as supplied) | `public/images/team-*.webp` | 9 |

The two scenes are Boardwith's own drawings (5 October 2026): the mother alone
in a grey terminal, then with her companion in a warm one. To change them, edit
the SVGs (1400 × 900 canvas, valid XML, so Illustrator and Inkscape open them)
and run `npm run images`.

The original scene PNGs (`Lost at the Airport@2x.png`, `With someone@2x.png`)
showed an older couple. They are no longer converted, so keeping them here is
harmless. Do not use the other attached images (iStock/Shutterstock previews,
the "Heartbreak at the gate" screenshot, the couple and wheelchair photos,
generic stock). The brief, section 12.4, lists why.
