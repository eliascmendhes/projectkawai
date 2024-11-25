/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        kawaii: ['Quicksand', 'sans-serif']
      },
      colors: {
        kawaii: {
          pink: '#FFD1DC',
          blue: '#B5E6E6',
          lavender: '#E6E6FA',
          mint: '#98FF98',
          peach: '#FFDAB9',
          cream: '#FFFDD0',
          lilac: '#DCD0FF',
          coral: '#FFB7B2'
        },
        'kawaii-gradient': {
          start: '#f8b4d9',
          end: '#9f7aea'
        }
      },
      animation: {
        'sparkle': 'sparkle 1.5s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        }
      },
      boxShadow: {
        'kawaii': '0 8px 32px rgba(31, 38, 135, 0.15)',
        'kawaii-hover': '0 12px 40px rgba(31, 38, 135, 0.2)'
      }
    }
  },
  plugins: []
};
