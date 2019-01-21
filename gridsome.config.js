// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
	siteName: 'KLaYaya',
	siteUrl: 'https://dev.nestorvera.com/klayaya',
	siteDescription: 'Barcelona-based Netlabel, now archived.',
  titleTemplate: `%s - KLaYaya`,

  chainWebpack: config => {
    config.module
      .rule('css') // or sass, scss, less, postcss, stylus
      .oneOf('normal') // or module
        .use('postcss-loader')
          .tap(options => {
            options.plugins.push(tailwindcss('./tailwind.js'))
            return options
          })
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'http://klayaya.com',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: '/:year/:month/:day/:slug',
          post_tag: '/tag/:slug'
        }
      }
    }
  ]
}
