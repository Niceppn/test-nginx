import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0', // 👈 สำคัญ!
    port: 3000,       // หรือพอร์ตที่คุณใช้
  }
})
