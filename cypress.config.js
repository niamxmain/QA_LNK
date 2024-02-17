const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter : 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://forms.office.com/r/u5LQxYEFKn',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
