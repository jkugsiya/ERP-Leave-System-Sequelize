import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
})
