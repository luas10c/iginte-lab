import { defineConfig, loadEnv, UserConfigFn } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig(({command, mode}) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd())
  }

  return {
    plugins: [
      react()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.', 'src')
      }
    }
  }
})