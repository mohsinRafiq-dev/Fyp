import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light Theme
        lc: {
          bg: '#F8F9FB',
          'bg-secondary': '#F0F2F7',
          card: '#FFFFFF',
          'card-hover': '#F9FAFB',
          text: '#1E1E2D',
          'text-secondary': '#6B7280',
          'text-tertiary': '#9CA3AF',
          accent: '#6C63FF',
          'accent-hover': '#5A54E3',
          'accent-light': '#8B84F7',
          border: '#E5E7EB',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          'chart-blue': '#4F46E5',
          'muted-purple': '#A78BFA',
          'gradient-start': '#6C63FF',
          'gradient-end': '#8B84F7',
        },
        // Dark Theme
        dark: {
          bg: '#0F172A',
          'bg-secondary': '#1A2747',
          card: '#1E293B',
          'card-hover': '#334155',
          text: '#F9FAFB',
          'text-secondary': '#94A3B8',
          'text-tertiary': '#71717A',
          accent: '#818CF8',
          'accent-hover': '#A5B4FC',
          'accent-light': '#C7D2FE',
          border: '#334155',
          success: '#22C55E',
          warning: '#FBBF24',
          error: '#F87171',
          'chart-blue': '#60A5FA',
          'muted-purple': '#C4B5FD',
          'gradient-start': '#818CF8',
          'gradient-end': '#A5B4FC',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(108, 99, 255, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(108, 99, 255, 0.8)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0',
          },
          '100%': {
            backgroundPosition: '1000px 0',
          },
        },
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(10px)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(108, 99, 255, 0.5)',
        'glow-lg': '0 0 40px rgba(108, 99, 255, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
