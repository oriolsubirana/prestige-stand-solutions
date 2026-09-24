import { defineConfig, envField } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: "https://www.prestigestandsolutions.com",
  output: "static",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },
  // The site is now a single page; keep old URLs working
  redirects: {
    "/about": "/#servicios",
    "/services": "/#servicios",
    "/contact": "/#contacto",
  },
  // No edge functions in this site; skip the Deno-based local emulator.
  adapter: netlify({
    devFeatures: { images: true, environmentVariables: false, edgeFunctions: false },
  }),
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      SEND_EMAIL_FROM: envField.string({ context: "server", access: "secret" }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
