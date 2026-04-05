import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// Adapter:
import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx"],
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
    alias: {
      "@/*": "./src/*",
      "@/lib/*": "./src/lib/*",
      "content-collections": "./.content-collections/generated"
    }
  }
};

export default config;
