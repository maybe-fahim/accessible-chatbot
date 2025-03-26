describe('Keyboard Navigation', () => {
    beforeEach(() => {
        cy.visit('https://accessible-chatbot.vercel.app');
    });
  
    it('should focus and blur the input box using Tab and Esc', () => {
      cy.get('textarea').focus().should('have.focus');
      cy.contains('Press Esc to exit').should('exist');
  
      cy.realPress('Escape');
      cy.contains('Press Esc to exit').should('not.exist');
    });
  });
  