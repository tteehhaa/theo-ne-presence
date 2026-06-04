import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStartVite } from "@tanstack/start-vite";
import path from "path";

export default defineConfig({
  plugins: [
    tanstackStartVite(),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    sourcemap: false
  }
});
