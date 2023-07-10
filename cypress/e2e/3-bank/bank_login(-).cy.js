const BASE_URL = 'https://demo.guru99.com/Agile_Project/Agi_V1/';
const USER_ID = 1303;
const PASSWORD = 'Guru99';

describe('Login negative test', () => {
  it('Shouldn`t login with wrong values', () => {
    
    cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/');
      cy.get('[class="barone"]')
      .should('be.visible')
      .should('have.text', 'Guru99 BankAccess', { timeout: 1000 });
      cy.get('form[name="frmLogin"] td:nth-child(1)')
      .should('be.visible')
      .should('contain', 'UserID');
      cy.get('form[name="frmLogin"] td:nth-child(1)')
      .should('be.visible')
      .should('contain', 'Password');
      cy.get('form[name="frmLogin"] input[name="uid"]')
      .should('be.visible');
      cy.get('form[name="frmLogin"] input[name="password"]')
      .should('be.visible');   

    cy.get('input[name="uid"]').type('1303');    
    cy.get('input[name="password"]').type('guru98');
    cy.get('input[name="btnLogin"]').click();
    cy.wait(1000);
    cy.on('window:alert', (text) => {
      expect(text).to.eq('User or Password is not valid');
  });
    cy.on('window:confirm', () => true);
    
    cy.get('input[name="uid"]').type('1302');    
    cy.get('input[name="password"]').type('Guru99');
    cy.get('input[name="btnLogin"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('User or Password is not valid');
  });
    cy.on('window:confirm', () => true);
        
  });
  it('Reset button functionality', () => {
    
    cy.visit(BASE_URL);
    cy.get('input[name="uid"]').type(USER_ID);    
    cy.get('input[name="password"]').type(PASSWORD);
    cy.get('input[type=reset]').click();
    cy.get('input[name="btnLogin"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('User or Password is not valid');
    });
    cy.on('window:confirm', () => true);
    cy.log("Reset button doesnt working!")
    cy.visit(BASE_URL);
  });

});