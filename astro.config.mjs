import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image({ serviceEntryPoint: '@astrojs/image/sharp' })],
  experimental: {
    assets: true,
  },
})
