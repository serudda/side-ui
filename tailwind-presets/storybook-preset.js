module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Oxygen-Sans"',
        'Ubuntu',
        'Cantarell',
        '"Helvetica Neue"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Fira Mono',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      borderWidth: {
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      },
      colors: {
        primary: {
          50: '#EFF8FF',
          100: '#DEF0FF',
          200: '#B6E2FF',
          300: '#75CdFF',
          400: '#2CB5FF',
          500: '#00A0FF',
          600: '#007BD4',
          700: '#0061AB',
          800: '#00528D',
          900: '#064574',
          950: '#042B4D',
        },

        secondary: {
          50: '#ECEDFD',
          100: '#C7C8FA',
          200: '#A1A3F7',
          300: '#7C7EF4',
          400: '#6366F1',
          500: '#4346EF',
          600: '#1E21EB',
          700: '#1215CE',
          800: '#0F11A9',
          900: '#0B0D83',
          950: '#080A5E',
        },
      },
      minWidth: (theme) => ({
        ...theme('width'),
        100: '26rem',
        128: '32rem',
      }),
      zIndex: {
        1: '1',
        10: '10', // Navbar
        20: '20', // Overlay
        30: '30', // Modal
        40: '40', // Toast
        50: '50', // Tooltip and Popover
      },
    },
  },
};
