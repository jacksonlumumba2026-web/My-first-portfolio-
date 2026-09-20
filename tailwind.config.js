/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#08090a',
          900: '#0a0b0d',
          800: '#111214',
          700: '#1a1c1f',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#f0d080',
          dim: '#8a742f',
        },
        cream: '#f6f4ee',
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(circle, rgba(201,168,76,0.14) 0%, transparent 65%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        gold: '0 20px 60px -15px rgba(201,168,76,0.35)',
        premium: '0 30px 80px -20px rgba(0,0,0,0.45)',
      },
      letterSpacing: {
        tightest: '-0.06em',
      },
    },
  },
  plugins: [],
};
