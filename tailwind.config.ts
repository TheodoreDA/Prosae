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
        'body': '90vh',
        'footer': '40vh'
      },
      minHeight: {
        'header': '20vh',
        'body': '90vh',
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
      dropShadow: {
        'stoke': [
          '-1px -1px 0 #000',
          '1px -1px 0 #000',
          '-1px 1px 0 #000',
          '1px 1px 0 #000'
        ]
      },
      borderWidth: {
        '1': '1px'
      },
      top: {
        '22': '88px'
      }
    },
  },
  plugins: [],
};
export default config;
