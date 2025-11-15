import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// IMPORTANT: GitHub Pages base config
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? "/mukesh_portfolio/" : "/",
  server: {
    port: 8080
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
