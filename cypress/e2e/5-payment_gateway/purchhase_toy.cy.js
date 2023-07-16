const BASEURL = 'https://demo.guru99.com/payment-gateway/purchasetoy.php';

describe('Purchase Toy Test', () => {
 
  it("Checking page elements", () => {
    cy.visit(BASEURL, { timeout: 6000 });
    cy.checkingVisibilityAndText('a.logo','Guru99 Payment Gateway');
    cy.checkingVisibilityAndText('#nav a:nth-child(1)', 'Cart');
    cy.checkingVisibilityAndText('#nav a:nth-child(2)','Generate Card Number');
    cy.checkingVisibilityAndText('#nav a:nth-child(3)','Check Credit Card Limit');
    cy.get('div:nth-child(1) > p img').should('be.visible');
  
  });
  
  it("changing quantity and proceed", () => {
    cy.visit(BASEURL, { timeout: 60000 }); 
  
    for (let i = 2; i <= 9; i++) {
      cy.get('select[name="quantity"]').should("be.visible").select(`${i}`);
  
      cy.get('[type="submit"]').should("be.visible").click();   //invoke, url 
      cy.get('font[color="red"]')
        .should("be.visible")
        .should("contain.text", `$${(i * 20).toFixed(2)}`);
      cy.get('input[type="submit"][name="submit"]')
        .should("be.visible")
        .should("contain.value", `$${(i * 20).toFixed(2)}`).wait(2000);
  
      cy.go("back");
    }
  });
});


    
 