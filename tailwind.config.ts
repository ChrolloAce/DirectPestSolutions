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
          // Red (Primary - Hot/Heat)
          red: '#DC2626',       // main red
          red2: '#B91C1C',      // darker red for hover
          red3: '#EF4444',      // lighter red
          // Blue (Primary - Cold/Cool)
          blue: '#2563EB',      // main blue
          blue2: '#1D4ED8',     // darker blue for hover
          blue3: '#60A5FA',     // lighter blue
          // Black & White & Neutrals
          black: '#000000',     // pure black
          black2: '#1F2937',    // softer black
          white: '#FFFFFF',     // pure white
          off: '#FAFAFA',       // off-white
          gray: '#F3F4F6',      // light gray
          // Legacy colors (for gradual transition)
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