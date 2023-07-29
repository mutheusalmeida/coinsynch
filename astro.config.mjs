import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import viteSvgr from 'vite-plugin-svgr'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  experimental: {
    assets: true,
  },
  output: 'server',
  vite: {
    plugins: [viteSvgr()],
  },
})
