/// <reference types="Cypress" />

describe('first cypress', function () {

    it('visit google', function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type('John wick')
        cy.get('input[name="email"]').type('asdf@gmail.com')
        cy.get('select').select('Female').should('have.value', 'Female')
        cy.get('#exampleInputPassword1').type('J123456@')

        cy.get('#exampleCheck1').check().should('be.checked')


    })
})