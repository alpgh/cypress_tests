const BASEURL = 'https://demo.guru99.com/telecom/addcustomer.php';
const errorData = [" ", "123", "///", "абв", "asdf@asdfre", "asdf.com", "abc"];
const exampleData = require('../../fixtures/example.json');

describe('Fields validation and inability to add a customer with wrong values', () => {
  beforeEach(() => {
    cy.visit(BASEURL);
  });

  it('First name error messages checking', () => {
    cy.fillFormWithValidData();
    cy.get('#fname').clear()
    cy.get('label#message')
      .should('be.visible')
      .and('have.text', 'Customer name ' + exampleData.errorMessage.empty);
    cy.get('#fname')
      .type(errorData[0]);
    cy.get('label#message')
      .should('be.visible')
      .and('have.text', exampleData.errorMessage.space);
    cy.get('#main input[type=submit]').click();
    cy.get('#fname').clear()
      .type(errorData[1]);
    cy.get('label#message')
      .should('have.text', exampleData.errorMessage.nums);
    cy.get('#main input[type=submit]').click();
    cy.get('#fname').clear()
      .type(errorData[2]);
    cy.get('label#message').should('have.text', exampleData.errorMessage.specChars);
    cy.get('#main input[type=submit]').click();
    cy.get('#fname').clear()
      .type(errorData[3]);
    cy.get('label#message').should('have.text', exampleData.errorMessage.cyrillic);
    cy.get('#main input[type=submit]').click();
  });

  it('Last name error messages checking', () => {
    cy.fillFormWithValidData();
    cy.get('#lname').clear();
    cy.get('label#message50')
      .should('be.visible')
      .and('have.text', 'Customer name ' + exampleData.errorMessage.empty);
    cy.get('#lname').type(errorData[0]);
    cy.get('label#message50')
      .should('have.text', exampleData.errorMessage.space);
    cy.get('#main input[type=submit]').click();
    cy.get('#lname').clear()
      .type(errorData[1]);
    cy.get('label#message50')
      .should('have.text', exampleData.errorMessage.nums);
    cy.get('#main input[type=submit]').click();
    cy.get('#lname').clear()
      .type(errorData[2]);
    cy.get('label#message50')
      .should('have.text', exampleData.errorMessage.specChars);
    cy.get('#main input[type=submit]').click();
    cy.get('#lname').clear()
      .type(errorData[3]);
    cy.get('label#message50')
      .should('have.text', exampleData.errorMessage.cyrillic);
    cy.get('#main input[type=submit]').click();
  });

  it('Email error messages checking', () => {
    cy.fillFormWithValidData();
    cy.get('#email').clear();
    cy.get('label#message9')
      .should('be.visible')
      .and('have.text', 'Email-ID ' + exampleData.errorMessage.empty);
    cy.get('#email').type(errorData[4]);
    cy.get('label#message9')
      .should('have.text', exampleData.errorMessage.email);
    cy.get('#main input[type=submit]').click();
    cy.get('#email').clear().type(errorData[5]);
    cy.get('label#message9')
      .should('have.text', exampleData.errorMessage.email);
    cy.get('#main input[type=submit]').click();
    cy.get('#email').clear()
  });

  it('Address error messages checking', () => {
    cy.fillFormWithValidData();
    cy.get('textarea[name="addr"]').clear();
    cy.get('label#message3')
      .should('be.visible')
      .and('have.text', 'Address Field ' + exampleData.errorMessage.empty);
    cy.get('textarea[name="addr"]').type(errorData[0]);
    cy.get('label#message3')
      .should('have.text', exampleData.errorMessage.space);
    cy.get('#main input[type=submit]').click();
    cy.get('textarea[name="addr"]').clear().type(errorData[2]);
    cy.get('label#message3')
      .should('be.hidden', exampleData.errorMessage.specChars);
    cy.get('#main input[type=submit]').click();
    cy.get('textarea[name="addr"]').clear()
    
  });
  
  it('Mobile number error messages checking', () => {
    cy.fillFormWithValidData();
    cy.get('#telephoneno').clear();
    cy.get('label#message7')
      .should('be.visible')
      .and('have.text', 'Mobile no ' + exampleData.errorMessage.empty);
    cy.get('#telephoneno').type(errorData[0]);
    cy.get('label#message7')
      .should('have.text', exampleData.errorMessage.space);
    cy.get('#main input[type=submit]').click();
    cy.get('#telephoneno').clear().type(errorData[2]);
    cy.get('label#message7')
      .should('have.text', exampleData.errorMessage.specChars);
    cy.get('#main input[type=submit]').click();
    cy.get('#telephoneno').clear()
    cy.get('#telephoneno').type(errorData[6]);
    cy.get('label#message7')
      .should('have.text', exampleData.errorMessage.chars);
    cy.get('#main input[type=submit]').click();
    cy.get('#telephoneno').clear()
  });

});