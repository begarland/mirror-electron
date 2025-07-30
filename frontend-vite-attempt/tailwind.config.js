/** @type {import('tailwindcss').Config} */

import tailwindAnimated from "tailwindcss-animated";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        skilliq: {
          navy: "#1F3B83", // Primary Navy – Trust, professionalism
          teal: "#3FC1C9", // Accent Teal – Clarity, tech-forward
          green: "#27AE60", // Success Green – Confirmation, go
          gray: "#4B5563", // Slate Gray – Neutral body text
          sand: "#F4F6F8", // Soft Sand – Light background
          red: "#E63946", // Alert Red – Fraud/warning cues
        },
      },
    },
    plugins: [
      tailwindAnimated,
      // ...
    ],
  },
};
