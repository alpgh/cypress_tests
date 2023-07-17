Cypress.Commands.add('getNavigationElement', (elementName, pageLink) => {
    cy.get('#navbar-brand-centered').then(()=>{
        cy.contains('a', elementName)
            .should('be.visible')
            .and('have.css','color', 'rgb(255, 255, 255)')
            .and('have.css','font-weight', '700')
            .and('have.css','FONT-SIZE', '14px')           
            .click();
        cy.url().should('eq', pageLink);        
        cy.go('back');
    });
  });

  Cypress.Commands.add('getHeaderElement', (elementName, pageLink) => {
    cy.get('[class="row topper"]').then(() => {
        cy.contains('a', elementName)
            .should('be.visible')
            .and('have.css','color', 'rgb(0, 0, 0)')
            .and('have.css','font-weight', '400')
            .and('have.css','FONT-SIZE', '18px') 
            .and('have.css','TEXT-ALIGN', 'center')
            .click();
        cy.url().should('eq', pageLink);        
        cy.go('back');
    });
  });


 Cypress.Commands.add('checkDropdownLinks', (links) => {
  links.forEach((link) => {
    cy.contains('a', link.elementName)
      .click();
    cy.get('[class="dropdown-menu"]')
      .find('a')
      .contains(link.pageName)
      .should('be.visible')
      .and('have.attr', 'href', link.ref)
      .click();
    cy.url()
      .should('eq', link.pageLink);
    cy.go('back');
  });
});

Cypress.Commands.add('testHamMenuItem', (selector, expectedText) => {
  cy.get(selector)
    .should('have.length', 1)
    .should('have.text', expectedText)
    .and('have.css', 'webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)')
    .and('have.css', 'line-height', '49px');    
});

Cypress.Commands.add('testLogoLink', (selector, expectedText, expectedHref) => {
  cy.get(selector)
    .should('be.visible')
    .and('have.text', expectedText)
    .and('have.attr', 'href', expectedHref)
    .and("have.css", "color", "rgb(246, 117, 94)")
    .and("have.css", "text-align", "left")
    .and("have.css", "letter-spacing", "2px");
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
    .should('have.value', 'placeholder', placeholder)
    .should('be.visible');
    
});
Cypress.Commands.add('checkingVisibilityAndText', (selector, expectedText) => {
  cy.get(selector)
    .should('be.visible')
    .should('have.text', expectedText);
});


Cypress.Commands.add('checkUserStatusIsActive', (x) => {
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
          if(x==true){
            expect($font.text().trim()).to.eq('ACTIVE');
          }else{
            expect($font.text().trim()).to.eq('INACTIVE');
          }
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

Cypress.Commands.add('paymentClearFields', () => {
  cy.get('#month').select('');
  cy.get('#year').select('');
  cy.get('#cvv_code').clear();
  cy.get('#card_nmuber').clear();
});


Cypress.Commands.add('fillPaymentFields', () => {
  cy.fixture('card.json').then((cardData) => {
    cy.get('#card_nmuber').type(cardData.validVisaCard.number);
    cy.get('#month').select(cardData.validVisaCard.month);
    cy.get('#year').select(cardData.validVisaCard.year);
    cy.get('#cvv_code').type(cardData.validVisaCard.cvv);

  });
});

  Cypress.Commands.add('addTariffFillForm', () => {
    cy.fixture('tariff.json').then((tariffData) => {
      cy.get('#rental1').clear().type(tariffData.AVERAGE_VALUE);
      cy.get('#local_minutes').clear().type(tariffData.AVERAGE_VALUE);
      cy.get('#inter_minutes').clear().type(tariffData.AVERAGE_VALUE);
      cy.get('#sms_pack').clear().type(tariffData.AVERAGE_VALUE);
      cy.get('#minutes_charges').clear().type(tariffData.AVERAGE_VALUE);
      cy.get('#inter_charges').clear().type(tariffData.AVERAGE_VALUE);
      cy.get('#sms_charges').clear().type(tariffData.AVERAGE_VALUE);
    });
  });

  
  Cypress.Commands.add('checkErrorMessageAndURL', (selector, errorMessage) => {
    cy.fixture('validCustomer.json').then((custData) => {
      cy.get(selector)
      .should('be.visible')
      .and('contain', errorMessage);
    cy.get('#main input[type=submit]')
      .click();
    cy.url().should('eq', custData.BASEURL);
  });
 });