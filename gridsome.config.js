// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
	siteName: 'KLaYaya',
	siteUrl: 'https://dev.nestorvera.com/klayaya',
	siteDescription: 'Barcelona-based Netlabel, now archived.',
  titleTemplate: `%s - KLaYaya`,

  chainWebpack: config => {
    config.module
      .rule('postcss') // css, sass, scss, less, postcss, stylus
      .oneOf('normal') // normal, module
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('tailwindcss')('./tailwind.js'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss'),
          ])
        }

        return options
      })

    config.module
      .rule('vue')
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader')
      .options({ /* ... */ })
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
