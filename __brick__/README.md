# {{applicationName.paramCase()}}

A brick [Mason](https://pub.dev/packages/mason) 🧱, which allows you to create a Cypress application

## Dependencies installed

| Dependency                             | Description                                                               | Version |
|----------------------------------------|---------------------------------------------------------------------------|---------|
| cypress-cucumber-preprocessor          | Cypress Cucumber Preprocessor is a plugin for the Cypress testing framework that allows you to write end-to-end tests using the Cucumber testing framework‘s Gherkin syntax | 20.0.5 |
| @bahmutov/cypress-esbuild-preprocessor | Bundle Cypress specs using esbuild                                        | 2.2.1   |
| @devmy/cypress-dotenv                  | Load .env and .env.vault at startup                                       | 1.0.0   |
| @devmy/cypress-runner                  | aunch specified frontend and backend servers before running Cypress tests | 1.2.0   |


## Pre-configured utilities

| Utility                       | Description                                                    |
|-------------------------------|----------------------------------------------------------------|
| getByDataTest                 | Get elements by "data-test" attribute                          |
| useCustomer                   | Login as customer user                                         |
| useAdmin                      | Login as admin user                                            |

## Pre-configured environments

| Utility                       | Description                                                    |
|-------------------------------|----------------------------------------------------------------|
| {{applicationName.constantCase()}}_PROJECT_ID | the project id for cypress cloud |
