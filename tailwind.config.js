module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        reveal: "reveal 0.5s ease-in-out",
        bouncee: "bouncee 1s infinite",
      },
      keyframes: {
        reveal: {
          "0%": {
            opacity: 0,
            transform: "translate(0, 10px)",
          },
        },
        bouncee: {
          "0%, 100%": {
            transform: "translateX(-50%) translateY(-55%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1);",
          },
          "50%": {
            transform: "translateX(-50%)",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1);",
          },
        },
      },
    },
  },
  plugins: [],
};
