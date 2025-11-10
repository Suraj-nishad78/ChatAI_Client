import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react()
//   ],
// })

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],

  // 👇 Add this section
  server: {
    host: true,   // allows access from mobile devices on same Wi-Fi
    port: 5173    // (optional) set port; you can change it if you want
  }
})
