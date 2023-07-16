const LOGIN = require('../../fixtures/login.json');

  describe('Login and logout Test', () => {
   
    beforeEach(() => {
      cy.visit(LOGIN.BASEURL);
    });

    it('Checking page elements', () => {

    cy.log('Checking guru99 logo');      
    cy.get('div.logo img')
      .should('be.visible')
      .and('have.attr', 'src');
    cy.get('#site-name  a')
      .should('be.visible')
      .and('have.css', 'text-align','center')
      .and('have.css', 'background-color','rgba(0, 0, 0, 0)')
      .and('have.css', 'font-size','32px')
      .click();
		cy.url().should('eq', 'https://www.guru99.com/');
		cy.go('back');

    cy.log('Checking header elements');
    cy.getHeaderElement('Testing','https://www.guru99.com/software-testing.html');
    cy.getHeaderElement('Selenium', 'https://www.guru99.com/selenium-tutorial.html');
		cy.getHeaderElement('Live Project', 'https://www.guru99.com/live-projects.html');
		cy.getHeaderElement('Java', 'https://www.guru99.com/java-tutorial.html');

    cy.log('Checking Navigation bar elements');  
    cy.getNavigationElement('Insurance Project','https://demo.guru99.com/insurance/v1/index.php');
    cy.getNavigationElement('Agile Project','https://demo.guru99.com/Agile_Project/Agi_V1/');
    cy.getNavigationElement('Bank Project','https://demo.guru99.com/V1/index.php');
    cy.getNavigationElement('Security Project','https://demo.guru99.com/Security/SEC_V1/index.php');
    cy.getNavigationElement('Telecom Project','https://demo.guru99.com/telecom/index.html');
    cy.getNavigationElement('Payment Gateway Project','https://demo.guru99.com/payment-gateway/index.php');
    cy.getNavigationElement('New Tours','https://demo.guru99.com/test/newtours/'); 
      
    cy.log('Checking Navigation bar dropdown elements');    
    cy.fixture('links.json').then((links) => {
    cy.checkDropdownLinks(links);
    });
    
    cy.log('CheckingMainElements');

    cy.checkingVisibilityAndText('[class="barone"]','Guru99 BankAccess');
    cy.get('form[name="frmLogin"]')
    .should('be.visible')
    .and('contain', 'UserID')
    .and('contain', 'Password');
    cy.get('form[name="frmLogin"] input[name="uid"]')
    .should('be.visible');
    cy.get('form[name="frmLogin"] input[name="password"]')
    .should('be.visible');   
    cy.get('ol li:nth-child(1)')
    .should('be.visible')
    .and('contain', 'UserID');
    cy.get('ol li:nth-child(2)') 
    .should('be.visible')
    .and('contain', 'Password');
  });
  

  it('Should login ang logout successfully', () => {
    
    cy.log('Entering correct login data')
    cy.get('input[name="uid"]').type(LOGIN.USER_ID);    
    cy.get('input[name="password"]').type(LOGIN.PASSWORD);
    
    cy.log('Login and logout checking');    
    cy.get('input[name="btnLogin"]').click();
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