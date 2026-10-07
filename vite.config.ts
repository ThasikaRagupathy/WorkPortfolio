import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:process.env.VITE_BASEPATH || "/https://github.com/ThasikaRagupathy/WorkPortfolio",
  resolve: { alias: { "@": path.resolve(projectRoot, "src") } },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return "react-vendor";
          if (/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(id)) return "motion";
          if (/node_modules\/(gsap|@gsap\/react)\//.test(id)) return "animation";
        },
      },
    },
  },
});
