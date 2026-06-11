import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    // Override the nitro preset to vercel
  },
  // Pass nitro config to target vercel
  nitro: {
    preset: "vercel",
  },
});