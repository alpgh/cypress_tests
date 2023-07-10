const BASEURL = 'https://demo.guru99.com/telecom/addtariffplans.php';
var letter = String.fromCharCode(97 + Math.floor(Math.random() * 26));;
const AVERAGE_VALUE = 100;
const MIN_VALUE = 0;
const MAX_VALUE1 = 99999;
const MAX_VALUE2 = 999;


describe('Adding plan(-)', () => {
  it('Shouldn`t add plan', () => {
    cy.visit(BASEURL);
  
    cy.get ('#rental1').type(letter);               //char
    cy.get ('#local_minutes').type(AVERAGE_VALUE);
    cy.get ('#inter_minutes').type(MIN_VALUE);
    cy.get ('#sms_pack').type(MAX_VALUE1);
    cy.get ('#minutes_charges').type(AVERAGE_VALUE)
    cy.get ('#inter_charges').type(MAX_VALUE2)
    cy.get ('#sms_charges').type(AVERAGE_VALUE)
    cy.get('[type="submit"]').click();
    cy.get('[type="Reset"]').click();

    cy.get ('#rental1').type(AVERAGE_VALUE);
    cy.get ('#local_minutes').click();              //empty
    cy.get ('#inter_minutes').type(MAX_VALUE1);
    cy.get ('#sms_pack').type(AVERAGE_VALUE);
    cy.get ('#minutes_charges').type(MAX_VALUE2)
    cy.get ('#inter_charges').type(MIN_VALUE)
    cy.get ('#sms_charges').type(MAX_VALUE2)
    cy.get('[type="submit"]').click();
    cy.get('[type="Reset"]').click();   
    cy.get('[type="Reset"]').click();

    cy.get ('#rental1').type(MIN_VALUE);
    cy.get ('#local_minutes').type(MIN_VALUE);
    cy.get ('#inter_minutes').type('/');                      //specChar
    cy.get ('#sms_pack').type(MIN_VALUE);
    cy.get ('#minutes_charges').type(AVERAGE_VALUE)
    cy.get ('#inter_charges').type(MAX_VALUE2)
    cy.get ('#sms_charges').type(MIN_VALUE)
    cy.get('[type="submit"]').click();
    cy.get('[type="Reset"]').click();

    cy.get('#rental1').type(MAX_VALUE1);
    cy.get('#local_minutes').type(MAX_VALUE1);
    cy.get('#inter_minutes').type(AVERAGE_VALUE);
    cy.get('#sms_pack').type('-9999');                    //negative
    cy.get('#minutes_charges').type(MIN_VALUE);
    cy.get('#inter_charges').type(AVERAGE_VALUE);
    cy.get('#sms_charges').type(AVERAGE_VALUE);
    cy.get('[type="submit"]').click();
    cy.window().then((win) => {
  if (cy.get('#main>div h2').should('have.text', 'Congratulation you add Tariff Plan')) {
    cy.visit(BASEURL);
    console.log("Field accepts negative values!");
  } else {
    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');
    });
    cy.on('window:confirm', () => true);}

    cy.get ('#rental1').type(MAX_VALUE2);
    cy.get ('#local_minutes').type(AVERAGE_VALUE);
    cy.get ('#inter_minutes').type(MIN_VALUE);                     
    cy.get ('#sms_pack').type(AVERAGE_VALUE);
    cy.get ('#minutes_charges').type(letter)  //char
    cy.get ('#inter_charges').type(AVERAGE_VALUE)
    cy.get ('#sms_charges').type(MAX_VALUE1)
    cy.get('[type="submit"]').click();
    cy.get('[type="Reset"]').click();

    cy.get ('#rental1').type(AVERAGE_VALUE);
    cy.get ('#local_minutes').type(MIN_VALUE);              
    cy.get ('#inter_minutes').type(AVERAGE_VALUE);
    cy.get ('#sms_pack').type(MAX_VALUE1);
    cy.get ('#minutes_charges').type(AVERAGE_VALUE)
    cy.get ('#inter_charges').click();        //empty
    cy.get ('#sms_charges').type(AVERAGE_VALUE)
    cy.get('[type="submit"]').click();
    cy.get('[type="Reset"]').click();
    cy.get('[type="Reset"]').click();

    cy.get ('#rental1').type(AVERAGE_VALUE);
    cy.get ('#local_minutes').type(AVERAGE_VALUE);
    cy.get ('#inter_minutes').type(MIN_VALUE);                      
    cy.get ('#sms_pack').type(MAX_VALUE2);
    cy.get ('#minutes_charges').type(MAX_VALUE2)
    cy.get ('#inter_charges').type(AVERAGE_VALUE)
    cy.get ('#sms_charges').type(':')     //specChar
    cy.get('[type="submit"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.eq('please fill all fields Correct Value');});
    cy.on('window:confirm', () => true);
    cy.visit(BASEURL);
        });    
     });
});