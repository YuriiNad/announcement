
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    colors: {
      black: {
        DEFAULT: '#000000',
        fiord: '#495371',
      },
      red: {
        DEFAULT: '#F44336',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      cyan: {
        DEFAULT: '#006064',
        500: '#00BCD4',
      },
      teal: {
        DEFAULT: '#004D40',
        juniper: '#74959A',
        500: '#009688',
        
      },
      purple: {
        DEFAULT: '#4A148C',
        500: '#9C27B0',
      },
      bluegray: {
        DEFAULT: '#263238',
        rockblue: '#9CC3C9',
        500: '#607D8B',
        200: '#90A4AE',
        100: '#CFD8DC',
      },
      orange: {
        DEFAULT: '#E65100',
        flamingo: '#F15A24',
        sidecar: '#F1E0AC',
        700: '#F57C00',
        600: '#FB8C00',
        500: '#FF9800',
        400: '#FFA726',
        300: '#FFB74D',
      },
      brown: {
        DEFAULT: '#3E2723',
        600: '#6D4C41',
        500: '#795548',
        400: '#8D6E63',
        300: '#A1887F',
        200: '#BCAAA4',
        sorrel: '#CEAB93',
      },
      green: {
        DEFAULT: '#1B5E20',
        sumergreen: '#98B4AA',
        sprout: '#C9D8B6',
        500: '#4CAF50',
      },
    },
    screens: {
      'phone': { max: '414px' },
      'tablet': { max: '768px' },
      'desktopS': { max: '850px' },
      'desktop': { max: '1024px' },
      'desktopM': { max: '1280px' },
      '2xs': '414px',
      'xs': '768px',
      's': '851px',
      'md': '1024px',
      'lg': '1280px',
      'xlg': '1440px',
      '2xlg': '1824px',
    },
    minWidth: {
      btn: '200px',
    },
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        10: '10px',
      },
      fontFamily: {
        inherit: 'inherit',
        syne: 'Syne\\ Mono',
      },
      fontSize: {
        DEFAULT: '16px',
      },
      height: {
        clear: 'calc(100% - 67px)',
      },
      width: {
        '124': '32rem',
      }
    },
  },
  plugins: [],
}
