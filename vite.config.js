import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import packageConfig from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
  base: packageConfig.homepage,
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` @import "./src/assets/scss/global.scss"; `,
      },
    },
  },
});
