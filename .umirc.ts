import { defineConfig } from 'umi';

const prefix =
  process.env.GH_PAGES && process.env.NODE_ENV === 'production'
    ? {
        base: '/jamstack-umi/',
        publicPath: '/jamstack-umi/',
      }
    : {};

export default defineConfig({
  ssr: {
    staticMarkup: true,
  },
  ...prefix,
  hash: true,
  model: false,
  initialState: false,
  exportStatic: {},
  antd: false,
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
