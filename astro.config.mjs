// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.bridgelincoln.com',
  // book.html, captains.html, legal/privacy.html: keeps the old URLs working
  build: { format: 'file' },
  vite: { plugins: [tailwindcss()] },
});
