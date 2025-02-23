import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  screenshotsFolder: './cypress/screenshots',
  scrollBehavior:'center',
  defaultCommandTimeout: 10000,
  viewportHeight: 1000,
  viewportWidth:1280,
  chromeWebSecurity:false,
  video:false,
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // Spécifiez l'emplacement des fichiers .feature
    baseUrl: "http://localhost:4200", // L'URL de votre application
    reporter: require.resolve("@badeball/cypress-cucumber-preprocessor/pretty-reporter")
  },
});
