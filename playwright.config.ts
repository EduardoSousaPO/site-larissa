import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.E2E_PORT ?? 4321);
// 127.0.0.1 e não "localhost": em Windows o localhost resolve para ::1 primeiro,
// e um servidor antigo preso no IPv6 já respondeu no lugar do nosso durante o
// diagnóstico desta suíte. Endereço literal remove essa ambiguidade.
const BASE_URL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [['list']],

  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 5'], viewport: { width: 390, height: 844 } },
    },
  ],

  // Roda contra o build estático servido como a Vercel serve — arquivo por rota,
  // não o index.html da home para tudo. `vite preview` NÃO faz isso e mascara
  // (ou inventa) erros de hidratação.
  webServer: {
    command: `node scripts/serve-dist.mjs ${PORT} dist`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
