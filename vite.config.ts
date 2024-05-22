import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [react(), commonjs()],
  optimizeDeps: {
    include: ["axios", "websocket"], // Add other CommonJS libraries as needed
  },
});
