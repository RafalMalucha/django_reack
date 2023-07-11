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
                "primary": "#34cdd8",//done           
                "secondary": "#d01fa1",//done         
                "accent": "#98f5fe",//done                           
                "neutral": "#1e0a35",//done                          
                "base-100": "#112a34",//done                            
                "info": "#d5e9ea",//done                           
                "success": "#12fe85",//done                            
                "warning": "#fa631a",//done                            
                "error": "#e42221",//done
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

