/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712',
      },
    },
    extend: {
      colors: {
        /*
          Neutro de superfície das landing pages. O branco puro sobre uma tela
          de celular às 1h da manhã — que é quando a maior parte deste tráfego
          chega — brilha demais. Estes tons são levemente puxados para o roxo da
          marca (nenhum neutro do sistema é cinza morto).

          Existe porque `theme.colors` acima SUBSTITUI a paleta padrão do
          Tailwind: fora de white/gray/primary/secondary/green/red/yellow não há
          cor nenhuma. `stone-*` e `emerald-*`, usados em alguns componentes
          antigos, não geram classe e caem em transparente.
        */
        canvas: {
          50: '#faf8fb',
          100: '#f4f0f7',
          200: '#e8e1ee',
          300: '#d5cbdd',
        },
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        green: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
        },
        red: {
          50: '#fef2f2',
          700: '#b91c1c',
        },
        yellow: {
          50: '#fefce8',
          400: '#facc15',
          800: '#854d0e',
        },
      },
    },
  },
  plugins: [],
} 