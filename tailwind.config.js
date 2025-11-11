/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "eerie-black": "#050509",
      },
      backgroundColor: {
        "white/2": "rgba(255,255,255,0.02)",
      },
    },
  },
  plugins: [],
};
