// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


Cypress.Commands.add('getNavbarElement', (elementName, pageLink) => {
    cy.get('#navbar-brand-centered').then(jqElement => {
        cy.contains('a', elementName)
            .should('be.visible')
            .invoke('attr', 'href', pageLink).click();
        cy.url().should('eq', pageLink);
        cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/');
    });
});
  
  Cypress.Commands.add('checkDropdownLinks', (dropdownSelector, linkText, linkHref) => {
    cy.get('#navbar-brand-centered').click();
  
    cy.get('.dropdown-menu').contains('a', linkText)
      .should('have.attr', 'href', linkHref);
  
    cy.get(dropdownSelector).click();
  });
 

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })