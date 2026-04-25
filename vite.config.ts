import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ✅ Auto-copy sitemap.xml and robots.txt to dist/
    {
      name: 'copy-static-files',
      closeBundle() {
        const files = ['sitemap.xml', 'robots.txt']
        files.forEach(file => {
          if (fs.existsSync(file)) {
            fs.copyFileSync(file, `dist/${file}`)
            console.log(`✅ Copied ${file} to dist/`)
          } else {
            console.warn(`⚠️ ${file} not found in project root`)
          }
        })
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})