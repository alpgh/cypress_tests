  Cypress.Commands.add('testHamMenuItem', (selector, expectedText) => {
    cy.get(selector)
      .should('have.length', 1)
      .should('have.text', expectedText);
  });
  Cypress.Commands.add('testLogoLink', (selector, expectedText, expectedHref) => {
    cy.get(selector)
      .should('be.visible')
      .should('have.text', expectedText)
      .should('have.attr', 'href', expectedHref);
  });
  
  Cypress.Commands.add('testSectionTitle', (selector, expectedText) => {
    cy.get(selector)
      .should('be.visible')
      .then(($element) => {
        const text = $element.text().trim();
        expect(text).to.equal(expectedText);
      });
  });
  Cypress.Commands.add('enterValuesAndVerifyPlaceholder', (selector, placeholder, value) => {
    cy.get(selector)
      .should('have.attr', 'placeholder', placeholder)
      .should('be.visible')
      .type(value);
  });
  Cypress.Commands.add('visibilityVerifyPlaceholder', (selector, placeholder) => {
    cy.get(selector)
      .should('have.attr', 'placeholder', placeholder)
      .should('be.visible');
      
  });
  Cypress.Commands.add('checkingVisibilityAndText', (selector, expectedText) => {
    cy.get(selector)
      .should('be.visible')
      .should('have.text', expectedText);
  });


  Cypress.Commands.add('checkUserStatus', () => {
    cy.get(':nth-child(2) h3')
      .invoke('text')
      .then((text) => {
        const custID = text.trim();
        cy.log(custID);
       
  
        cy.get('a.button[href="index.html"]').click();
        cy.get('div.flex-item.left :nth-child(2) h3').click();
  
        cy.get('input[type="text"][name="customer_id"]')
          .should('be.visible')
          .type(custID);
  
        cy.get('[type="submit"][value="submit"]')
          .should('be.visible')
          .should('have.value', 'submit')
          .click();
  
        cy.get('font[size="5"]')
          .should('be.visible')
          .then(($font) => {
            const status = $font.text().trim() === 'ACTIVE' ? 'ACTIVE' : 'INACTIVE';
  
            cy.log(status);
          });
      });
  });
  
  Cypress.Commands.add('fillFormWithValidData', () => {
    cy.fixture('validCustomer.json').then((validData) => {
      cy.get(':nth-child(1) > label').click();
      cy.get('#fname').clear().type(validData.firstName);
      cy.get('#lname').clear().type(validData.lastName);
      cy.get('#email').clear().type(validData.email);
      cy.get('textarea[name="addr"]').clear().type(validData.address);
      cy.get('#telephoneno').clear().type(validData.mobileNumber);
    });
  });

  

  
  
  