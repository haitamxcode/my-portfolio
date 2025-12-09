/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heavitas: ['Heavitas', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        minecraft: ['Minecraft', 'sans-serif'],
        karina: ['Karina', 'sans-serif'],
        'super-crawler': ['Super Crawler', 'sans-serif'],
        'angel-wish': ['Angel Wish', 'sans-serif'],
        'on-street': ['On Street', 'sans-serif'],
        'graffiti-youth': ['Graffiti Youth', 'sans-serif'],
        stormlight: ['Stormlight', 'sans-serif'],
        boston: ['Boston', 'sans-serif'],
        'techno-hideo': ['Techno Hideo', 'sans-serif'],
        'techno-hideo-bold': ['Techno Hideo Bold', 'sans-serif'],
        digital: ['Digital', 'serif'],
        'digital-bold': ['Digital-Bold', 'sans-serif'],
        'digital-italic': ['Digital-Italic', 'sans-serif'],
        'digital-bold-italic': ['Digital-Bold-Italic', 'sans-serif'],
        kastroo: ['Kastroo', 'sans-serif'],
        ghrathe: ['Ghrathe', 'sans-serif'],
        rodfat: ['Rodfat', 'serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',

        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 hsl(var(--primary) / 0.4)' },
          '50%': { boxShadow: '0 0 30px 5px hsl(var(--primary) / 0.5)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
