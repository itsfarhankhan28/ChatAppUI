/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xxsm: '350px',
      xsm: '425px',
      mobile: '425px',
      sm: '640px',
      tablet: '640px',
      md: '768px',
      lg: '1024px',
      laptop: '1024px',
      xl: '1440px',
      desktop: '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-image': "url('/IMG/secondpagebg.png')"
      },
      colors:{
        'bg-color':'#FFFFFF',
        'btn-color':'#FFC746',
        'typo-color':'#69235B',
        'chat-color':'#69235B',
        'chat-bg':'#F8F8FF'
      },
      fontFamily:{
        'rem':['sans-serif'],
      }
    },
  },
  plugins: [],
}
