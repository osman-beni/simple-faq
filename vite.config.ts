import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});

// This Vite configuration file sets up Tailwind CSS as a plugin for the build process.
// It uses the `defineConfig` function from Vite to create a configuration object.
