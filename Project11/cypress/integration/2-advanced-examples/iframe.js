/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'
describe('first cypress', function () {

    it('visit google', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href = '#/mentorship']").eq(0).click()

    })
})