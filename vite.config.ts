import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), commonjs()],
  optimizeDeps: {
    include: ["axios", "websocket"], // Include other CommonJS libraries if needed
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
