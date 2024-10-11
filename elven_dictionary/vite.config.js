import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/translate": {
        target: "http://localhost:3000", // Adresse de ton backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
