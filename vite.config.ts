import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  plugins: [react(), commonjs()],
  optimizeDeps: {
    include: ["axios", "react-chat-engine"],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
