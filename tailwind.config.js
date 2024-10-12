/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow1: ["0 0px 65px rgba(255, 255,255, 0.2)"],
        glow2: ["0 0px 30px rgba(255,255, 255, 0.1)"],
      },
    },
  },
  plugins: [],
};
