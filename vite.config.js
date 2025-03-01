import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/classy-endeavors-app/", // Set base path for GitHub Pages
  build: {
    outDir: "dist", // Ensure Vite builds to dist/
  },
});
