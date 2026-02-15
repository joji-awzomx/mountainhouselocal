import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm terracotta — inspired by Mountain House Mediterranean tile roofs
        primary: {
          50: '#fdf5f3',
          100: '#fce8e2',
          200: '#fbd5c9',
          300: '#f7b6a3',
          400: '#f08d6e',
          500: '#e46b44',
          600: '#d35029',
          700: '#b14022',
          800: '#923720',
          900: '#793320',
          950: '#41170d',
        },
        // Warm sand — stucco walls and Central Valley landscape
        sand: {
          50: '#faf8f5',
          100: '#f2ede5',
          200: '#e4d9ca',
          300: '#d3c0a8',
          400: '#c0a385',
          500: '#b38d6d',
          600: '#a67b5f',
          700: '#8a6450',
          800: '#715245',
          900: '#5c443b',
        },
        // Sage green — Mountain House parks and landscaping
        sage: {
          50: '#f4f7f4',
          100: '#e3eae2',
          200: '#c8d5c6',
          300: '#a2b89f',
          400: '#789674',
          500: '#597a55',
          600: '#446240',
          700: '#384f35',
          800: '#2f402d',
          900: '#283527',
          950: '#131d13',
        },
        // California sky blue
        sky: {
          50: '#f0f8ff',
          100: '#e0f0fe',
          200: '#b9e2fe',
          300: '#7ccbfd',
          400: '#36b2fa',
          500: '#0c98eb',
          600: '#0079c9',
          700: '#0060a3',
          800: '#055186',
          900: '#0a446f',
        },
        // Golden sunset — warm accents
        sunset: {
          50: '#fff7ed',
          100: '#ffeed5',
          200: '#fdd9aa',
          300: '#fcbc74',
          400: '#fa953c',
          500: '#f87716',
          600: '#e95c0c',
          700: '#c1440c',
          800: '#9a3712',
          900: '#7c2f12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
export default config
