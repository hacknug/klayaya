module.exports = {
  whitelist: ['html', 'body', 'markdown'],
  content: [
    './src/components/**/*.vue',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ],
  extractors: [{
    extensions: ['vue', 'html'],
    extractor: class TailwindExtractor {
      static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || []
      }
    },
  }],
}
