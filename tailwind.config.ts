import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        card: '#1a1a1d',
        border: '#2a2a2e',
        muted: '#a1a1aa',
        accent: '#00ff88',
        'card-hover': '#3a3a3e',
        'surface': '#111113',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,255,136,0.08), transparent)',
      },
    },
  },
  plugins: [],
}

export default config
