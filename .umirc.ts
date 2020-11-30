import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {
    staticMarkup: true,
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/jamstack-umi/' : '/',
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
