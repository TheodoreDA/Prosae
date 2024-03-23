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
      'primary': '#f6efed',
      'darkBrown': '#403b35',
      'lighGray': '#f1f1f1'
    },
    extend: {
      height: {
        'body': '80vh',
        'footer': '40vh'
      },
      minHeight: {
        'header': '20vh',
        'body': '80vh'
      },
      maxHeight: {
        'header': '20vh'
      },
      dropShadow: {
        'stoke': [
          '-1px -1px 0 #000',
          '1px -1px 0 #000',
          '-1px 1px 0 #000',
          '1px 1px 0 #000'
        ]
      }
    },
  },
  plugins: [],
};
export default config;
