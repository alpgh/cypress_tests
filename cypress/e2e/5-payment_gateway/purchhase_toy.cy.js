const cardData = require('../../fixtures/card.json');

describe('Purchase Toy Test', () => {
 
  it("Checking page elements", () => {
    cy.visit(cardData.SUCCESSURL);
    cy.checkingVisibilityAndText('a.logo','Guru99 Payment Gateway')
      .should('have.attr', 'href', 'purchasetoy.php');
    cy.checkingVisibilityAndText('#nav a[href="purchasetoy.php"', 'Cart')
      .should('have.attr', 'href', 'purchasetoy.php');
    cy.checkingVisibilityAndText('#nav a[href="cardnumber.php"','Generate Card Number')
      .should('have.attr', 'href', 'cardnumber.php');
    cy.checkingVisibilityAndText('#nav a[href="check_credit_balance.php"','Check Credit Card Limit')
      .should('have.attr', 'href', 'check_credit_balance.php');

    cy.get('img[src="images/Toy.jpg"]')
      .should('be.visible')
      .and('have.attr', 'src');
    cy.get('[name="quantity"]')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(108, 192, 145)');
    cy.get('[type="submit"]')
      .should('be.visible')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(108, 192, 145)')
      .and('have.css', 'cursor', 'pointer');
  });
  
  it("changing quantity and proceed", () => {
    cy.visit(cardData.SUCCESSURL);  
    for (let i = 2; i <= 9; i++) {
    cy.get('select[name="quantity"]')
      .should("be.visible")
      .select(`${i}`);
    cy.get('h3[style]')
      .invoke('text')
      .then((text) => {
    const price = text.match(/\$\d+/)[0].slice(1);
    cy.get('[type="submit"]')
      .click();
    cy.get('font[color="red"]')
      .should("be.visible")
      .should("contain.text", `$${(i * price).toFixed(2)}`);
    cy.get('input[type="submit"][name="submit"]')
      .should("be.visible")
      .should("contain.value", `$${(i * price).toFixed(2)}`);
    cy.go("back");
      });
    }
});
  


});


    
 