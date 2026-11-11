// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Slugs of posts published with `unlisted: true`; keep in sync with their front matter.
const UNLISTED = ['what-can-be-measured'];

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
  // Unlisted posts (front matter `unlisted: true`) stay out of the sitemap too.
  integrations: [sitemap({ filter: (page) => !UNLISTED.some((slug) => page.includes(`/blog/${slug}/`)) })],
});
