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
        "desktop-landing": ["nav nav nav", ". text gif"],
        "mobile-about": ["nav", "text", "portrait"],
        "desktop-about": ["nav nav portrait", ". text portrait", ". text portrait"],
        "mobile-workshops": ["nav", "masonry"],
        "desktop-workshops": ["nav masonry"],
      },
      gridTemplateColumns: {
        "mobile-landing": "1fr",
        "desktop-landing": "155px 4fr 4fr",
        "mobile-about": "1fr",
        "desktop-about": "1fr 4fr 5fr",
        "mobile-workshops": "1fr",
        "desktop-workshops": "1fr 6fr",
      },
      gridTemplateRows: {
        "mobile-about": "300px 950px auto",
        "desktop-about": "141px 400px 1fr",
        "mobile-landing": "200px 1450px 200px",
        "desktop-landing": "141px auto",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
