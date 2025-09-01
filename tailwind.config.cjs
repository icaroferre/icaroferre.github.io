/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // your Astro + React components
    "./components/ui/**/*.{js,ts,jsx,tsx}", // shadcn components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
