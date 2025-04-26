/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        celestial: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c0d6ff',
          300: '#91b8ff',
          400: '#5a91ff',
          500: '#2e6be6',
          600: '#1c4fc9',
          700: '#1a3da6',
          800: '#1b358a',
          900: '#1b2f6e',
          950: '#111c42',
        },
        angel: {
          50: '#fef7ed',
          100: '#fcebd5',
          200: '#f9d4aa',
          300: '#f5b876',
          400: '#f0954b',
          500: '#ec7518',
          600: '#db5913',
          700: '#b63e14',
          800: '#913219',
          900: '#762b19',
          950: '#40140b',
        },
        ethereal: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        }
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(99, 102, 241, 0.15)',
        'glow-lg': '0 0 25px 10px rgba(99, 102, 241, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      fontFamily: {
        'serif': ['Garamond', 'Georgia', 'serif'],
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};