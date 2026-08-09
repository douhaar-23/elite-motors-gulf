// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
// - TanStack devtools, tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//   nitro, env injection, aliases, dedupe, error logger, sandbox detection.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  nitro: {
    preset: "vercel",
  },
});