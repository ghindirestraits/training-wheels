const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://training-wheels-qaninja.herokuapp.com",
  },
});
