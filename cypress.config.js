const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 950,
  viewportHeight: 550,
  env: {
    baseUrl: "https://testpages.herokuapp.com/styled/tag/dynamic-table.html",
  },


  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Test Execution Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    code: true,
  },

  e2e: {
    defaultCommandTimeout: 30000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      screenshotOnRunFailure = true;
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/*.js",
  },
  video: false,
});