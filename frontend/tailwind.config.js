/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
        colors: {
          'blue': '#1fb6ff',
          'purple': '#7e5bef',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'yellow': '#ffc82c',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
        },
        fontFamily: {
          sans: ['League Gothic', 'sans-serif'],
          serif: ['Roboto', 'serif'],
        },
        extend: {
          spacing: {
            '128': '32rem',
            '144': '36rem',
          },
          borderRadius: {
            '4xl': '2rem',
          }
        }
    },
    daisyui: {
        themes: [
          {
            mytheme: {
                "primary": "#e8c813",           
                "secondary": "#a3e635",         
                "accent": "#e1e4eb",                           
                "neutral": "#292929",                            
                "base-100": "#1c1c1c",                            
                "info": "#4592C9",                           
                "success": "#14A95E",                            
                "warning": "#fde047",                            
                "error": "#E65C70",
            },
          },
        ],
      },
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {}
    },
    plugins: [require("daisyui")]
  };

