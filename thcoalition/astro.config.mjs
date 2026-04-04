import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://thcoalition.net',
  output: 'hybrid',
  integrations: [
    tailwind(),
    react(),
    markdoc(),
    sitemap(),
    keystatic(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    ssr: {
      noExternal: ['@keystatic/*'],
    },
  },
});
