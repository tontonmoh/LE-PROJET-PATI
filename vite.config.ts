import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico", "icons/apple-touch-icon-180.png"],
      manifest: {
        name: "PATI — Projet Pati",
        short_name: "PATI",
        lang: "fr",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#0D2B1A",
        theme_color: "#0D2B1A",
        description:
          "Contes, livres et jeux pour les enfants de Guinée et d'ailleurs.",
        icons: [
          { src: "/icons/pwa-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "/icons/pwa-512x512.png", sizes: "512x512", type: "image/png" },
          {
            src: "/icons/maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        navigateFallback: "/index.html",
        // n'écrase ni ta PWA contes, ni le jeu, ni d'éventuelles API
        navigateFallbackDenylist: [/^\/contes/, /^\/jeux/, /^\/api/],
        globPatterns: ["**/*.{js,css,html,woff2}"],
        globIgnores: ["**/contes/**", "**/jeux/**", "**/audio/**", "**/fiches/**"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "pati-images",
              expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === "font",
            handler: "CacheFirst",
            options: {
              cacheName: "pati-fonts",
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
    }),
  ],
  build: { outDir: "dist" },
});
