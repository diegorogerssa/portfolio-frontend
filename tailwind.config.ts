import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    height: {
      banner: '797px',
      skills: '730px',
      projects: '520px',
      about: '783px',
      contact: '900px'
      // },
      // width: {
      //   '1440': '1440px',
    },
  },
  plugins: [],
};
export default config;
