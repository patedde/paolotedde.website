import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Replace with your GitHub Pages URL
  site: 'https://patedde.github.io/paolotedde.website', 
  // Replace with your repository name (starting with a slash)
  base: '/paolotedde.website', 
  
  integrations: [tailwind()],
});
