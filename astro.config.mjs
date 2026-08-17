// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.marcosanchioni.com',
  // GitHub Pages serves `/about/` from `about/index.html` and 301-redirects
  // `/about` to it, so directory output is the safe format there.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
