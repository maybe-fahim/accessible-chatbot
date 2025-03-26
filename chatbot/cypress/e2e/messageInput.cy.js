describe('Message Input & Sending', () => {
    beforeEach(() => {
        cy.visit('https://accessible-chatbot.vercel.app');
    });
  
    it('should allow typing a message and send on Enter', () => {
      cy.get('textarea[placeholder="How can I help you today?"]').type('Hello! What is the weather like today?{enter}');
      cy.contains('Hello! What is the weather like today?').should('exist');
    });
  
    it('should show "Press Esc to exit" when focused', () => {
      cy.get('textarea').click();
      cy.contains('Press Esc to exit').should('exist');
    });
  });
  