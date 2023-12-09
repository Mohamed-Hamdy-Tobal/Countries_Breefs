/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT ({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
})

// Here we apply an configuration customization to the selector build in tailwind like (colors, animation, )