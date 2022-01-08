module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        reveal: "reveal 0.5s ease-in-out",
      },
      keyframes: {
        reveal: {
          "0%": {
            opacity: 0,
            transform: "translate(0, 10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
