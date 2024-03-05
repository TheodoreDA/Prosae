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
      'primary': '#f6efed'
    },
    extend: {
      height: {
        'body': '80vh',
        'footer': '20vh'
      },
      minHeight: {
        'header': '20vh',
        'body': '80vh'
      },
      maxHeight: {
        'header': '20vh'
      }
    },
  },
  plugins: [],
};
export default config;
