/// <reference types="Cypress" />

describe('first cypress suite', function () {

    it('visit google', function () {


        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type('John')
        cy.get('#exampleInputPassword1').type('J1234567@')
        cy.get('select').select('Female').should('have.value', 'Female')


    })

})