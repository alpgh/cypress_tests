const custData = require('../../fixtures/validCustomer.json');
const exampleData = require('../../fixtures/example.json');

describe('Fields validation and inability to add a customer with wrong values', () => {
  beforeEach(() => {
    cy.visit(custData.BASEURL);
  });

  it('First name error messages checking', () => {
    cy.fillFormWithValidData();
    cy.get('#fname').clear()
    cy.checkErrorMessageAndURL('label#message',exampleData.errorMessage.empty);
    cy.get('#fname')
      .type(custData.errorData[0]);
    cy.checkErrorMessageAndURL('label#message', exampleData.errorMessage.space);
    cy.get('#fname').clear()
      .type(custData.errorData[1]);
    cy.checkErrorMessageAndURL('label#message', exampleData.errorMessage.nums);
    cy.get('#fname').clear()
      .type(custData.errorData[2]);
    cy.checkErrorMessageAndURL('label#message', exampleData.errorMessage.specChars);
    cy.get('#fname').clear()
      .type(custData.errorData[3]);
    cy.checkErrorMessageAndURL('label#message', exampleData.errorMessage.cyrillic);
      
  });

it('Last name error messages checking', () => {
  cy.fillFormWithValidData();  
  cy.get('#lname').clear();
  cy.checkErrorMessageAndURL('label#message50', exampleData.errorMessage.empty);
  cy.get('#lname').clear()
    .type(custData.errorData[0]);
  cy.checkErrorMessageAndURL('label#message50', exampleData.errorMessage.space);
  cy.get('#lname').clear()
    .type(custData.errorData[1]);
  cy.checkErrorMessageAndURL('label#message50', exampleData.errorMessage.nums);
  cy.get('#lname').clear()
    .type(custData.errorData[2]);
  cy.checkErrorMessageAndURL('label#message50', exampleData.errorMessage.specChars);
  cy.get('#lname').clear()
    .type(custData.errorData[3]);
  cy.checkErrorMessageAndURL('label#message50', exampleData.errorMessage.cyrillic);
 });


 it('Email error messages checking', () => {
  cy.fillFormWithValidData();  
  cy.get('#email').clear();
  cy.checkErrorMessageAndURL('label#message9', exampleData.errorMessage.empty);
  cy.get('#email')
    .type(custData.errorData[4]);
  cy.checkErrorMessageAndURL('label#message9', exampleData.errorMessage.email);
  cy.get('#email').clear()
    .type(custData.errorData[5]);
  cy.checkErrorMessageAndURL('label#message9', exampleData.errorMessage.email);
  cy.get('#email').clear()
    .type(custData.errorData[7]);
  cy.checkErrorMessageAndURL('label#message9', exampleData.errorMessage.email);  
  cy.get('#email').clear()
    .type(custData.errorData[8]);
  cy.checkErrorMessageAndURL('label#message9', exampleData.errorMessage.email);  
});


it('Address error messages checking', () => {
  cy.fillFormWithValidData();  
  cy.get('textarea[name="addr"]').clear();
  cy.checkErrorMessageAndURL('label#message3', exampleData.errorMessage.empty);
  cy.get('textarea[name="addr"]')
    .type(custData.errorData[0]);
  cy.checkErrorMessageAndURL('label#message3', exampleData.errorMessage.space);
  cy.get('textarea[name="addr"]').clear()
    .type(custData.errorData[1]);
  cy.get('label#message3').should('be.hidden');
  cy.get('textarea[name="addr"]').clear()
    .type(custData.errorData[2]);
  cy.get('label#message3').should('be.hidden');
  cy.get('textarea[name="addr"]').clear()
  .type(custData.errorData[6]);
  cy.get('label#message3').should('be.hidden');
});

  
it('Mobile number error messages checking', () => {
  cy.fillFormWithValidData();
  cy.get('#telephoneno').clear();
  cy.checkErrorMessageAndURL('label#message7', exampleData.errorMessage.empty);
  cy.get('#telephoneno')
    .type(custData.errorData[0]);
  cy.checkErrorMessageAndURL('label#message7', exampleData.errorMessage.space);
  cy.get('#telephoneno').clear()
    .type(custData.errorData[2]);
  cy.checkErrorMessageAndURL('label#message7', exampleData.errorMessage.specChars);
  cy.get('#telephoneno').clear()
    .type(custData.errorData[6]);
  cy.checkErrorMessageAndURL('label#message7', exampleData.errorMessage.chars);

  });

});