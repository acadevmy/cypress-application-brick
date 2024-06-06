import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { defineConfigWithDotenv } from '@devmy/cypress-dotenv';

const setupNodeEvents = async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> => {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  return config;
};

export default defineConfigWithDotenv({
  dotenv: {
    prefix: '{{applicationName.paramCase()}}_',
    root: '../../',
  },
  e2e: {
    baseUrl: '{{baseUrl}}',
    video: true,
    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true,
    testIsolation: true,
    specPattern: 'src/e2e/**/*.feature',
    supportFile: 'src/support/e2e.{js,ts}',
    fixturesFolder: 'src/fixtures',
    videosFolder: 'videos',
    screenshotsFolder: 'screenshots',
    downloadsFolder: 'downloads',
    chromeWebSecurity: false,
    setupNodeEvents,
    projectId: process.env.{{applicationName.paramCase()}}_PROJECT_ID,
  },
});
