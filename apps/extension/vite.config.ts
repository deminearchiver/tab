import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import webExtension from "vite-plugin-web-extension";

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    solid(),
    webExtension({
      browser: process.env.EXTENSION_BROWSER_TARGET || "chrome",
    }),
  ],
});
