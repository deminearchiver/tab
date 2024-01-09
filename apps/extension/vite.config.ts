import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import webExtension from "vite-plugin-web-extension";

export default defineConfig({
  plugins: [
    solid(),
    vanillaExtractPlugin(),
    webExtension({
      browser: process.env.BROWSER_TARGET || "chrome",
    }),
  ],
});
