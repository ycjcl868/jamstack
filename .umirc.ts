import { defineConfig } from 'umi';

const prefix =
  process.env.GH_PAGES && process.env.NODE_ENV === 'production'
    ? {
        base: '/jamstack-umi/',
        publicPath: '/jamstack-umi/',
      }
    : {};

export default defineConfig({
  plugins: ['./corejs-plugin'],
  ssr: {
    staticMarkup: true,
  },
  ...prefix,
  hash: true,
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
  extraPostCSSPlugins: [require('tailwindcss')],
  ignoreMomentLocale: true,
  routes: [
    {
      path: '/',
      component: '@/layouts',
      routes: [{ path: '/', component: '@/pages/index' }],
    },
  ],
});
