/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const plugins = [];
export const theme = {
  extend: {
    colors: {
      'core-primary': '#ffffffff',
      'core-secondary': '#212121ff'
    }
  }
};
