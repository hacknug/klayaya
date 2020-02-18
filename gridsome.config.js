module.exports = {
  siteName: 'KLaYaya',
  siteUrl: 'https://klayaya.netlify.com',
  siteDescription: 'Barcelona-based Netlabel, now archived.',
  titleTemplate: `%s - KLaYaya`,

  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
      .options({ /* ... */ })
  },

  templates: {
    WordPressPost: '/:year/:month/:day/:slug',
    WordPressPostTag: '/tag/:slug',
    WordPressArtistas: '/artistas/:slug',
    WordPressCategory: '/category/:slug',
  },

  plugins: [
    'gridsome-plugin-tailwindcss',

    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://dev.nestorvera.com/klayaya',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
      },
    },
  ],
}
