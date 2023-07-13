const BASEURL = 'https://demo.guru99.com/telecom/addcustomer.php';

describe('Successful adding new customer', () => {
  beforeEach(() => {
    cy.visit(BASEURL);
  });

  it('Testing page elements visibility', () => {
    cy.log('Testing page elements visibility');
    cy.testLogoLink('a.logo', 'Guru99 telecom', 'index.html');
    cy.testSectionTitle('[class="align-center"]', 'Add Customer');
    cy.testSectionTitle('form > h3', 'Background Check');
    cy.testSectionTitle(':nth-child(3) h3', 'Billing address');

    cy.log('Testing hamburger menu');
    cy.get('#header a:nth-child(1)')
    .should('have.length', 1).click();
    cy.testHamMenuItem('#menu li:nth-child(1)', 'Home');
    cy.testHamMenuItem('#menu li:nth-child(2)', 'Add Customer');
    cy.testHamMenuItem('#menu li:nth-child(3)', 'Add Tariff Plans');
    cy.testHamMenuItem('#menu li:nth-child(4)', 'Add Tariff Plan to Customer');
    cy.testHamMenuItem('#menu li:nth-child(5)', 'Pay Billing');
    cy.get('a.close').click();
  });
 
  it('Adding with Done background check', () => {

    cy.log('Adding active user');
    cy.fixture('validCustomer').then((customer) => {
      cy.get(':nth-child(1)>label').click();
      cy.enterValuesAndVerifyPlaceholder('#fname', 'FirstName', customer.firstName);
      cy.enterValuesAndVerifyPlaceholder('#lname', 'LastName', customer.lastName);
      cy.enterValuesAndVerifyPlaceholder('#email', 'Email', customer.email);
      cy.enterValuesAndVerifyPlaceholder('[name=addr]', 'Enter your address', customer.address);
      cy.enterValuesAndVerifyPlaceholder('#telephoneno', 'Mobile Number', customer.mobileNumber);
      cy.get('input[type=submit]').click();

      cy.checkUserStatusIsActive(true);
    });
  });


  it('Adding with Pending background check', () => {
    
    cy.log('Adding inactive user');
    cy.fixture('validCustomer').then((customer) => {
      cy.get(':nth-child(2)>label').click();
      cy.enterValuesAndVerifyPlaceholder('#fname', 'FirstName', customer.firstName);
      cy.enterValuesAndVerifyPlaceholder('#lname', 'LastName', customer.lastName);
      cy.enterValuesAndVerifyPlaceholder('#email', 'Email', customer.email);
      cy.enterValuesAndVerifyPlaceholder('[name=addr]', 'Enter your address', customer.address);
      cy.enterValuesAndVerifyPlaceholder('#telephoneno', 'Mobile Number', customer.mobileNumber);
      cy.get('input[type=submit]').click();

      cy.checkUserStatusIsActive(false);
   });
  });
});
