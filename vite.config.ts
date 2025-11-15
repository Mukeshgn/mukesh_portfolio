import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// IMPORTANT: GitHub Pages base config
export default defineConfig(({ command }) => ({
  // Use repo name in production builds, "/" in dev/preview
  base: command === "build" ? "/mukesh_portfolio/" : "/",
  server: {
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
