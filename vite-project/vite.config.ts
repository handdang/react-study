import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    port : 8080
  },
  plugins: [react()],
  build : {
    minify : 'terser',
    terserOptions : {
      compress : {
        drop_console : true,
        drop_debugger : true,
      },
    }
  }
})
