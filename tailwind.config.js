// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     fontFamily: {
//       body: ["Inconsolata"],
//       nunito: ["Nunito"],
//     },
//   },
//   daisyui: {
//     themes: [
//       {
//         light: {
//           color: "#ffff",
//           primary: "#a991f7",
//           secondary: "#f6d860",
//           accent: "#37cdbe",
//           neutral: "#3d4451",
//           "base-100": "#ffffff",
//         },
//         night: {
//           color: "#c471e2",
//           primary: "#1e0723",
//           secondary: "#3e58d6",
//           accent: "#98d6fc",
//           neutral: "#8f3a80",
//           "base-100": "#260e74",
//         },
//       },
//     ],
//   },
//   darkMode: ["selector", '[data-theme="night"]'],
//   plugins: [require("daisyui")],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Inconsolata"],
      nunito: ["Nunito"],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#330033",
          secondary: "#07b7ed",
          color: "#ffffff",
          background: "linear-gradient(to bottom, #575cff, #9dc6ff)",
        },
      },
      {
        myDarkTheme: {
          primary: "#153595",
          secondary: "#c183e2",
          accent: "#37cdbe",
          neutral: "#3d4451",
          color: "#000000",
        },
      },
    ],
    darkMode: ["selector", '[data-mode="myDarkTheme"]'],
  },

  plugins: [require("daisyui")],
};
