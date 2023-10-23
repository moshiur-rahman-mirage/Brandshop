/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#171721',
      'body-color': '#ebebeb',
      'light': '#BDCDD6',
      'fade': '#EEE9DA',
    },
  },
  plugins: [require("daisyui", "flowbite/plugin")],
}

