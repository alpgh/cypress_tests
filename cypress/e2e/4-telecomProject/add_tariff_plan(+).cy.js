const TARIFF = require('../../fixtures/tariff.json');

describe('Adding plan and reset button checking', () => {
  beforeEach(() => {
    cy.visit(TARIFF.BASEURL);
  });

  it('Checking page elements', () => {
    cy.log('Testing page elements visibility');
    cy.testLogoLink('a.logo', 'Guru99 telecom', 'index.html');
    cy.testSectionTitle('[class="align-center"]', 'Add Tariff Plans');
    cy.testSectionTitle('div:nth-child(1) > h3', 'Monthly Rental');
    cy.testSectionTitle('div:nth-child(6) > h3', 'Free Local Minutes');
    cy.testSectionTitle('div:nth-child(11) > h3', 'Free International Minutes');
    cy.testSectionTitle('div:nth-child(16) > h3', 'Free SMS Pack');
    cy.testSectionTitle('div:nth-child(21) > h3', 'Local Per Minutes Charges');
    cy.testSectionTitle('div:nth-child(26) > h3', 'International Per Minutes Charges');
    cy.testSectionTitle('div:nth-child(31) > h3', 'SMS Per Charges');

    cy.get('[type="submit"]')
      .should('be.visible')
      .and('have.value', 'submit')
      .and('have.css', 'background-color', 'rgb(246, 117, 94)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'font-family', 'Montserrat, sans-serif')
      .and('have.css', 'height', '49px');

    cy.get('[type="reset"]')
      .should('be.visible')
      .and('have.value', 'Reset')
      .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'color', 'rgb(114, 122, 130)')
      .and('have.css', 'font-family', 'Montserrat, sans-serif')
      .and('have.css', 'height', '49px');
  });

  it('Adding plan with maximal values', () => {
    cy.log('Testing maximal values');

    cy.enterValuesAndVerifyPlaceholder('#rental1', 'Monthly Rental', TARIFF.MAX_VALUE1);
    cy.enterValuesAndVerifyPlaceholder('#local_minutes', 'Free Local Minutes', TARIFF.MAX_VALUE1);
    cy.enterValuesAndVerifyPlaceholder('#inter_minutes', 'Free International Minutes', TARIFF.MAX_VALUE1);
    cy.enterValuesAndVerifyPlaceholder('#sms_pack', 'Free SMS Pack', TARIFF.MAX_VALUE1);
    cy.enterValuesAndVerifyPlaceholder('#minutes_charges', 'Local Per Minutes Charges', TARIFF.MAX_VALUE2);
    cy.enterValuesAndVerifyPlaceholder('#inter_charges', 'Inter. Per Minutes Charges', TARIFF.MAX_VALUE2);
    cy.enterValuesAndVerifyPlaceholder('#sms_charges', 'SMS Per Charges', TARIFF.MAX_VALUE2);

    cy.get('[type="submit"]').click();
    cy.checkingVisibilityAndText('#main>div h2', 'Congratulation you add Tariff Plan');
    cy.checkingVisibilityAndText('a.button', 'Home')
      .click();
    cy.checkingVisibilityAndText('h3 a[href="addtariffplans.php"]', 'Add Tariff Plan')
      .click();
  });

  it('Adding plan with minimal values', () => {
    cy.log('Testing minimal values');

    cy.enterValuesAndVerifyPlaceholder('#rental1', 'Monthly Rental', TARIFF.MIN_VALUE);
    cy.enterValuesAndVerifyPlaceholder('#local_minutes', 'Free Local Minutes', TARIFF.MIN_VALUE);
    cy.enterValuesAndVerifyPlaceholder('#inter_minutes', 'Free International Minutes', TARIFF.MIN_VALUE);
    cy.enterValuesAndVerifyPlaceholder('#sms_pack', 'Free SMS Pack', TARIFF.MIN_VALUE);
    cy.enterValuesAndVerifyPlaceholder('#minutes_charges', 'Local Per Minutes Charges', TARIFF.MIN_VALUE);
    cy.enterValuesAndVerifyPlaceholder('#inter_charges', 'Inter. Per Minutes Charges', TARIFF.MIN_VALUE);
    cy.enterValuesAndVerifyPlaceholder('#sms_charges', 'SMS Per Charges', TARIFF.MIN_VALUE);

    cy.get('[type="submit"]').click();
    cy.checkingVisibilityAndText('#main>div h2', 'Congratulation you add Tariff Plan');
    cy.checkingVisibilityAndText('a.button', 'Home')
      .click();
    cy.checkingVisibilityAndText('h3 a[href="addtariffplans.php"]', 'Add Tariff Plan')
      .click();
  });

  it('Reset button clears the fields', () => {
    cy.log('Reset button functionality');

    cy.get('#rental1').type(TARIFF.MAX_VALUE1);
    cy.get('#local_minutes').type(TARIFF.MAX_VALUE1);
    cy.get('#inter_minutes').type(TARIFF.MAX_VALUE1);
    cy.get('#sms_pack').type(TARIFF.MAX_VALUE1);
    cy.get('#minutes_charges').type(TARIFF.MAX_VALUE2);
    cy.get('#inter_charges').type(TARIFF.MAX_VALUE2);
    cy.get('#sms_charges').type(TARIFF.MAX_VALUE2);

    cy.get('[type="reset"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should('eq', TARIFF.BASEURL);
  });
});
