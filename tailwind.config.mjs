/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#8CC2ED",
        foreground: "#000000",
      },
      gridTemplateAreas: {
        "mobile-landing": ["nav", "text", "gif"],
        "desktop-landing": ["nav nav nav", "text text gif"],
        "mobile-about": ["nav", "text", "portrait"],
        "desktop-about": ["nav nav nav", ". text portrait"],
        "mobile-workshops": ["nav", "masonry"],
        "desktop-workshops": ["nav masonry"],
      },
      gridTemplateColumns: {
        "mobile-landing": "1fr",
        "desktop-landing": "1fr 4fr 5fr",
        "mobile-about": "1fr",
        "desktop-about": "1fr 4fr 5fr",
        "mobile-workshops": "1fr",
        "desktop-workshops": "1fr 6fr",
      },
      gridTemplateRows: {
        "mobile-about": "100px 300px 1fr",
        "desktop-about": "100px 400px 1fr",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
