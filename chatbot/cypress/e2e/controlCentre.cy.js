describe('Control Centre Toggle', () => {
    beforeEach(() => {
      cy.visit('https://accessible-chatbot.vercel.app');
    });
  
    it('should close and reopen the control centre with the burger icon', () => {
      cy.get('button[aria-label*="Toggle control centre"]').click();
      cy.get('button[aria-label*="Toggle control centre"]').click();
    });
  });
  