module.exports = {
  mode: "jit", // Enable JIT mode
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Specify the paths to all of your components so Tailwind can tree-shake unused styles in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-blue": "#007ace",
        "light-blue": "#3ba8ff",
      },
    },
  },
  variants: {
    extend: {}, // Enable additional variants here
  },
  plugins: [],
};
