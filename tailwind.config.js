import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Ваши кастомные цвета
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe'
          // ... остальные оттенки
        }
      }
    }
  },
  darkMode: 'class', // или "media"
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#006FEE',
              foreground: '#FFFFFF'
            },
            background: {
              DEFAULT: '#FFFFFF'
            }
          }
        }
      }
    })
  ]
}
