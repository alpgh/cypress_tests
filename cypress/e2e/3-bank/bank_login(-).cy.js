const LOGIN = require('../../fixtures/login.json');

describe('Login negative test', () => {
  
  beforeEach(() => {
    cy.visit(LOGIN.BASEURL);
  });

  it.skip('Shouldn`t login with empty fields', () => {
    
    cy.get('input[name="btnLogin"]')
    .click({ force: true });
    cy.on('window:alert', (text) => {
    expect(text).to.eq('User or Password is not valid');
});
    cy.on('window:confirm', () => true);

 });

  it.skip('Shouldn`t login with incorrect password', () => {

    cy.log('correct userID, incorrect password');
    cy.get('input[name="uid"]').type(LOGIN.USER_ID);    
    cy.get('input[name="password"]').type(LOGIN.INCORRECT_PASS);
    cy.get('input[name="btnLogin"]').click({ force: true });
      
      cy.on('window:alert', (text) => {
      expect(text).to.eq('User or Password is not valid');
  });
      cy.on('window:confirm', () => true);

  });

    it.skip('Shouldn`t login with incorrect userID', () => {
    cy.get('input[name="uid').clear();
    cy.get('input[name="password"]').clear();
    cy.log('Incorrect userID, correct password')
    cy.get('input[name="uid"]').type(LOGIN.INCORRECT_LOG);    
    cy.get('input[name="password"]').type(LOGIN.PASSWORD);
    cy.get('input[name="btnLogin"]').click({ force: true });
    cy.on('window:alert', (text) => {
      expect(text).to.eq('User or Password is not valid');
  });
    cy.on('window:confirm', () => true);
        
  });
  
  it.skip('Reset button functionality', () => {
    cy.get('input[name="uid').clear();
    cy.get('input[name="password"]').clear();
    cy.get('input[name="uid"]').type(LOGIN.USER_ID);    
    cy.get('input[name="password"]').type(LOGIN.PASSWORD);
    cy.get('input[type=reset]').click();
    cy.get('input[name="btnLogin"]').click({ force: true });
    cy.on('window:alert', (text) => {
      expect(text).to.eq('User or Password is not valid');
    });
    cy.on('window:confirm', () => true);
    cy.log("Reset button works succesfully")
    
  });

});