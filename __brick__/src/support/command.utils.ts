export const createDataTestSelector = (id: string) => `[data-test="${id}"]`;

/**
 * basic login function. modify it according to the real login page
 */
export const login = (email, password) => {
  return cy.session([email, password], () => {
    cy.visit('/login');
    cy.getByDataTest('email').type(email);
    cy.getByDataTest('password').type(password);
    cy.getByDataTest('login').click();
    cy.url().should('contain', '/');
  });
};
