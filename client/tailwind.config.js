/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#55c57a",
      secondary: "#D0D0D0",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      white: "#ffff",
      black: "black",
      green: "#13ce66",
      gray: "#273444",
      lightGray: "#f2f5f7",

      red: "red",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      height: {
        headerHeight: "60px",
        bodyHeight: "calc(100vh - 60px)",
        gridHeight: "calc(100vh-60px-60px)",
      },
    },
  },
  plugins: [],
};
