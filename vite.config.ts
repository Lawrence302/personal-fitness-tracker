import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "MY Cali Track",
        short_name: "CaliTrack",
        description:
          "Personal Calisthenics Fitness Tracker: Track your bodyweight workouts, log exercises, earn points, and monitor progress. All without any equipment!",
        theme_color: "#18181b",
        background_color: "#09090b",
        display: "standalone",
        start_url: "/personal-fitness-tracker/",
        icons: [
          {
            src: "android-chrome-192x192.png", // Should work since it's in the `public/` folder
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png", // Same here
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/personal-fitness-tracker/",
});
