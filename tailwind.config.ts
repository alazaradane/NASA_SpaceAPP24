import type { Config } from 'tailwindcss';

export default {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
      backgroundImage: {
        'purple-to-white': 'linear-gradient(to right, #5B21B6, #A78BFA, #FFFFFF)', // dense purple to light purple to white
      },
      textColor: {
        'purple-gradient': 'text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-300 to-white',
      },
  		colors: {
  			purple: '#7a5eeb',
  			primary: {
  				DEFAULT: '#f0f2f5',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
        blackround:'#2d2d2e',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    function ({ addUtilities }:any) {
      addUtilities({
        '.purple-gradient': {
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(to right, #a855f7, #8b5cf6, #ec4899)', // Equivalent to bg-gradient-to-r from-purple via-violet-500 to-pink-500
          color: 'transparent',
          textAlign: 'center',
          paddingTop: '1rem', // py-4 (1rem on y-axis)
          paddingBottom: '1rem',
          textShadow: '0 0 rgba(0, 0, 0, 0.1)', // Custom text-shadow you used
          backgroundRepeat: 'no-repeat',
        },
      })
    },
    require("tailwindcss-animate")
  ],
} satisfies Config;
