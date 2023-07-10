const USER_ID = 1303;
const PASSWORD = 'Guru99';
const BASE_URL = 'https://demo.guru99.com/Agile_Project/Agi_V1/';

describe('Login and logout Test', () => {
  it('Should login ang logout successfully', () => {
    
    cy.visit(BASE_URL);
    
     cy.log('Checking Navigation bar elements');
    cy.getNavbarElement('Insurance Project','https://demo.guru99.com/insurance/v1/index.php');
    cy.getNavbarElement('Agile Project','https://demo.guru99.com/Agile_Project/Agi_V1/');
    cy.getNavbarElement('Bank Project','https://demo.guru99.com/V1/index.php');
    cy.getNavbarElement('Security Project','https://demo.guru99.com/Security/SEC_V1/index.php');
    cy.getNavbarElement('Telecom Project','https://demo.guru99.com/telecom/index.html');
    cy.getNavbarElement('Payment Gateway Project','https://demo.guru99.com/payment-gateway/index.php');
    cy.getNavbarElement('New Tours','https://demo.guru99.com/test/newtours/');
      cy.log('CheckingMainElements');
    cy.get('[class="barone"]').should('be.visible').and('have.text', 'Guru99 BankAccess');
    cy.get('form[name="frmLogin"] td:nth-child(1)').should('be.visible').and('contain', 'UserID');
    cy.get('form[name="frmLogin"] td:nth-child(1)').should('be.visible').and('contain', 'Password');
    cy.get('form[name="frmLogin"] input[name="uid"]').should('be.visible');
    cy.get('form[name="frmLogin"] input[name="password"]').should('be.visible');   
    cy.get('body > div:nth-child(31) > ol').should('be.visible').and('contain', 'UserID');
    cy.get('body > div:nth-child(31) > ol').should('be.visible').and('contain', 'Password');
      cy.log('Entering correct login data')
    cy.get('input[name="uid"]').type(USER_ID);    
    cy.get('input[name="password"]').type(PASSWORD);
      cy.log('Login and logout checking')
    cy.get('input[name="btnLogin"]').click().wait(2000);
    cy.get('a[href="Logout.php"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('You Have Succesfully Logged Out!!');
  });
    cy.on('window:confirm', () => true);
      cy.log('Reset button checking')
  });
  
});