/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        goku: "url('./src/assets/Imge/goku.jpeg')",
        dino: "url('./src/assets/Imge/dino1.jpg')",
      },
    },
  },
  plugins: [],
};
