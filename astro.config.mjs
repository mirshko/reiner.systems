import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

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
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
    },
  },
});
