/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT ({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        main: '0 0 8px 2px #d1d0d0',
        mainHover: '0 0 9px 4px #d1d0d0',
        mainDark: '0 0 6px 4px #0c222f',
        mainDarkHover: '0 0 8px 6px #0f2634',
      },
      colors: {
        DME: '#2b3945',
        DMB: '#202c37',
        LMT: '#111517',
        LMI: '#858585',
        LMB: '#fafafa',
      },
      keyframes : {
        moveRight: {
          '0%' : {transform: 'translateX(0)'},
          '50%' : {transform: 'translateX(10px)'},
          '100%' : {transform: 'translateX(0)'},
        }
      },
      animation : {
        moveRight : 'moveRight 1s ease-in-out infinite', 
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200',
        '2xl': '1400px'
      },
    },
  },
  plugins: [],
})

// Here we apply an configuration customization to the selector build in tailwind like (colors, animation, )