import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        Light_Grayish_Cyan_background: "hsl(180, 52%, 96%)",
        Light_Grayish_Cyan: "hsl(180, 31%, 95%)",
        Dark_Grayish_Cyan: "hsl(180, 8%, 52%)",
        Very_Dark_Grayish_Cyan: "hsl(180, 14%, 20%)"
      }, 
      fontFamily: {
        Leauge_spartan: ['League Spartan', 'sans-serif'] 
      },
      backgroundImage: { 
        bg_header_desktop: "url('/images/bg-header-desktop.svg')",
        bg_header_mobile: "url('/images/bg-header-mobile.svg')"
      }
    },
  },
  plugins: [],
}
export default config
