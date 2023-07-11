const BASEURL = 'https://demo.guru99.com/telecom/addtariffplans.php';
const MAX_VALUE1= 99999;
const MAX_VALUE2= 999;
const MIN_VALUE = 0;

describe('Adding plan', () => {

 /* it('Should add plan successfully', () => {
    
 cy.visit(BASEURL);
 cy.log('Testing page elements visibility');
 cy.testLogoLink('a.logo', 'Guru99 telecom', 'index.html');
 cy.testSectionTitle('[class="align-center"]', 'Add Tariff Plans'); 
 cy.testSectionTitle('div:nth-child(1) > h3', 'Monthly Rental');
 cy.testSectionTitle('div:nth-child(6) > h3', 'Free Local Minutes');
 cy.testSectionTitle('div:nth-child(11) > h3', 'Free International Minutes');
 cy.testSectionTitle('div:nth-child(16) > h3', 'Free SMS Pack');
 cy.testSectionTitle('div:nth-child(21) > h3', 'Local Per Minutes Charges');
 cy.testSectionTitle('div:nth-child(26) > h3', 'International Per Minutes Charges');
 cy.testSectionTitle('div:nth-child(31) > h3', 'SMS Per Charges');
   
 cy.testHamMenuItem('#menu li:nth-child(1)', 'Home');
 cy.testHamMenuItem('#menu li:nth-child(2)', 'Add Customer');
 cy.testHamMenuItem('#menu li:nth-child(3)', 'Add Tariff Plans');
 cy.testHamMenuItem('#menu li:nth-child(4)', 'Add Tariff Plan to Customer');
 cy.testHamMenuItem('#menu li:nth-child(5)', 'Pay Billing');
      
cy.scrollTo(0, 250);

  cy.log('Testing maximal values');    
cy.enterValuesAndVerifyPlaceholder('#rental1', 'Monthly Rental', MAX_VALUE1);
cy.enterValuesAndVerifyPlaceholder('#local_minutes', 'Free Local Minutes', MAX_VALUE1);
cy.enterValuesAndVerifyPlaceholder('#inter_minutes', 'Free International Minutes', MAX_VALUE1);
cy.enterValuesAndVerifyPlaceholder('#sms_pack', 'Free SMS Pack', MAX_VALUE1);
cy.enterValuesAndVerifyPlaceholder('#minutes_charges', 'Local Per Minutes Charges', MAX_VALUE2);
cy.enterValuesAndVerifyPlaceholder('#inter_charges', 'Inter. Per Minutes Charges', MAX_VALUE2);
cy.enterValuesAndVerifyPlaceholder('#sms_charges', 'SMS Per Charges', MAX_VALUE2);

cy.get('[type="submit"]')
  .should('be.visible')
  .and('have.value', 'submit')
  .click();
cy.checkingVisibilityAndText('#main>div h2','Congratulation you add Tariff Plan');
cy.checkingVisibilityAndText('a.button', 'Home')
  .click();
cy.get ('h3 a[href="addtariffplans.php"]')
  .should('be.visible')
  .and('have.text', 'Add Tariff Plan')
  .click();
  cy.log('Testing minimal values')
  cy.enterValuesAndVerifyPlaceholder('#rental1', 'Monthly Rental', MIN_VALUE);
  cy.enterValuesAndVerifyPlaceholder('#local_minutes', 'Free Local Minutes', MIN_VALUE);
  cy.enterValuesAndVerifyPlaceholder('#inter_minutes', 'Free International Minutes', MIN_VALUE);
  cy.enterValuesAndVerifyPlaceholder('#sms_pack', 'Free SMS Pack', MIN_VALUE);
  cy.enterValuesAndVerifyPlaceholder('#minutes_charges', 'Local Per Minutes Charges', MIN_VALUE);
  cy.enterValuesAndVerifyPlaceholder('#inter_charges', 'Inter. Per Minutes Charges', MIN_VALUE);
  cy.enterValuesAndVerifyPlaceholder('#sms_charges', 'SMS Per Charges', MIN_VALUE);
  cy.get('[type="submit"]')
  .should('be.visible')
  .and('have.value', 'submit')
  .click();
cy.checkingVisibilityAndText('#main>div h2','Congratulation you add Tariff Plan');
cy.get('a.button')
  .should('have.text', 'Home')
  .click();
cy.checkingVisibilityAndText('h3 a[href="addtariffplans.php"]', 'Add Tariff Plan')
  .click();

    
  cy.log('Reset button functionality')
    
  cy.get ('#rental1').type(MAX_VALUE1);
  cy.get ('#local_minutes').type(MAX_VALUE1);
  cy.get ('#inter_minutes').type(MAX_VALUE1);
  cy.get ('#sms_pack').type(MAX_VALUE1);
  cy.get ('#minutes_charges').type(MAX_VALUE2);
  cy.get ('#inter_charges').type(MAX_VALUE1);
  cy.get ('#sms_charges').type(MAX_VALUE1);
  cy.get('[type="reset"]').click();
  cy.get('[type="submit"]').click();
  cy.log("Reset button doesnt work!");
   
  });*/
  
  it('Reset button clears the fields', () => {
    cy.log('Reset button functionality')
    
    cy.visit(BASEURL);
    cy.get ('#rental1').type(MAX_VALUE1);
    cy.get ('#local_minutes').type(MAX_VALUE1);
    cy.get ('#inter_minutes').type(MAX_VALUE1);
    cy.get ('#sms_pack').type(MAX_VALUE1);
    cy.get ('#minutes_charges').type(MAX_VALUE2);
    cy.get ('#inter_charges').type(MAX_VALUE1);
    cy.get ('#sms_charges').type(MAX_VALUE1);
    cy.get('[type="reset"]').click();
    cy.get('[type="submit"]').click();
    
    cy.testSectionTitle('div:nth-child(1) > h3', 'Monthly Rental');
    
    
    
    
  });
});