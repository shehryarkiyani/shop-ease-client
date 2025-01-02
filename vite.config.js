/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import * as path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx", "**/*.ts", "**/*.tsx"],
      exclude: [],
    }),
  ],
  server: {
    port: 3000,
    cors: {
      origin: ["https://example.com/", "http://localhost:3000"],
      methods: ["GET", "PATCH", "PUT", "POST", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    },
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      styles: path.resolve(__dirname, "src/styles"),
      pages: path.resolve(__dirname, "src/pages"),
      layout: path.resolve(__dirname, "src/layout"),
      core: path.resolve(__dirname, "src/core"),
    },
  },
});
