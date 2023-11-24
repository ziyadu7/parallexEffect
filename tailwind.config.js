// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'wild1':'url("https://wallpapers.com/images/hd/dark-nature-s3in5w7pgukadq51.jpg")',
        'wild2':'url("https://w0.peakpx.com/wallpaper/553/494/HD-wallpaper-black-panther-predator-panther-on-a-black-background-wild-animals-wild-cats-panthers.jpg")',
        'wild3':'url("https://img2.wallspic.com/crops/3/8/9/4/84983/84983-mane-stallion-bridle-white-mustang_horse-2560x1600.jpg")'
      }
    },
  },
  plugins: [],
});