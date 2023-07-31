import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import viteSvgr from 'vite-plugin-svgr';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  experimental: {
    assets: true
  },
  output: 'server',
  vite: {
    plugins: [viteSvgr()]
  },
  adapter: netlify()
});