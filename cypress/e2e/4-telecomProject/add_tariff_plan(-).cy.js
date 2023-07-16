const TARIFF = require('../../fixtures/tariff.json');

describe('Adding plan(-)', () => {
  beforeEach(() => {
    cy.visit(TARIFF.BASEURL);
  });

  it('Shouldn`t add plan with incorrect rental', () => {
    cy.log('submitting form with empty rental');
    cy.addTariffFillForm();
    cy.get('#rental1').clear();
    cy.checkingVisibilityAndText('label#message2', 'Number must not be blank');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with chars rental');
    cy.enterValuesAndVerifyPlaceholder('#rental1', 'Monthly Rental', TARIFF.CHAR_VALUE);
    cy.checkingVisibilityAndText('label#message2', 'Characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.get('#rental1').type('{selectall}{backspace}');
    cy.log('submitting form with chars rental');
    cy.enterValuesAndVerifyPlaceholder('#rental1', 'Monthly Rental', TARIFF.SPECCHAR_VALUE);
    cy.checkingVisibilityAndText('label#message2', 'Special characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.get('#rental1').type('{selectall}{backspace}');
    cy.log('submitting form with negative rental');
    cy.enterValuesAndVerifyPlaceholder('#rental1', 'Monthly Rental', TARIFF.NEG_VALUE);
    cy.checkingVisibilityAndText('label#message2', 'Negative numbers are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);
  });

  it('Shouldn`t add plan with incorrect Free Local Minutes', () => {
    cy.log('submitting form with empty Local Minutes');
    cy.addTariffFillForm();
    cy.get('#local_minutes').clear();
    cy.checkingVisibilityAndText('label#message3', 'Number must not be blank');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with chars Local Minutes');
    cy.enterValuesAndVerifyPlaceholder('#local_minutes', 'Free Local Minutes', TARIFF.CHAR_VALUE);
    cy.checkingVisibilityAndText('label#message3', 'Characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.get('#local_minutes').type('{selectall}{backspace}');
    cy.log('submitting form with chars Local Minutes');
    cy.enterValuesAndVerifyPlaceholder('#local_minutes', 'Free Local Minutes', TARIFF.SPECCHAR_VALUE);
    cy.checkingVisibilityAndText('label#message3', 'Special characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.get('#local_minutes').type('{selectall}{backspace}');
    cy.log('submitting form with negative Local Minutes');
    cy.enterValuesAndVerifyPlaceholder('#local_minutes', 'Free Local Minutes', TARIFF.NEG_VALUE);
    cy.checkingVisibilityAndText('label#message3', 'Negative numbers are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);
  });

  it('Shouldn`t add plan with incorrect Free International Minutes', () => {
    cy.log('submitting form with empty Free Int minutes');
    cy.addTariffFillForm();
    cy.get('#inter_minutes').clear();
    cy.checkingVisibilityAndText('label#message4', 'Number must not be blank');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with chars Free Int minutes');
    cy.enterValuesAndVerifyPlaceholder('#inter_minutes', 'Free International Minutes', TARIFF.CHAR_VALUE);
    cy.checkingVisibilityAndText('label#message4', 'Characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.get('#inter_minutes').type('{selectall}{backspace}');
    cy.log('submitting form with chars Free Int minutes');
    cy.enterValuesAndVerifyPlaceholder('#inter_minutes', 'Free International Minutes', TARIFF.SPECCHAR_VALUE);
    cy.checkingVisibilityAndText('label#message4', 'Special characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.get('#inter_minutes').type('{selectall}{backspace}');
    cy.log('submitting form with negative Free Int minutes');
    cy.enterValuesAndVerifyPlaceholder('#inter_minutes', 'Free International Minutes', TARIFF.NEG_VALUE);
    cy.checkingVisibilityAndText('label#message4', 'Negative numbers are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);
  });

  it("Shouldn't add plan with incorrect Free SMS Pack", () => {
    cy.log('submitting form with empty Free SMS Pack');
    cy.addTariffFillForm();
    cy.get('#sms_pack').clear();
    cy.checkingVisibilityAndText('label#message5', 'Number must not be blank');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with chars Free SMS Pack');
    cy.enterValuesAndVerifyPlaceholder('#sms_pack', 'Free SMS Pack', TARIFF.CHAR_VALUE);
    cy.checkingVisibilityAndText('label#message5', 'Characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with special chars Free SMS Pack');
    cy.get('#sms_pack').type('{selectall}{backspace}');
    cy.enterValuesAndVerifyPlaceholder('#sms_pack', 'Free SMS Pack', TARIFF.SPECCHAR_VALUE);
    cy.checkingVisibilityAndText('label#message5', 'Special characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with negative Free SMS Pack');
    cy.get('#sms_pack').type('{selectall}{backspace}');
    cy.enterValuesAndVerifyPlaceholder('#sms_pack', 'Free SMS Pack', TARIFF.NEG_VALUE);
    cy.checkingVisibilityAndText('label#message5', 'Negative numbers are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);
  });

  it("Shouldn't add plan with incorrect Local Per Minutes Charges", () => {
    cy.log('submitting form with empty Local Per Minutes Charges');
    cy.addTariffFillForm();
    cy.get('#minutes_charges').clear();
    cy.checkingVisibilityAndText('label#message6', 'Number must not be blank');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with chars Local Per Minutes Charges');
    cy.enterValuesAndVerifyPlaceholder('#minutes_charges', 'Local Per Minutes Charges', TARIFF.CHAR_VALUE);
    cy.checkingVisibilityAndText('label#message6', 'Characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with special chars Local Per Minutes Charges');
    cy.get('#minutes_charges').type('{selectall}{backspace}');
    cy.enterValuesAndVerifyPlaceholder('#minutes_charges', 'Local Per Minutes Charges', TARIFF.SPECCHAR_VALUE);
    cy.checkingVisibilityAndText('label#message6', 'Special characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with negative Local Per Minutes Charges');
    cy.get('#minutes_charges').type('{selectall}{backspace}');
    cy.enterValuesAndVerifyPlaceholder('#minutes_charges', 'Local Per Minutes Charges', TARIFF.NEG_VALUE);
    cy.checkingVisibilityAndText('label#message6', 'Negative numbers are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);
  });

  it("Shouldn't add plan with incorrect Inter. Per Minutes Charges", () => {
    cy.log('submitting form with empty Inter. Per Minutes Charges');
    cy.addTariffFillForm();
    cy.get('#inter_charges').clear();
    cy.checkingVisibilityAndText('label#message7', 'Number must not be blank');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with chars Inter. Per Minutes Charges');
    cy.enterValuesAndVerifyPlaceholder('#inter_charges', 'Inter. Per Minutes Charges', TARIFF.CHAR_VALUE);
    cy.checkingVisibilityAndText('label#message7', 'Characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with special chars Inter. Per Minutes Charges');
    cy.get('#inter_charges').type('{selectall}{backspace}');
    cy.enterValuesAndVerifyPlaceholder('#inter_charges', 'Inter. Per Minutes Charges', TARIFF.SPECCHAR_VALUE);
    cy.checkingVisibilityAndText('label#message7', 'Special characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with negative Inter. Per Minutes Charges');
    cy.get('#inter_charges').type('{selectall}{backspace}');
    cy.enterValuesAndVerifyPlaceholder('#inter_charges', 'Inter. Per Minutes Charges', TARIFF.NEG_VALUE);
    cy.checkingVisibilityAndText('label#message7', 'Negative numbers are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);
  });

  it("Shouldn't add plan with incorrect SMS Per Charges", () => {
    cy.log('submitting form with empty SMS Per Charges');
    cy.addTariffFillForm();
    cy.get('#sms_charges').clear();
    cy.checkingVisibilityAndText('label#message8', 'Number must not be blank');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with chars SMS Per Charges');
    cy.enterValuesAndVerifyPlaceholder('#sms_charges', 'SMS Per Charges', TARIFF.CHAR_VALUE);
    cy.checkingVisibilityAndText('label#message8', 'Characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with special chars SMS Per Charges');
    cy.get('#sms_charges').type('{selectall}{backspace}');
    cy.enterValuesAndVerifyPlaceholder('#sms_charges', 'SMS Per Charges', TARIFF.SPECCHAR_VALUE);
    cy.checkingVisibilityAndText('label#message8', 'Special characters are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.log('submitting form with negative SMS Per Charges');
    cy.get('#sms_charges').type('{selectall}{backspace}');
    cy.enterValuesAndVerifyPlaceholder('#sms_charges', 'SMS Per Charges', TARIFF.NEG_VALUE);
    cy.checkingVisibilityAndText('label#message8', 'Negative numbers are not allowed');
    cy.get('[type="submit"]').click();
    cy.url().should('eq', TARIFF.BASEURL);

    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);
  });

 });
