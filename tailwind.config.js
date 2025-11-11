module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: '1440px',
      lg: '1280px', 
      md: '1024px', 
    },
    extend: {
      fontWeight: {
        normal: '300',
      },
      colors: {
        primary: {
          DEFAULT: '#000000',
          dark: '#373737',
          accent: '#b89d7e',
          light: '#ffffff',
        },
        secondary: {
          DEFAULT: '#b89d7e',
          dark: '#373737',
          light: '#ffffff',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b89d7e',
          accent: '#b89d7e',
          light: '#ffffff',
        },
        background: {
          primary: '#000000',
          secondary: '#373737',
          dark: '#373737',
        },
      },
      maxWidth: {
        desktop: '1440px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        malgun: ['Malgun Gothic', 'sans-serif'],
        liana: ['Liana', 'sans-serif'],
        trebuchet: ['Trebuchet MS', 'sans-serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
