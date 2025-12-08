import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://paolotedde.digital', // Update to your new domain
  base: '/', // Change to root (or remove this line entirely)
  integrations: [tailwind()],

});
