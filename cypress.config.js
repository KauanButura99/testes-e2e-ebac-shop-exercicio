const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: true,
      json: true
    }
  },
  projectId: "tuvikz",
})
