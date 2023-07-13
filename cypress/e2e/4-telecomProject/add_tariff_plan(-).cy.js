const TARIFF = require('../../fixtures/tariff.json');

describe('Adding plan(-)', () => {
  beforeEach(() => {
    cy.visit(TARIFF.BASEURL);
  });

  it('Shouldn`t add plan with incorrect rental', () => {
    cy.get('#rental1').type(TARIFF.CHAR_VALUE); // char
    cy.checkingVisibilityAndText('label#message2', 'Characters are not allowed');
    cy.get('#local_minutes').type(TARIFF.AVERAGE_VALUE);
    cy.get('#inter_minutes').type(TARIFF.MIN_VALUE);
    cy.get('#sms_pack').type(TARIFF.MAX_VALUE1);
    cy.get('#minutes_charges').type(TARIFF.AVERAGE_VALUE);
    cy.get('#inter_charges').type(TARIFF.MAX_VALUE2);
    cy.get('#sms_charges').type(TARIFF.AVERAGE_VALUE);
    cy.get('[type="submit"]').click();    
  });

  it('Shouldn`t add plan with incorrect local minutes', () => {
    cy.get('#rental1').type(TARIFF.AVERAGE_VALUE);
    cy.get('#local_minutes').click(); // empty
    cy.get('#inter_minutes').type(TARIFF.MAX_VALUE1);
    cy.checkingVisibilityAndText('label#message3', 'Number must not be blank');
    cy.get('#sms_pack').type(TARIFF.AVERAGE_VALUE);
    cy.get('#minutes_charges').type(TARIFF.MAX_VALUE2);
    cy.get('#inter_charges').type(TARIFF.MIN_VALUE);
    cy.get('#sms_charges').type(TARIFF.MAX_VALUE2);
    cy.get('[type="submit"]').click();    
  });

  it('Shouldn`t add plan with incorrect rental minutes', () => {
    cy.get('#rental1').type(TARIFF.MIN_VALUE);
    cy.get('#local_minutes').type(TARIFF.MIN_VALUE);
    cy.get('#inter_minutes').type(TARIFF.SPECCHAR_VALUE);
    cy.checkingVisibilityAndText('label#message4', 'Special characters are not allowed');
    cy.get('#sms_pack').type(TARIFF.MIN_VALUE);
    cy.get('#minutes_charges').type(TARIFF.AVERAGE_VALUE);
    cy.get('#inter_charges').type(TARIFF.MAX_VALUE2);
    cy.get('#sms_charges').type(TARIFF.MIN_VALUE);
    cy.get('[type="submit"]').click();    
  });

  it('Shouldn`t add plan with negative SMS pack', () => {
    cy.get('#rental1').type(TARIFF.MAX_VALUE1);
    cy.get('#local_minutes').type(TARIFF.MAX_VALUE1);
    cy.get('#inter_minutes').type(TARIFF.AVERAGE_VALUE);
    cy.get('#sms_pack').type(TARIFF.NEG_VALUE); 
    cy.get('#minutes_charges').type(TARIFF.MIN_VALUE);
    cy.get('#inter_charges').type(TARIFF.AVERAGE_VALUE);
    cy.get('#sms_charges').type(TARIFF.AVERAGE_VALUE);
    cy.get('[type="submit"]').click();  
    cy.get('#main>div h2')
    .should('not.have.text', 'Congratulation you add Tariff Plan');  
    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);    
  });  

  it('Shouldn`t add plan with incorrect international charges', () => {
    cy.get('#rental1').type(TARIFF.MAX_VALUE2);
    cy.get('#local_minutes').type(TARIFF.AVERAGE_VALUE);
    cy.get('#inter_minutes').type(TARIFF.MIN_VALUE);
    cy.get('#sms_pack').type(TARIFF.AVERAGE_VALUE);
    cy.get('#minutes_charges').type(TARIFF.CHAR_VALUE); 
    cy.checkingVisibilityAndText('label#message6', 'Characters are not allowed');
    cy.get('#inter_charges').type(TARIFF.AVERAGE_VALUE);
    cy.get('#sms_charges').type(TARIFF.MAX_VALUE1);
    cy.get('[type="submit"]').click();    
  });

  it('Shouldn`t add plan with blank international charges', () => {
    cy.get('#rental1').type(TARIFF.AVERAGE_VALUE);
    cy.get('#local_minutes').type(TARIFF.MIN_VALUE);
    cy.get('#inter_minutes').type(TARIFF.AVERAGE_VALUE);
    cy.get('#sms_pack').type(TARIFF.MAX_VALUE1);
    cy.get('#minutes_charges').type(TARIFF.AVERAGE_VALUE);
    cy.get('#inter_charges').click(); 
    cy.get('#sms_charges').type(TARIFF.AVERAGE_VALUE);
    cy.checkingVisibilityAndText('label#message7', 'Number must not be blank');
    cy.get('[type="submit"]').click();    
  });

  it('Shouldn`t add plan with special characters in SMS charges', () => {
    cy.get('#rental1').type(TARIFF.AVERAGE_VALUE);
    cy.get('#local_minutes').type(TARIFF.AVERAGE_VALUE);
    cy.get('#inter_minutes').type(TARIFF.MIN_VALUE);
    cy.get('#sms_pack').type(TARIFF.MAX_VALUE2);
    cy.get('#minutes_charges').type(TARIFF.MAX_VALUE2);
    cy.get('#inter_charges').type(TARIFF.AVERAGE_VALUE);
    cy.get('#sms_charges').type(':');
    cy.checkingVisibilityAndText('label#message8', 'Special characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);    
  });
});
