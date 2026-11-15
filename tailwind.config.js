/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07090e',
        surface: {
          50: '#1b2234',
          100: '#151b2a',
          200: '#101522',
          300: '#0c101b',
          400: '#090d16',
          500: '#07090e',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          accent: 'rgba(56, 189, 248, 0.3)',
          glow: 'rgba(99, 102, 241, 0.35)',
        },
        accent: {
          cyan: '#38bdf8',
          electric: '#00d2ff',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(56, 189, 248, 0.08), transparent 80%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
