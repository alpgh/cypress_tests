const { defineConfig } = require("cypress");
module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    
      pageLoadTimeout: 60000,
      chromeWebSecurity: false,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
