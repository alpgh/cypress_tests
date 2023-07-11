const BASEURL = 'https://demo.guru99.com/payment-gateway/process_purchasetoy.php';

describe('Each payment system testing', () => {
 
  it("Checking page elements", () => {
    cy.visit(BASEURL);
    cy.checkingVisibilityAndText('a.logo','Guru99 Payment Gateway');
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
    cy.visit(BASEURL);
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber', 'Enter Your Card Number', '4284556265308975');
    cy.get('#month').select(1);
    cy.get('#year').select("2024");
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', 'CVV Code', '123');
    cy.get('input[type="submit"][name="submit"]')
      .should("be.visible")
      .click();
    cy.checkingVisibilityAndText('#three  h2', 'Payment successfull!');
 });

 it ('Payment with valid MC card', () => {
    cy.visit(BASEURL);
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber', 'Enter Your Card Number', '5361589678286187');
    cy.get('#month').select(1);
    cy.get('#year').select("2027");
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', 'CVV Code', '321');
    cy.get('input[type="submit"][name="submit"]')
      .should("be.visible")
      .click();
    cy.checkingVisibilityAndText('#three  h2', 'Payment successfull!');

 });

 it ('Payment with valid AE card', () => {
    cy.visit(BASEURL);
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber', 'Enter Your Card Number', '341245912634901');
    cy.get('#month').select(12);
    cy.get('#year').select("2023");
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', 'CVV Code', '9633');
    cy.get('input[type="submit"][name="submit"]')
      .should("be.visible")
      .click();
    
    cy.checkingVisibilityAndText('#three  h2', 'Payment successfull!');
    cy.on('window:alert', (text) => {
        expect(text).to.eq('Check card number is 16 digits!');
    });
      cy.on('window:confirm', () => true);
     
 });

 it ('Payment with valid Discover card', () => {
    cy.visit(BASEURL);
    cy.enterValuesAndVerifyPlaceholder('#card_nmuber', 'Enter Your Card Number', '6011404586541973');
    cy.get('#month').select(6);
    cy.get('#year').select("2028");
    cy.enterValuesAndVerifyPlaceholder('#cvv_code', 'CVV Code', '021');
    cy.get('input[type="submit"][name="submit"]')
      .should("be.visible")
      .click();
    cy.checkingVisibilityAndText('#three  h2', 'Payment successfull!');
    
 });

});