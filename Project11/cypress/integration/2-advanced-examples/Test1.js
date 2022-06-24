/// <reference types="Cypress" />

describe('first cypress',function(){

it('visit google',function(){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get(':nth-child(2) > .product-action > button').click();
cy.get('.search-keyword').type('t');
cy.wait(2000)
//cy.get(".products:visible").should('have.length',4)
//cy.get('[data-top="114.00000151991844"]').should('have.length',4)
cy.get('.products > :nth-child(2)')


})
})