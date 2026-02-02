/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            purple: {
                DEFAULT: '#D972FF',
                100: '#F3D6FF',
                200: '#E9BFFF',
                300: '#DEAAFF',
                400: '#D48FFF',
                500: '#C76EFF',
                600: '#B84DFF',
                700: '#A52AFF',
                800: '#9211FF',
                900: '#A23BCF',
                },
            violet: {
                DEFAULT: '#8447FF',
                100: '#E3D7FF',
                200: '#CDB3FF',
                300: '#B58EFF',
                400: '#9E6AFF',
                500: '#8447FF',
                600: '#6A23FF',
                700: '#4F00FF',
                800: '#3F00CC',
                900: '#2E0080',
            },
            mint: {
                DEFAULT: '#8CFFDA',
                100: '#D9FFF4',
                200: '#B3FFE6',
                300: '#8CFFD9',
                400: '#66FFCC',
                500: '#3DFFBF',
                600: '#1AFFB3',
                700: '#00E699',
                800: '#00B377',
                900: '#007A4D',
            },
            yellow: {
                DEFAULT: '#F4C300',
                50: '#FFF8E1', 
                100: '#FFEFB3',
                200: '#FFE580', 
                300: '#FFDA4D', 
                400: '#FFD01A', 
                500: '#F4C300', // base color
                600: '#D4A700', 
                700: '#B48C00', 
                800: '#947100', 
                900: '#745700',
             },
            ivory: {
                DEFAULT: '#E9E9E1',
                100: '#FFFFFF',
                200: '#FDFDF9',
                300: '#FAFAF2',
                400: '#F5F5EB',
                500: '#EDEDE4',
                600: '#E4E4DB',
                700: '#D9D9D0',
                800: '#BFBFB7',
                900: '#7A7A73', 
            },
            white: '#FFFFFF',
            black: '#000000',
            gray: {
                DEFAULT: '#808080',
                100: '#D7D7D7',
                200: '#BFBFBF',
                300: '#A6A6A6',
                400: '#8C8C8C',
                500: '#737373',
                600: '#595959',
                700: '#404040',
                800: '#262626',
                900: '#0D0D0D',
            }

        },
        fontFamily: {
            brand: ['Fredoka', 'sans-serif'], 
        },
    },
  },
  plugins: [],
}
