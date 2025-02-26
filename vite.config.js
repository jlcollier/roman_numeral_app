import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig as defineVitestConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: defineVitestConfig({
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.js', '**/*.test.jsx'],
    pool: "vmThreads",
    setupFiles: ["./setupTests.js"],
  }),
});
