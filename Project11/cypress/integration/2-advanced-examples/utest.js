/// <reference types="Cypress" />

describe('first cypress',function(){

    it('visit google',function(){
    
    cy.visit("https://prod-auth.cloud.utest.com/auth/realms/applause/protocol/openid-connect/auth/?client_id=utestv2&redirect_uri=https%3A%2F%2Fwww.utest.com%2Foauth-login%2F&response_type=code");
    cy.wait(2000)
    //email
    cy.get('#username').type('boykaredemp@gmail.com')
    //password
    cy.get('#password').type('Asd909070@')
    //click
    cy.get('#kc-login').click();
    cy.wait(9000)
    cy.wait(8000)
    
    })
    })