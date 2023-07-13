Cypress.Commands.add('getNavbarElement', (elementName, pageLink) => {
    cy.get('#navbar-brand-centered').then(jqElement => {
        cy.contains('a', elementName)
            .should('be.visible')
            .invoke('attr', 'href', pageLink).click();
        cy.url().should('eq', pageLink);
        cy.visit('https://demo.guru99.com/Agile_Project/Agi_V1/');
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
