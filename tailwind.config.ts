import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        emerald: {
          950: '#031a10',
          900: '#062d1c',
          850: '#093a25',
          800: '#065f46',
          700: '#047857',
          600: '#059669',
          500: '#10b981',
          400: '#34d399',
          300: '#6ee7b7',
        },
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        },
        obsidian: {
          950: '#070a08',
          900: '#0d1310',
          800: '#151d19',
          700: '#1f2a24',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        '3d-subtle': '0 20px 40px -15px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)',
        '3d-card': '0 25px 50px -12px rgba(6, 45, 28, 0.15), 0 0 0 1px rgba(255,255,255,0.1)',
        '3d-hover': '0 35px 60px -15px rgba(16, 185, 129, 0.2), 0 10px 20px -5px rgba(0,0,0,0.1)',
        'glow-emerald': '0 0 30px -5px rgba(16, 185, 129, 0.35)',
        'glow-gold': '0 0 25px -5px rgba(234, 179, 8, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
