/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fondos oscuros: negro / antracita
        ink: {
          DEFAULT: '#0B0B0F',
          900: '#0B0B0F',
          800: '#111318',
          700: '#181B22',
          600: '#22262F',
        },
        // Verde lima flúor de marca: CTAs, estados activos y acentos
        lime: {
          DEFAULT: '#D4FF00',
          400: '#E1FF4D',
          500: '#D4FF00',
          600: '#B4DB00',
        },
        // Violeta: color secundario de marca
        brandviolet: {
          DEFAULT: '#8B5CF6',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        // Blanco cálido / gris muy claro para secciones alternadas
        paper: {
          DEFAULT: '#F6F7F4',
          200: '#ECEEE8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(212, 255, 0, 0.45)',
        'glow-violet': '0 0 60px -12px rgba(139, 92, 246, 0.5)',
        card: '0 12px 40px -12px rgba(0, 0, 0, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
