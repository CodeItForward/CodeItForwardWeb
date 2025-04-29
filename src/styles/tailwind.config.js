/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
safelist: [
  {
    pattern: /bg-(primary|secondary)-(50|100|200|300|400|500|600|700|800|900)/,
  },
  {
    pattern: /text-(primary|secondary)-(50|100|200|300|400|500|600|700|800|900)/,
  },
  'text-neutral-800',
  'text-white',
]
  theme: {
    extend: {
      colors: {
        // Primary color palette
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c8ff',
          300: '#66adff',
          400: '#3392ff',
          500: '#0077ff', // Primary base
          600: '#005fcc',
          700: '#004799',
          800: '#002f66',
          900: '#001833',
        },
        // Secondary color palette - teal
        secondary: {
          50: '#e6faf7',
          100: '#ccf5ef',
          200: '#99ebdf',
          300: '#66e0cf',
          400: '#33d6bf',
          500: '#00ccaf', // Secondary base
          600: '#00a38c',
          700: '#007a69',
          800: '#005246',
          900: '#002923',
        },
        // Accent color palette - warm orange
        accent: {
          50: '#fff1e6',
          100: '#ffe3cc',
          200: '#ffc799',
          300: '#ffab66',
          400: '#ff8f33',
          500: '#ff7300', // Accent base
          600: '#cc5c00',
          700: '#994500',
          800: '#662e00',
          900: '#331700',
        },
        // Dark blue for important elements
        dark: {
          50: '#e6eaf0',
          100: '#ccd5e0',
          200: '#99abc2',
          300: '#6682a3',
          400: '#335885',
          500: '#002e66',
          600: '#002551',
          700: '#001c3d',
          800: '#001228',
          900: '#000914',
        },
        // Additional functional colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        // Main font families
        heading: ['Quicksand', 'system-ui', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        // Border radius system
        DEFAULT: '0.5rem',
        'sm': '0.25rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        // Shadow system
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'md': '0 6px 10px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'bounce-gentle': 'bounce-gentle 2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};