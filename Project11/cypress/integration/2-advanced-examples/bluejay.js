/// <reference types="Cypress" />

describe('first cypress', function () {

    it('visit google', function () {

        cy.visit("https://www.myhomept.co/#/login/");
        cy.wait(2000)
        //email
        cy.get('#exampleInputEmail2').type('boykaredemp@gmail.com')
        //password
        cy.get('#exampleInputPassword2').type('1234567@')
        //click
        cy.get('#component-login').contains('Sign In').click();
        cy.wait(9000)
        cy.wait(8000)

    })
})