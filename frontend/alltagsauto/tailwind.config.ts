import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'auto': 'url("https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          'auto2': 'url("https://images.pexels.com/photos/5126839/pexels-photo-5126839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          'auto3': 'url("https://images.pexels.com/photos/230802/pexels-photo-230802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        },
        colors: {
          // primary: '#222831',
          secondary: '#008A90',
          customWhite: '#FAFAFA',
          tertiary: '#C66912'
        
    },
  },
  },
  plugins: [
    
    require('@tailwindcss/forms'),
  ],
};
export default config;
