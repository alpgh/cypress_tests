const LOGIN = require('../../fixtures/login.json');

  describe('Login and logout Test', () => {
   
    beforeEach(() => {
      cy.visit(LOGIN.BASEURL);
    });

    it('Checking page elements', () => {
           
    cy.log('Checking Navigation bar elements');

    cy.getNavbarElement('Insurance Project','https://demo.guru99.com/insurance/v1/index.php');
    cy.getNavbarElement('Agile Project','https://demo.guru99.com/Agile_Project/Agi_V1/');
    cy.getNavbarElement('Bank Project','https://demo.guru99.com/V1/index.php');
    cy.getNavbarElement('Security Project','https://demo.guru99.com/Security/SEC_V1/index.php');
    cy.getNavbarElement('Telecom Project','https://demo.guru99.com/telecom/index.html');
    cy.getNavbarElement('Payment Gateway Project','https://demo.guru99.com/payment-gateway/index.php');
    cy.getNavbarElement('New Tours','https://demo.guru99.com/test/newtours/'); 
      
      cy.log('Checking Navigation bar dropdown elements');
    
      cy.fixture('links.json').then((links) => {
      cy.checkDropdownLinks(links);
    });
    
    cy.log('CheckingMainElements');

    cy.checkingVisibilityAndText('[class="barone"]','Guru99 BankAccess');
    cy.get('form[name="frmLogin"] td:nth-child(1)')
    .should('be.visible')
    .and('contain', 'UserID')
    .and('contain', 'Password');
    cy.get('form[name="frmLogin"] input[name="uid"]')
    .should('be.visible');
    cy.get('form[name="frmLogin"] input[name="password"]')
    .should('be.visible');   
    cy.get('UserID : 1303')
    .should('be.visible')
    .and('contain', 'UserID');
    cy.get('Password : Guru99') 
    .should('be.visible')
    .and('contain', 'Password');
  });
  

  it('Should login ang logout successfully', () => {
    cy.log('Entering correct login data')
    
    cy.get('input[name="uid"]').type(LOGIN.USER_ID);    
    cy.get('input[name="password"]').type(LOGIN.PASSWORD);
    
    cy.log('Login and logout checking')
    
    cy.get('input[name="btnLogin"]').click()
    cy.url().should('eq', LOGIN.SUCCESS_URL);
    cy.checkingVisibilityAndText('li.orange > a', 'Customer');
    cy.checkingVisibilityAndText('a[href="MiniStatementInput.php"]', 'Mini Statement');
    cy.checkingVisibilityAndText('a[href="Logout.php"]', 'Log out').click();
        
    cy.on('window:alert', (text) => {
      expect(text).to.eq('You Have Succesfully Logged Out!!');
  });
    cy.on('window:confirm', () => true);
    
  });
  
});