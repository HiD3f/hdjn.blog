module.exports = {
    prefix: '',
    important: true,
    components: true,
    mode: 'jit',
    purge: {
      content: [
        './**/*.{vue}',
        './**/**/*.{md}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          // Effy Brand
          hdjn: {
            'red': '#02273c',
          },
          // Other colors
          'white-darkened': '#f7f9ff',
          'light-blue': '#598ba7',
        },
        screens: {
          'xs': '360px',
          '2xl': '1600px',
        },
      },
      // fontFamily: {
      //   'black': 'gilroyblack, Arial, sans-serif',
      //   'bold': 'gilroybold, Arial, sans-serif',
      //   'medium': 'gilroymedium, Arial, sans-serif',
      //   'regular': 'gilroyregular, Arial, sans-serif',
      //   'light': 'gilroylight, Arial, sans-serif'
      // },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '16px 16px 0px 0px rgba(0, 0, 0, 0.3)',
        lg: '0 5px 20px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 15px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      }
    },
    content: {
      markdown: {
        prism: {
          theme: 'prism-themes/themes/prism-material-oceanic.css'
        }
      }
    },
    variants: {
      opacity: ({ after }) => after(['disabled'])
    },
};
