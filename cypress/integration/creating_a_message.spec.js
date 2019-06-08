describe('Creating a message', () => {
  it('Displays the message in the list', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testId="messageText"]')
      .type('New message');

    cy.get('[data-testId="sendButton"]')
      .click();

    cy.get('[data-testId="messageText"]')
      .should('have.value', '');

    cy.contains('New message');
  });
})
