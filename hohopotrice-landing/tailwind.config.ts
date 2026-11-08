import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 호호솥밥 브랜드 초록 (흰 글자 대비 4.5:1 이상은 brand-600 이하에서 확보)
        brand: {
          50: '#F6F9EC',
          100: '#EAF1D2',
          200: '#D3E3A4',
          400: '#A4C24A',
          500: '#84A82A',
          600: '#5A7A14',
          700: '#3F5A12',
        },
        charcoal: '#2B2A27',
        cream: '#F3F1E7',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '"Noto Sans KR"',
          '"Apple SD Gothic Neo"',
          '"Malgun Gothic"',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

export default config;
