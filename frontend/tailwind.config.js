/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      fontSize: {
        'title':'55px',
      },
      width: {
        'login': '360px',
      },
      height: {
        'login': '320px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          // LadingPage
          'InicioPagePng': 'url(https://res.cloudinary.com/dhb9rdaoc/image/upload/v1692845885/byhioqiqlrdrjv7mmhdi.jpg)',
          'AboutUsPng': 'url(https://res.cloudinary.com/dhb9rdaoc/image/upload/v1692846188/bvggzs6850dkbzjuazh1.jpg)',
      },
      colors: {

        // COLORES PRINCIPALES
        // Azul
        'Azul/50': '#EEF2FF',
        'Azul/100': '#EOE7FF',
        'Azul/R200': '#c7d2fe',
        'Azul/300': '#a5b4fc',
        'Azul/400': '#818cf8',
        'Azul/500': '#6366f1',
        'Azul/600': '#4f4fe5',
        'Azul/700': '#4338Ca',
        'Azul/800': '#3730A3',
        'Azul/900': '#312E81',

        // Morado
        'Morado/50': '#FAF5FF',
        'Morado/100': '#F3E8FF',
        'Morado/R200': '#E9D5FF',
        'Morado/300': '#D8B4FE',
        'Morado/400': '#C084FC',
        'Morado/500': '#A855F7',
        'Morado/600': '#9333EA',
        'Morado/700': '#7E22CE',
        'Morado/800': '#6B21A8',
        'Morado/900': '#581C87',
        

        // Escala de Grises

        'Grises/50': '#fbfbfb',
        'Grises/100': '#F0F0F0',
        'Grises/150': '#EAEAEA',
        'Grises/200': '#E0E0E0',
        'Grises/250': '#DADADA',
        'Grises/300': '#999999',
        'Grises/350': '#858585',
        'Grises/400': '#585858',
        'Grises/450': '#4A4A4A',
        'Grises/500': '#3E3E3E',
        'Grises/550': '#2E2E2E',
        'Grises/600': '#141414',

        // Estados

        // Warning
        'Rojo/600': '#942828',
        'Rojo/500': '#A92E2E',
        'Rojo/400': '#F24141',
        'Rojo/300': '#F46161',
        'Rojo/200': '#F79191',
        'Rojo/100': '#FAB1B1',
        'Rojo/50': '#FEECEC',
        // Precaution
        'Yellow/600': '#8E7323',
        'Yellow/500': '#A38429',
        'Yellow/300': '#E9BD3A',
        'Yellow/400': '#EDC85B',
        'Yellow/200': '#F2D98D',
        'Yellow/100': '#F6E4AE',
        'Yellow/50': '#FDF8EB',
        // Succes
        'Green/600': '#417F60',
        'Green/500': '#4A926E',
        'Green/400': '#6AD09D',
        'Green/300': '#83D8AE',
        'Green/200': '#A9E4C6',
        'Green/100': '#C2ESD7',
        'Green/50': '#F0FAF5',


      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
