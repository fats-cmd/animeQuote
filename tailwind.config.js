/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,  // Centers the container by default
        padding: {
          DEFAULT: '1rem',    // Default padding for all containers
          sm: '4rem',         // Padding for small screens (sm)
          md: '3rem',         // Padding for medium screens (md)
          lg: '2rem',         // Padding for large screens (lg)
          xl: '1rem',         // Padding for extra-large screens (xl)
        },
    },

    clipPath: {
      'custom': 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
    },
    },

    fontFamily: {
      sans: ['OpenSans', 'sans-serif'],
      default: 'inter'
    },
  },
  plugins: [],
}

