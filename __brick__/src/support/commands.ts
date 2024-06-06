import { createDataTestSelector, login } from './command.utils';

// to define further commands visit the index.d.ts file

Cypress.Commands.add('getByDataTest', (selector, options) =>
  cy.get(createDataTestSelector(selector), options),
);

Cypress.Commands.add('useCustomer', () => login('customer@email.com', 'customer'));
Cypress.Commands.add('useAdmin', () => login('admin@email.com', 'admin'));
