import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      'primary': '#fff0e3',
      'secondary': '#bc6c25',
      'tertiary': '#31241e',
      'lighGray': '#f1f1f1'
    },
    extend: {
      borderRadius: {
        'oval': '50%',
      },
      height: {
        'header': '6rem',
        'footer': '21rem'
      },
      width: {
        'extra': '85rem',
        'std-screen': '120rem'
      },
      minHeight: {
        'mini-body': '42rem',
        'body': '51rem',
        'big-body': '73rem',
        'minibody': '80vh'
      },
      maxHeight: {
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem'
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/5': '40%',
        'extra': '85rem',
        'std-screen': '120rem'
      },
      borderWidth: {
        '1': '1px'
      },
      top: {
        '22': '88px'
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))'
      },
      fontSize: {
        '2.5xl': '1.65rem',
        '3.5xl': '2.07rem',
        '4.5xl': '2.625rem',
      },
      screens: {
        '2xl': '85rem',
      }
    },
  },
  plugins: [],
};
export default config;
