import vue from "@vitejs/plugin-vue";
import path from "path";
import {defineConfig} from "vite";
import eslintPlugin from "vite-plugin-eslint";
import prettierPlugin from "vite-plugin-prettier";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ["src/**/*.vue", "src/**/*.js"],
    }),
    prettierPlugin(),
  ],
});
