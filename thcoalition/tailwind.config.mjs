/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8ecf1',
          100: '#c5cdd9',
          200: '#9fadbf',
          300: '#798da5',
          400: '#5c7591',
          500: '#3f5d7d',
          600: '#334b66',
          700: '#27394e',
          800: '#1f2d3f',
          900: '#1a2332',
          950: '#111822',
        },
        transparency: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        slate: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        88: '22rem',
        128: '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.navy.900'),
            '--tw-prose-links': theme('colors.transparency.600'),
            '--tw-prose-bold': theme('colors.navy.900'),
            '--tw-prose-quotes': theme('colors.navy.700'),
            '--tw-prose-quote-borders': theme('colors.amber.500'),
            maxWidth: '72ch',
            a: {
              textDecoration: 'underline',
              textDecorationColor: theme('colors.transparency.300'),
              textUnderlineOffset: '3px',
              '&:hover': {
                textDecorationColor: theme('colors.transparency.600'),
              },
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
