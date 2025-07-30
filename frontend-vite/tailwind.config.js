/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dashg-green": { DEFAULT: "#132A18" },
      },
    },
  },
  plugins: [],
};
