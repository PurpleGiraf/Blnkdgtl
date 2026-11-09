// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The live domain, used for canonical URLs, Open Graph and schema. Set SITE_URL in Vercel
  // (e.g. https://blankdigital.com.au) or change the fallback once the domain is confirmed.
  site: process.env.SITE_URL || 'https://example.com',
  trailingSlash: 'always',
});
