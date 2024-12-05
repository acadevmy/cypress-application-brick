import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

Given('An anonymous user', () => {
  cy.visit('/');
});

When('I navigate to application', () => {
  cy.visit('/');
});

Then('I should see the application', () => {
  cy.get('html').should('exist');
});
