import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import mdx from "@mdx-js/rollup";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import remarkGfm from "remark-gfm";

export default defineConfig({
  base: "/tab/",
  plugins: [
    mdx({
      // jsxImportSource: "solid-jsx",
      jsxImportSource: "solid-js/h",
      remarkPlugins: []
    }),
    vanillaExtractPlugin(),
    solid(),
  ],
});
