/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./popup/**/*.{html,js,jsx}",
    "./sidepanel/**/*.{html,js,jsx}",
    "./content/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9', // Apple VisionOS inspired soft blue
        secondary: '#64748b'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
