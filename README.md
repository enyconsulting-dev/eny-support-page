# ENY Consulting — Sales & Enrollment Support Page

Next.js 14 (App Router) + TypeScript. No UI libraries, no Tailwind — plain CSS, so it's light and easy to restyle.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```


## The only file you need to edit: `data/team.ts`

- **Add / remove / reorder support members** — each is one object in the `team` array. The grid adapts to any count (4-up on desktop for 4 people, 3-up for 3, wraps for more).
- **Headshots** — put images in `public/team/` and set `image: "/team/yourfile.jpg"`. Missing or broken image → a styled initials avatar appears automatically.
- **WhatsApp number** — digits only, international format, no `+` (e.g. `2348012345678`). The button opens `wa.me/<number>` with a prefilled message.
- **Prefilled message** — `site.defaultMessage` for everyone, or `message` per person.
- **Copy** — headline, availability hours, help topics and footer are all in the same file.

## Re-theming

Colours are CSS variables at the top of `app/globals.css` (`--accent`, `--accent-2`, `--gold`, …).

## Structure

```
app/            layout, page, globals.css
components/     SupportCard (tilt, avatar, CTA), AnimatedBackground (pure CSS)
data/team.ts    team + copy config
public/team/    headshots go here
```

## Notes

- Animations respect `prefers-reduced-motion`.
- Background is CSS-only (no canvas/JS), so it stays smooth on low-end phones.
