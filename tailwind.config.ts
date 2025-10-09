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
          // Red (Primary - Luxury/Performance)
          red: '#DC2626',       // main red
          red2: '#B91C1C',      // darker red for hover
          red3: '#EF4444',      // lighter red
          // Dark Red (Secondary - Deep/Elegant)
          darkred: '#991B1B',   // main dark red
          darkred2: '#7F1D1D',  // darker red for hover
          darkred3: '#B91C1C',  // lighter dark red
          // Black & White & Neutrals
          black: '#000000',     // pure black
          black2: '#1F2937',    // softer black
          white: '#FFFFFF',     // pure white
          off: '#FAFAFA',       // off-white
          gray: '#F3F4F6',      // light gray
          // Legacy colors (for compatibility)
          green: '#DC2626',     // now red for compatibility
          green2: '#B91C1C',    // now red2 for compatibility
          green3: '#EF4444',    // now red3 for compatibility
          darkgreen: '#991B1B', // now dark red for compatibility
          darkgreen2: '#7F1D1D',// now darkred2 for compatibility
          darkgreen3: '#B91C1C',// now red2 for compatibility
          blue: '#DC2626',      // now red for compatibility
          blue2: '#B91C1C',     // now red2 for compatibility
          blue3: '#EF4444',     // now red3 for compatibility
          yellow: '#DC2626',    // now red for compatibility
          yellow2: '#B91C1C',   // now red2 for compatibility
          yellow3: '#EF4444',   // now red3 for compatibility
          gold: '#DC2626',      // now red for compatibility
          gold2: '#B91C1C',     // now red2 for compatibility
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