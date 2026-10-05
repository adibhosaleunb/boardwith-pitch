# Boardwith investor deck

Web presentation for the Shadow Institute Gate 1 pitch (7 October 2026) and 20-minute investor meetings. 10 core slides plus 7 backups (A1–A7), built with React and Vite and deployed on Netlify.

**Order (5 October 2026):** the dry-run panel's rebuilt five-minute pitch: 1 your story, 2 the problem, 3 why now, 4 the solution, 5 how it works, 6 trust and safety, 7 market, 8 business model, 9 traction and team, 10 the ask. Backups: A1 six conversations, A2 market sizing, A3 three-year scenario, A4 unit economics, A5 competition, A6 go-to-market, A7 trust, safety and trip terms. The 5-minute script is about 600 words (about 4:30 spoken).

All copy lives in `src/data/startupData.js`. Slide components only lay it out.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve dist/
```

### Images

The converted images are committed in `public/images/`. To redo them, put the originals in `source-images/` (the names are listed in `source-images/README.md`) and run `npm run images`, then commit `public/images/` and `public/favicon.png`. The two airport scenes are drawn as SVGs and committed in `source-images/`; the script renders them too.

**Team photos (slide 9)** are matched by first name. A file with "headshot" in its name, such as `Aditya_headshot_portrait_4x5.jpg`, is used as supplied. Any other photo is cropped with the face positions set in `teamJobs()` in `scripts/prepare-images.mjs`. iPhone `.heic` files are converted with the Mac's built-in `sips`; on other systems, export the photo as a JPEG first. If a photo is missing, the slide shows the person's initials in the window frame.

## Presenting

| Key | Action |
| --- | --- |
| → Space PgDn · click right third · swipe left | Next |
| ← PgUp · click left third · swipe right | Previous |
| Home / End | Slide 1 / slide 10 |
| 1–9, 0 | Slides 1–9, 10 |
| A | Backups (A1) |
| Esc | Overview of all 17 slides |
| F | Fullscreen |
| N | Speaker notes (5-min script and 20-min points) |
| T / R | Start or pause / reset the timer |

The URL hash tracks the slide (`#/4`, `#/a2`), so a reload keeps your place. The timer counts down from 5:00 or 20:00, depending on which notes tab is open. It shows each slide's target from the timing table and turns orange when you fall behind.

**PDF:** open `/?print` and use Chrome's "Save as PDF". You get 17 pages at 1920 × 1080: the send-ahead deck, with sources on every page. Keep a copy as the backup for the live pitch.

**Phones** (under 600px wide, or a phone held upright) get a scrolling reading version.

**Founder inputs:** none show on the slides. One sits in slide 1's 20-minute notes (a detail from your own first arrival). The rest are listed in the brief, section 16; until they're settled the slides keep the figures they already use, such as about 88,000 parent journeys (labelled an estimate being re-sized) and about 125 new UNB students (labelled an assumption). If you add one back, write it as `[FOUNDER INPUT: …]` in `src/data/startupData.js`. It then renders as a dashed peach box, and `npm run dev` counts it in a corner badge.

**Print footer:** every `?print` page carries "Boardwith. Pre-seed. Confidential." bottom left.

## Checking the layout

```bash
npm run build && npm run check
```

`scripts/check-deck.mjs` renders every slide at 1920 × 1080 with the real fonts and fails if any text:

- runs into the flight path (below y 1000),
- runs off the sides, or
- overlaps other text.

It also lists any text under 32px, so you can confirm it's only sources, footnotes and tags. It saves screenshots at 1920 × 1080, 1366 × 768 and 820 × 1180, a 390 × 844 reading-mode capture and `deck.pdf` to `screenshots/`. It needs Chromium (`CHROMIUM_PATH`, default `/opt/pw-browsers/chromium`). For a quick pass while editing copy, `npm run check -- --layout-only` prints the report and skips the screenshots and PDF.

## Deploy

Connect the repository in Netlify. `netlify.toml` sets the build command, the publish folder, the SPA redirect and the `noindex` and security headers. The deck names interviewees, so keep the URL unlisted, and turn on password protection if your plan has it.

## What's on a slide

Each core slide carries what the panel asked for: one headline, at most one sub line, and three to five points, each a number or a short line the presenter actually says. Quotes, the working behind each number and anything said but not shown stay in the speaker notes; a slide's 20-minute notes open with a "Said, not shown" line. Sources appear in the notes panel, the `?print` PDF and phone reading mode, never on the live stage. On the core slides only estimates, assumptions, projections, concept screens and planned features carry a tag; untagged numbers are evidence. The backups keep every tag, Evidence included.

Backup A3's bars stack parents (base) and students (top, a lighter hatch running the other way), named on the year-3 bar only; the totals sit on top. Backup A2's ladder has five rungs: the total, the three serviceable rungs (parents, students, both) and the obtainable rung, which adds UNB's new students to their parents.

Illustrations (all original, in the palette of the airport scenes):

- **Slide 1:** `cover-story.webp`, a portrait crop of `story-alone.webp`: the founder's mother alone in a grey terminal, holding a phone with no Wi-Fi, under signs pointing every way. It's the original grey airport scene with the husband removed (the interviews found need follows being alone). Source: `source-images/story-alone.svg`.
- **Slide 2:** `JourneyGap.jsx` draws Delhi → Toronto → Fredericton: airline help is a short solid teal stretch at each airport; the flights and the Toronto layover (immigration, bags, new gate) are dashed and marked "alone", with the mother standing in the layover.
- **Slide 3:** `WhyNowScene.jsx`, an assistance desk with a wheelchair sign and a new fee tag (the slide's one orange element), wheelchairs parked for the people who need them, and the mother beside her suitcase.
- **Slide 4:** `solution-together.webp`, the warm scene with the husband removed: the mother's hand on the companion's arm while he points the way. It enters black and white and fills with colour each time the slide is shown. Source: `source-images/solution-together.svg`.
- **Slide 6:** `TrustBadges.jsx`, four badges: two ID cards under a shield, a card locked until the plane lands, a rematch, and language, mobility and nerves.
- **Slide 7:** a route drawing (India → Canada now, India → US next) and `TravellerBadge` figures in `People.jsx`: parents, first-time students, a traveller facing a language barrier, a traveller with low vision.
- **Slide 8:** `Waterfall.jsx`, one trip from the C$275 the family pays down to the C$28 Boardwith keeps; insurance is a dashed marker because it's a yearly policy in the budget, not a per-trip cost.
- **A6:** the visiting mother and a student flying home (`People.jsx`), as before.

To redraw the two scenes, edit the SVGs in `source-images/` and run `npm run images`: it renders them at 2800 × 1800 and writes 2000px WebPs (quality 82), plus the cover, a 1040 × 1520 crop starting at x 772, y 280.

## Where the build departs from the brief

- **Fonts are self-hosted** through Fontsource (the brief allows this) instead of loaded from Google Fonts. There's no third-party request, and the layout check measures the real faces. Headlines and the hero use Anek Latin at 87.5% width (semi-condensed), which the brief describes as the signage look.
- **Diagram and chart labels on core slides are 26–30px** (slide 5's step details and screens, slide 7's ladder labels and traveller names, slide 8's waterfall labels, slide 9's traction labels and team lines). Headlines, the big numbers and the lines the presenter reads stay at 32px or more. `npm run check` lists every size under 32px.
- **Slide 10:** every use-of-funds segment is white at stepped opacity (100, 78, 58, 40, 24%). None is orange, because the slide's one orange element is the C$75,000.
- **Team photos:** the matched headshots (`source-images/*_headshot_portrait_4x5.jpg`, 1200 × 1500) are converted as they are to 600 × 750 WebP, with no re-cropping. The window frame shows them with `object-fit: cover` and `object-position: 50% 40%`.
- **Backups A2 and A4** set their tables at 24–26px; everything in them only fits at those sizes, and cutting words would mean cutting brief copy.
- **Slide 5's concept phones** are 240 × 420, not 480, so the headline, the sub and the five-step row fit. Each screen's content ends about 300px down, so nothing is cropped.
- **Lighthouse** scores weren't measured in this environment. Run Lighthouse on the Netlify preview to confirm the 95+ accessibility and 90+ performance targets.
