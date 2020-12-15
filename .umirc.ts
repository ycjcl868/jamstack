import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['./corejs-plugin'],
  ssr: {
    staticMarkup: true,
  },
  hash: true,
  exportStatic: {
    dynamicRoot: true,
  },
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
