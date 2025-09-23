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
        brand: {
          // Green (Primary - Nature/Growth)
          green: '#16A34A',     // main green
          green2: '#15803D',    // darker green for hover
          green3: '#22C55E',    // lighter green
          // Dark Green (Secondary - Earth/Stability)
          darkgreen: '#166534', // main dark green
          darkgreen2: '#14532D',// darker dark green for hover
          darkgreen3: '#22C55E',// lighter dark green
          // Black & White & Neutrals
          black: '#000000',     // pure black
          black2: '#1F2937',    // softer black
          white: '#FFFFFF',     // pure white
          off: '#FAFAFA',       // off-white
          gray: '#F3F4F6',      // light gray
          // Legacy colors (for gradual transition)
          red: '#16A34A',       // now green for compatibility
          red2: '#15803D',      // now green2 for compatibility
          red3: '#22C55E',      // now green3 for compatibility
          blue: '#166534',      // now dark green for compatibility
          blue2: '#14532D',     // now darkgreen2 for compatibility
          blue3: '#22C55E',     // now green3 for compatibility
          yellow: '#16A34A',    // now green for compatibility
          yellow2: '#15803D',   // now green2 for compatibility
          yellow3: '#22C55E',   // now green3 for compatibility
          gold: '#16A34A',      // now green for compatibility
          gold2: '#15803D',     // now green2 for compatibility
        }
      },
      fontFamily: {
        heading: ['Anton', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        btn: '0 2px 0 #0B0D0F',
        card: '0 10px 30px rgba(0,0,0,.09)',
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      backgroundImage: {
        'speckle': "url('/textures/speckle.svg')",
        'noise': "url('/textures/noise.png')",
      }
    }
  },
  plugins: [],
}
export default config