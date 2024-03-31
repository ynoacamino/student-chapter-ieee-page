/* eslint-disable global-require */
import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          title: 'var(--primary-title)',
          'title-hover': 'var(--primary-title-hover)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'web-orange': {
          DEFAULT: 'var(--web-orange-500)',
          50: 'var(--web-orange-50)',
          100: 'var(--web-orange-100)',
          200: 'var(--web-orange-200)',
          300: 'var(--web-orange-300)',
          400: 'var(--web-orange-400)',
          500: 'var(--web-orange-500)',
          600: 'var(--web-orange-600)',
          700: 'var(--web-orange-700)',
          800: 'var(--web-orange-800)',
          900: 'var(--web-orange-900)',
          950: 'var(--web-orange-950)',
        },
        'web-sky': {
          DEFAULT: 'var(--web-sky-500)',
          50: 'var(--web-sky-50)',
          100: 'var(--web-sky-100)',
          200: 'var(--web-sky-200)',
          300: 'var(--web-sky-300)',
          400: 'var(--web-sky-400)',
          500: 'var(--web-sky-500)',
          600: 'var(--web-sky-600)',
          700: 'var(--web-sky-700)',
          800: 'var(--web-sky-800)',
          900: 'var(--web-sky-900)',
          950: 'var(--web-sky-950)',
        },
        'web-blue': {
          DEFAULT: 'var(--web-blue-700)',
          50: 'var(--web-blue-50)',
          100: 'var(--web-blue-100)',
          200: 'var(--web-blue-200)',
          300: 'var(--web-blue-300)',
          400: 'var(--web-blue-400)',
          500: 'var(--web-blue-500)',
          600: 'var(--web-blue-600)',
          700: 'var(--web-blue-700)',
          800: 'var(--web-blue-800)',
          900: 'var(--web-blue-900)',
          950: 'var(--web-blue-950)',
        },
        'web-gray': {
          DEFAULT: 'var(--web-gray-500)',
          50: 'var(--web-gray-50)',
          100: 'var(--web-gray-100)',
          200: 'var(--web-gray-200)',
          300: 'var(--web-gray-300)',
          400: 'var(--web-gray-400)',
          500: 'var(--web-gray-500)',
          600: 'var(--web-gray-600)',
          700: 'var(--web-gray-700)',
          800: 'var(--web-gray-800)',
          900: 'var(--web-gray-900)',
          950: 'var(--web-gray-950)',
        },
        'palete-red': 'hsl(var(--palete-red))',
        'palete-orange': 'hsl(var(--palete-orange))',
        'palete-yellow': 'hsl(var(--palete-yellow))',
        'palete-white-green': 'hsl(var(--palete-white-green))',
        'palete-green': 'hsl(var(--palete-green))',
        'palete-purple': 'hsl(var(--palete-purple))',
        'palete-teal': 'hsl(var(--palete-teal))',
        'palete-blue': 'hsl(var(--palete-blue))',
        'palete-cyan': 'hsl(var(--palete-cyan))',
        section: 'var(--section)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-l': 'conic-gradient(from 90deg at -10% 100%, #bcc1cd 0deg, #bcc1cd 90deg, #fff 1turn)',
        'gradient-r': 'conic-gradient(from -90deg at 110% 100%, #fff 0deg, #ebecf0 90deg, #ebecf0 1turn)',
        'gradient-l-dark': 'conic-gradient(from 90deg at -10% 100%, #282b35 0deg, #282b35 90deg, #282b35 1turn)',
        'gradient-r-dark': 'conic-gradient(from -90deg at 110% 100%, #23272f 0deg, #23272f 90deg, #23272f 1turn)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
