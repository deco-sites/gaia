import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      maxwidth: {
          DEFAULT: '100%',
          sm: '576px',
          lg: '750px',
          xl: '970px',
          '2xl': '1074px',
      },
      screens: {
          sm: '576px', // Defina o tamanho do container para dispositivos pequenos
          md: '768px', // Defina o tamanho do container para dispositivos médios
          lg: '992px', // Defina o tamanho do container para dispositivos grandes
          xl: '1074px', // Defina o tamanho do container para dispositivos extra grandes
          '2xl': '1074px', // Defina o tamanho do container para dispositivos 2xl
        },
    },
    extend: {
        colors: {
            'primary': '#F9F9F9',
            'secondary': '#5E5E5E',
            'blue': '#013D9E',
            'gray-1': '#969696',
            'gray-2': '#636363',
            'gray-3': '#C3C3C3',
        },
        fontFamily: {
            sans: ['Crystal', 'sans-serif'], // Defina 'MinhaFonte' como a fonte padrão
        },
    },   
  },
};
