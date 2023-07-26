/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
