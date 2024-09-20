/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        HKLight:['HKGroteskWide-Light'],
        HKregular:['HKGroteskWide-Regular'],
        HKMedium:['HKGroteskWide-Medium'],
        HKSemiBold:['HKGroteskWide-SemiBold'],
        HKBold:['HKGroteskWide-Bold'],
        HKExtraBold:['HKGroteskWide-ExtraBold'],
        HKBlack:['HKGroteskWide-Black'],
      },
      screens: {
        'xl': '1281px',
        'navbarBreakpoint': '840px',
      },
      colors: {
        'primaryColor' : '#1A181A',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 100s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }             
    },
  },
  plugins: [],
}