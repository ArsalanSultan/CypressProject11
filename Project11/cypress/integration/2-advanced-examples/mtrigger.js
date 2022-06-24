/// <reference types="Cypress" />

describe('first cypress',function(){

    it('visit google',function(){
    
    cy.visit("https://mtrigger.myhomept.co/#/login/");
    cy.get('#exampleInputEmail2').type('adnan.mtrigger@grr.la');
    cy.get('#exampleInputPassword2').type('123456');
    cy.wait(2000)
    
    cy.get('.loginactions > .btn').click();
    
    
    })
    })