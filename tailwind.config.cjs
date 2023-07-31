/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    boxShadow: {
      xs: '0px 0px 10px rgba(0, 0, 0, 0.05)',
      'sm-b': '0px 4px 8px 0px rgba(77, 77, 77, 0.1)',
      'sm-t': '0px -4px 8px 0px rgba(77, 77, 77, 0.1)',
    },
    extend: {},
  },
  plugins: [],
}
