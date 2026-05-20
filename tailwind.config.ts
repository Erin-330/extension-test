import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f0f2f5',
        surface: '#ffffff',
        'surface-alt': '#f0f2f5',
        scoreColor: '#4f80ff',
        primary: '#2d39b4',
        'btn-default': '#969cda',
        'btn-hover': '#afb5ea',
        'btn-disabled': '#b2bac3',
        'border-default': '#ced6e6',
        dsText: {
          0: '#000000',
          50: '#757b90',
        },
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      dropShadow: {
        card: '0px 2px 2px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config
