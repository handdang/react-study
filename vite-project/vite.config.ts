import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server : {
    port : 8080,
    // 파일 저장시 새로고침
    watch : {
      usePolling : true,
    }
  },
  plugins: [react()],
  cacheDir : './.vite', //cacheDir 경로 지정 (dev server 실행 시, node_modules가 생성되는 것을 원치 않는다면아래와 같이 cacheDir을 설정해준다.)
  build : {
    rollupOptions : {
      
    },
    // 라이브망에선 콘솔 안보이도록 처리 시켜줌
    minify : 'terser',
    terserOptions : {
      compress : {
        drop_console : true,
        drop_debugger : true,
      },
    }
  },
  //절대 경로 설정
  resolve : {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '~', replacement: path.resolve(__dirname, 'src/assets/') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
    ]
  }
})