/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cern: {
          blue: "#1c2c38",
          dark: "#1c2c38",
          light: "#EAF4FF",
          grey: "#F5F7FA"
        }
      }
    }
  },
  plugins: []
};
