module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.svg',
    './src/**/*.pcss',
    './src/**/*.css',
    './src/**/*.js',
    './src/**/*.vue',
  ],
  whitelist: ['html', 'body', 'markdown'],
  extractors: [{
    extensions: ['html', 'svg', 'pcss', 'css', 'js', 'vue'],
    extractor: class TailwindExtractor {
      static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || []
      }
    },
  }],
}
