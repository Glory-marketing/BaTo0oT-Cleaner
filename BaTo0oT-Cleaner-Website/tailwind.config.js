/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ed',
          100: '#b3ebc9',
          200: '#80dfa5',
          300: '#4dd381',
          400: '#26c75d',
          500: '#00bb39',
          600: '#00962e',
          700: '#007023',
          800: '#004b18',
          900: '#00250c',
        },
        dark: {
          50: '#f0f0f0',
          100: '#d1d1d1',
          200: '#b3b3b3',
          300: '#808080',
          400: '#4d4d4d',
          500: '#1a1a2e',
          600: '#16213e',
          700: '#0f3460',
          800: '#0a0a1a',
          900: '#050510',
        },
        accent: {
          500: '#00f5ff',
          600: '#00c4cc',
        },
        neon: {
          green: '#39ff14',
          purple: '#bf00ff',
          blue: '#0080ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 57, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 57, 0.6), 0 0 40px rgba(0, 255, 57, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
