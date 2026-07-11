/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}', '../extension/**/*.{js,jsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffffff',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#ffffff', // Primary is white in monochrome
          600: '#1e1e1e', // Dark gray/black hover
          700: '#2a2a2a', // Border gray
          800: '#111111', // Card background
          900: '#090909',
          950: '#000000',
        },
        surface: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#b3b3b3', // Secondary text
          300: '#b3b3b3',
          400: '#b3b3b3',
          500: '#808080', // Muted text
          600: '#525252',
          700: '#2a2a2a', // Borders (#2A2A2A)
          800: '#1e1e1e', // Hover state
          900: '#111111', // Cards (#111111)
          950: '#000000', // Background (#000000)
        },
        accent: {
          violet: '#ffffff',
          fuchsia: '#ffffff',
          cyan: '#ffffff',
          emerald: '#ffffff',
          amber: '#ffffff',
          rose: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'none',
        'gradient-mesh': 'none',
        'gradient-dark': 'none',
      },
      boxShadow: {
        glass: 'none',
        'glass-sm': 'none',
        glow: 'none',
        'glow-lg': 'none',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.2s ease-out',
        'slide-in-right': 'slideInRight 0.2s ease-out',
        'pulse-glow': 'none',
        'float': 'none',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
