/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        void: '#0a0a0a',
        kintsugi: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f2d994',
          300: '#ebc45c',
          400: '#d4a843',
          500: '#c4922a',
          600: '#a67321',
          700: '#85561e',
          800: '#6e4520',
          900: '#5e3a1f',
        },
        consciousness: {
          50: '#f3f0ff',
          100: '#e9e3ff',
          200: '#d5ccff',
          300: '#b8a4ff',
          400: '#9670ff',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b0f7a',
        },
        soft: '#f8fafc',
        warm: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'crack-appear': 'crack-appear 2s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        'crack-appear': {
          '0%': { opacity: '0', strokeDashoffset: '1000' },
          '100%': { opacity: '1', strokeDashoffset: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'kintsugi-gradient': 'linear-gradient(135deg, #d4a843 0%, #c4922a 50%, #a67321 100%)',
        'consciousness-gradient': 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%)',
        'void-gradient': 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 70%)',
      },
    },
  },
  plugins: [],
};
