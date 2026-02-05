import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
// import { pluginRoutes} from './plugins/fs-router-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // pluginRoutes(), 
    react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
