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
          // Blue (Primary - matching logo)
          blue: '#2B7A9B',      // main blue from logo
          blue2: '#1E5F7A',     // darker blue for hover
          blue3: '#4A9BC4',     // lighter blue
          // Yellow (Accent - matching logo)
          yellow: '#F5B800',    // main yellow from logo
          yellow2: '#D49F00',   // darker yellow for hover
          yellow3: '#FFD233',   // lighter yellow
          // Black & Neutrals
          black: '#0B0D0F',     // rich black
          black2: '#1A1A1A',    // softer black
          off: '#FBFBFB',
          gray: '#F2F2F3',
          // Legacy gold (keeping for gradual transition)
          gold: '#F5B800',      // now same as yellow
          gold2: '#D49F00',     // now same as yellow2
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