import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5005",
      }
    }
  },
  // define: {
  //   'import.meta.env.MODE': JSON.stringify(process.env.NODE_ENV || 'development'),
  // },
  
})
