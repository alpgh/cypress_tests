const cardData = require('../../fixtures/card.json');

describe('testing each payment system cards', () => {
 
  it("Checking page elements", () => {
    cy.visit(cardData.BASEURL);
    cy.checkingVisibilityAndText('a.logo','Guru99 Payment Gateway'); // contains href
    cy.checkingVisibilityAndText('#nav a:nth-child(1)', 'Cart');
    cy.checkingVisibilityAndText('#nav a:nth-child(2)','Generate Card Number');
    cy.checkingVisibilityAndText('#nav a:nth-child(3)','Check Credit Card Limit');
    cy.checkingVisibilityAndText('#three header > h2','Payment Process');
    cy.checkingVisibilityAndText('#three :nth-child(1)>h4','We accept');
    cy.checkingVisibilityAndText('#three :nth-child(3) h4','Card Number');
    cy.checkingVisibilityAndText('#three :nth-child(5)>h4','Expiration Month');
    cy.checkingVisibilityAndText('#three :nth-child(7) h4','Expiration Year');
    cy.checkingVisibilityAndText('#three :nth-child(9) h4','CVV Code');
  });

it ('Payment with valid Visa card', () => {
    cy.visit(cardData.BASEURL);
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber', 'Enter Your Card Number', cardData.validVisaCard.number);
    cy.get('#month').select(cardData.validVisaCard.month);
    cy.get('#year').select(cardData.validVisaCard.year);
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', 'CVV Code', cardData.validVisaCard.cvv);
    cy.get('input[type="submit"]')
      .should("be.visible")
      .click();
    cy.url().should('contain', cardData.ORDERURL);
    cy.checkingVisibilityAndText('#three  h2', 'Payment successfull!');
    cy.checkingVisibilityAndText(':nth-child(1)>h3', "Order ID");
    cy.checkingVisibilityAndText('a.button.special[href="purchasetoy.php"]', 'Home')
    .click();
    cy.url().should('eq', cardData.SUCCESSURL);
 });

 it ('Payment with valid MC card', () => {
    cy.visit(cardData.BASEURL);
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber', 'Enter Your Card Number', cardData.validMasterCard.number);
    cy.get('#month').select(cardData.validMasterCard.month);
    cy.get('#year').select(cardData.validMasterCard.year);
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', 'CVV Code', cardData.validMasterCard.cvv);
    cy.get('input[type="submit"]')
      .should("be.visible")
      .click();
    cy.url().should('contain', cardData.ORDERURL);
    cy.checkingVisibilityAndText('#three  h2', 'Payment successfull!');
    cy.checkingVisibilityAndText(':nth-child(1)>h3', "Order ID");
    cy.checkingVisibilityAndText('a.button.special[href="purchasetoy.php"]', 'Home')
    .click();
    cy.url().should('eq', cardData.SUCCESSURL);    

 });

 it ('Payment with valid AE card', () => {
    cy.visit(cardData.BASEURL);
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber', 'Enter Your Card Number', cardData.validAECard.number);
    cy.get('#month').select(cardData.validAECard.month);
    cy.get('#year').select(cardData.validAECard.year);
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', 'CVV Code', cardData.validAECard.cvv);
    cy.get('input[type="submit"]')
      .should("be.visible")
      .click();
    cy.url().should('eq', cardData.ORDERURL);
    cy.checkingVisibilityAndText('#three  h2', 'Payment successfull!');
    cy.checkingVisibilityAndText(':nth-child(1)>h3', "Order ID");
    cy.checkingVisibilityAndText('a.button.special[href="purchasetoy.php"]', 'Home')
    .click();
    cy.url().should('eq', cardData.SUCCESSURL); 
    
 });

 it ('Payment with valid Discover card', () => {
    cy.visit(cardData.BASEURL);
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber', 'Enter Your Card Number', cardData.validDiscoverCard.number);
    cy.get('#month').select(cardData.validDiscoverCard.month);
    cy.get('#year').select(cardData.validDiscoverCard.year);
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', 'CVV Code', cardData.validDiscoverCard.cvv);
    cy.get('input[type="submit"]')
      .should("be.visible")
      .click();
    cy.url().should('contain', cardData.ORDERURL);
     cy.checkingVisibilityAndText('#three  h2', 'Payment successfull!');
     cy.checkingVisibilityAndText(':nth-child(1)>h3', "Order ID");
     cy.checkingVisibilityAndText('a.button.special[href="purchasetoy.php"]', 'Home')
     .click();
     cy.url().should('eq', cardData.SUCCESSURL);
    
 });

});