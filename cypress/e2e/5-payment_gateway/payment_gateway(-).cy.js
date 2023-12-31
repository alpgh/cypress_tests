const cardData = require('../../fixtures/card.json');

describe('Purchase Toy Test', () => { 
  
  beforeEach(() => {
    cy.visit(cardData.BASEURL);
  }); 
  
  it("Empty card number value", () => {
    cy.log('Empty Card Number');
    cy.fillPaymentFields();
    cy.get('#card_nmuber').clear();
    cy.checkingVisibilityAndText('#message1', 'Field must not be blank');
    cy.get('input[type="submit"]')
      .should("be.visible")
      .click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Check card number is 16 digits!");
    });
    cy.url().should('eq', cardData.BASEURL);
  });

  it("Short card number value", () => {
    cy.log('Entering short CardNumber');
    cy.fillPaymentFields();
    cy.get('#card_nmuber').clear();
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber','Enter Your Card Number', cardData.CardNumber.short);
    cy.get('input[type="submit"]')
      .should("be.visible")
      .click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Check card number is 16 digits!");
    });
    cy.url().should('eq', cardData.BASEURL);
  });

  it("long card number value", () => {
    cy.log('Entering long CardNumber');
    cy.fillPaymentFields();
    cy.get('#card_nmuber').clear();
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber','Enter Your Card Number', cardData.CardNumber.long);
    cy.get('input[type="submit"]')
      .should("be.visible")
      .click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Check card number is 16 digits!");
    });
    cy.url().then((url) => {
      if (url !== cardData.BASEURL) {
        cy.go('back');
        console.log('the field accepted only 16 digits'); ///fix
      } 
    });
    cy.paymentClearFields();
  });

  it("Card number contains characters", () => {
    cy.log('Card number contains chars');
    cy.fillPaymentFields();
    cy.get('#card_nmuber').clear();
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber','Enter Your Card Number', cardData.CardNumber.containsChar);
    cy.checkingVisibilityAndText('#message1', 'Characters are not allowed');
    cy.get('input[type="submit"]')
     .click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Check card number is 16 digits!");
    });
    cy.url().should('eq', cardData.BASEURL);
  });
    
    it("Card number contains speccharacters", () => {
    cy.log('card number contains specchars');
    cy.fillPaymentFields();
    cy.get('#card_nmuber').clear();
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber','Enter Your Card Number', cardData.CardNumber.containsSpechar);
    cy.checkingVisibilityAndText('#message1', 'Special characters are not allowed');
    cy.get('input[type="submit"]')
      .click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal("Check card number is 16 digits!");
    });
    cy.url().should('eq', cardData.BASEURL);   
  }); 

  it("Wrong expiration date values", () => {
    
    cy.log('shouldnt pass payment without selected month and year')
    cy.fillPaymentFields();
    
    cy.get('#month').select('');
    cy.get('#year').select('');
    cy.get('input[type="submit"]').click();
    cy.url().should('eq', cardData.BASEURL);

    cy.get('#month').select('6');
    cy.get('#year').select('');
    cy.get('input[type="submit"]').click();
    cy.url().should('eq', cardData.BASEURL);

    cy.get('#month').select('');
    cy.get('#year').select('2026');
    cy.get('input[type="submit"]').click();
    cy.url().should('eq', cardData.BASEURL); 
  });

  it("Empty CVV value", () => {
    
    cy.log('Submitting with empty CVV');
    cy.fillPaymentFields();
    cy.get('#cvv_code').clear();
    cy.checkingVisibilityAndText('#message2','Field must not be blank')
    cy.get('input[type="submit"]')
      .click();
    cy.url().should('eq', cardData.BASEURL);
  });

  it("Short CVV value", () => {  
    cy.log('Submitting with short CVV');  
    cy.fillPaymentFields();
    cy.get('#cvv_code').clear();
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', "CVV Code", cardData.CVV.short);
    cy.get('#cvv_code')
      .should('have.value', cardData.CVV.short);
    cy.get('input[type="submit"]')
      .click();
    cy.url().should('eq', cardData.BASEURL);
  });
  
  it("Long CVV value", () => {
    cy.log('Submitting with long CVV');
    cy.fillPaymentFields();
    cy.get('#cvv_code').clear();
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', "CVV Code", cardData.CVV.long);
    cy.get('#cvv_code')
      .should('have.value', cardData.CVV.long);
    cy.get('input[type="submit"]')
      .click();
    cy.url().should('eq', cardData.BASEURL);
  });

  it("CVV value contains chars", () => {
    cy.log('Submitting with CVV containing chars');
    cy.fillPaymentFields();
    cy.get('#cvv_code').clear();
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', "CVV Code", cardData.CVV.containsChar);
    cy.checkingVisibilityAndText('#message2','Characters are not allowed');
    cy.get('#cvv_code')
      .should('have.value', cardData.CVV.containsChar);
    cy.get('input[type="submit"]')
      .click();
    cy.url().should('eq', cardData.BASEURL);
  });

  it("CVV value contains specchars", () => {
    cy.log('Submitting with CVV containing specchars');
    cy.fillPaymentFields();
    cy.get('#cvv_code').clear();
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', "CVV Code", cardData.CVV.containsSpecchar);
    cy.checkingVisibilityAndText('#message2','Special characters are not allowed');
    cy.get('#cvv_code')
      .should('have.value', cardData.CVV.containsSpecchar);
    cy.get('input[type="submit"]')
      .click();
    cy.url().should('eq', cardData.BASEURL);
  });
});  


