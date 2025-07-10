import daisyui from 'daisyui';


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ "Poppins", "sans-serif"],
        caveat: ["Caveat", ],
        indie: ["Indie Flower"],
        dancing: ["Dancing Script"],
      },
       animation: {
        'bounce-once': 'bounce 1s ease-in-out 1'
      }
    },
  },
  plugins: [
    daisyui,
  
  ],
};
