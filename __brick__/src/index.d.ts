declare namespace Cypress {
  interface Chainable {
    getByDataTest(
      selector: string,
      options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
    ): Chainable;

    useCustomer(): Chainable;
    useAdmin(): Chainable;
  }
}
