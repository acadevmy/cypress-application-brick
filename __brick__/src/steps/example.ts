import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('An anonymous user', () => {});

When('I navigate to application', () => {
  cy.visit('/');
});

Then('I should see the application', () => {
  cy.get('html').should('exist');
});
