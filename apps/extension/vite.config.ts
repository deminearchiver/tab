import { defineConfig } from "vite"
import solid from "vite-plugin-solid";

export default defineConfig({
  resolve: {
    preserveSymlinks: true,
  },
  optimizeDeps: {
    include: ["../../packages/ui"]
  },
  plugins: [solid()],
});
