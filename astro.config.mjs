import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/about": "/",
    "/info": "/",
    "/projects": "/",
    "/contact": "/",
    "/photos": "/",
    "/experiments": "/",
    "/portfolio": "/",
  },
  integrations: [react()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
