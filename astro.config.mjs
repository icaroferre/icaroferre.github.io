// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  site: "https://icaroferre.com",
  vite: {
    plugins: [tailwindcss(), react()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Montserrat",
        cssVariable: "--font-body",
      },
      {
        provider: fontProviders.google(),
        name: "Montserrat",
        cssVariable: "--font-header",
      },
    ],
  },
});
