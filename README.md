# Seniors of Excellence NT

React + Vite site for Seniors of Excellence NT (Northern Territory).

## Stack

- **React 19** + **Vite 6**
- **React Router** for client-side routing
- **Tailwind CSS** (build-time, not CDN)
- **Google Apps Script** for Contact and Nomination form submissions

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

Output is in `dist/`. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

For SPA routing, configure your host to serve `index.html` for all routes (e.g. Netlify `_redirects`: `/* /index.html 200`).

## Project structure

```
src/
  components/   Layout, Header, Footer, PageHero
  pages/        Home, About, Events, Gallery, Contact, InMemoriam, Nominate
  data/         events.js, memorials.js
  hooks/        useDarkMode.js
  lib/          sheetForm.js (Google Sheet POST)
  styles/       dark-mode, mobile-nav, forms, events CSS
public/
  assets/       images, logos (served at /assets/...)
legacy-html/    original static HTML pages (reference)
assets/         original shared JS/CSS (kept for reference; app uses public/assets + src/)
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/events` | Events calendar |
| `/gallery` | Photo & video gallery |
| `/in-memoriam` | In Memoriam |
| `/contact` | Contact form |
| `/nominate` | Nomination form |

## Forms (Google Sheets)

Forms POST JSON to the Apps Script Web App configured in `src/lib/sheetForm.js`.

- **Contact** tab: `Timestamp, Name, Email, Subject, Message`
- **Nominations** tab: see column order in `Nominate.jsx` submit handler

Reference Apps Script: `assets/google-apps-script-reference.gs`

## Legacy static site

The previous multi-page HTML site is preserved in `legacy-html/` for reference.
