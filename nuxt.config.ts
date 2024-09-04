// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/seo'],
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
    plugins: ['plugins/content.ts'],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
      script: [
        { src: 'https://polyfill.io/v3/polyfill.min.js' },
        { src: 'https://hm.baidu.com/hm.js?72a4a4714306b6799e955036e3b7bcd6' },
      ],
      noscript: [{ children: 'JavaScript is required' }],
    },
  },
  vite: {
    build: {
      target: 'esnext',
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
  },
  //@ts-ignore
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark',
    },
    markdown: {
      toc: { depth: 4, searchDepth: 4 },
    },
    ignores: [
      '\\.draft$', // any file with the extension ".draft"
    ],
  },
  site: {
    url: 'https://blog.jimi1126.cn',
    name: 'blog.jimi1126',
    description:
      '我是 JIMI1126，一名前端开发工程师，我擅长使用 HTML/CSS/JS 和 Vue 构建 Web 应用程序和网站。一直想建立一个自己的博客网站，弄了几版也不尽人意，终于使用 Nuxtjs 建立了满意的这一版。我在互联网上开辟了属于自己的小角落，我将在这里分享技术，想法和生活。',
    defaultLocale: 'zh-CN',
  },

  ogImage: {
    enabled: false,
  },
  sitemap: {
    enabled: true,
  },
  robots: {
    enabled: true,
  },
  seoExperiments: {
    enabled: true,
  },
  schemaOrg: {
    enabled: true,
  },
  linkChecker: {
    enabled: true,
  },
});
