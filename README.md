# Gupta & Malhotra LLP — Chartered Accountants

Firm website: React (Vite + Tailwind).

## Run locally

```sh
npm install
npm run dev      # http://localhost:3000
```

## Layout

- `src/lib/site.js` — all site copy: firm details, services, industries, stats.
- `src/pages/` — Home, About, Services, Industries, Contact, NotFound, Admin.
- `public/logo.jpg`, `public/favicon.svg`, `public/images/` — logo, tab icon and photos.
- `public/_redirects` — sends every URL to `index.html` (Netlify / Cloudflare Pages).

## Contact form and backend

There is no backend in this folder. Without one, the contact form opens the visitor's
email app with the inquiry addressed to the firm, and `/admin` is disabled.

To store inquiries instead, set `VITE_BACKEND_URL` (see `.env.example`) to an API that
serves `POST /api/inquiries` and `GET /api/inquiries`; the form then submits to it and
`/admin` lists the results. Put authentication on that API first.
