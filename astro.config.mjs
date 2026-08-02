import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://colinkdev.github.io",
  integrations: [react()],
});
