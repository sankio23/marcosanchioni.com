// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://www.marcosanchioni.com',
  // GitHub Pages serves `/about/` from `about/index.html` and 301-redirects
  // `/about` to it, so directory output is the safe format there.
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Formulas are typeset by KaTeX at build time: the HTML ships already
  // laid out, so the site stays free of client-side JavaScript.
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [sitemap()],
});
