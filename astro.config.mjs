import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeFigure from "@microflash/rehype-figure?bundle";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  redirects: {
    "/about": "/",
    "/info": "/",
    "/projects": "/",
    "/contact": "/",
    "/photos": "/",
    "/experiments": "/",
    "/portfolio": "/",
  },
  integrations: [
    react(),
    mdx({
      rehypePlugins: [rehypeFigure],
      shikiConfig: { theme: "github-dark-high-contrast" },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
