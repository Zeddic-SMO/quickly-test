import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@api": resolve(__dirname, "src/api"),
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@pages": resolve(__dirname, "src/pages"),
      "@interface": resolve(__dirname, "src/interface"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
});
