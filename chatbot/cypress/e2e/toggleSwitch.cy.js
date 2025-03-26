describe('Control Centre Switches', () => {
    beforeEach(() => {
      cy.visit('https://accessible-chatbot.vercel.app');
    });
  
    it('should toggle Theme', () => {
      cy.get('button[aria-label="Theme toggle"]').click().click();
    });
  
    it('should toggle Large Text', () => {
      cy.get('button[aria-label="Large Text toggle"]').click().click();
    });
  
    it('should toggle High Contrast', () => {
      cy.get('button[aria-label="High Contrast toggle"]').click().click();
    });
  
    it('should toggle Audio Mode', () => {
      cy.get('button[aria-label="Audio Mode toggle"]').click().click();
    });
  });
  