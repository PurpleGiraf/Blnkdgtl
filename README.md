# BLANK Digital website

Astro static site for BLANK Digital. Moved out of the Purple Giraffe templates repository
(`PurpleGiraf/Website-Developement`, where it lived at `/blank-digital/`) so it can run on its own domain.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | File |
|---|---|
| Brand, contact details, accent colour, routes | `src/blank/config.ts` |
| Services, process, FAQs, team, insights, legal copy | `src/blank/data.ts` |
| Page layout, header, footer, styles | `src/blank/Layout.astro` |
| Animations, quote form, dashboard | `src/scripts/blank.ts` |
| Pages | `src/pages/` |
| Fonts (Michroma, Varela Round) | `public/fonts/` |
| Article photos (optional) | `src/assets/images/blank-digital/post-<slug>.jpg` |

## Deploy on Vercel

1. In Vercel: **Add New → Project**, import `PurpleGiraf/Blnkdgtl`. Framework preset: **Astro** (detected). Leave the build settings as they are.
2. **Settings → Environment Variables**: add `SITE_URL` = the live domain, for example `https://blankdigital.com.au`. Used for canonical links and schema.
3. **Settings → Domains**: add the domain (and the `www` version). Vercel shows the DNS records to add at the domain registrar, usually an `A` record for the root and a `CNAME` for `www`.

## Before launch

- Replace the placeholder phone and email in `src/blank/config.ts`.
- Point the quote form at a real endpoint (see the TODO in `src/pages/index.astro`).
- Confirm the claims on the page: "over 30 years of experience", "calls answered 24/7", the announcement pill.
