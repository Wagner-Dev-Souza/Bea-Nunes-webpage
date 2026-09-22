const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Alvo: servidor estático local (npm run serve).
    baseUrl: 'http://localhost:8082',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false,
    video: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 900,
    retries: {
      runMode: 1,
      openMode: 0
    }
  }
});
