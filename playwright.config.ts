import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3300",
    viewport: { width: 1440, height: 900 },
  },
  webServer: {
    command: "npm run build && npm run start -- -p 3300",
    url: "http://localhost:3300",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
