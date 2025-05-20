import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 3000,     
  }
})


// import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//   resolve: {
//     alias: {
//       '@assets': path.resolve(__dirname, 'assets'),
//     },
//   },
// });
