module.exports = {
  content: ['./src/**/*.vue'],
  whitelist: ['html', 'body', 'markdown'],
  extractors: [{
    extensions: ['vue'],
    extractor: class TailwindExtractor {
      static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || []
      }
    },
  }],
}
