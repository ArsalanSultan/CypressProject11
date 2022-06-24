/// <reference types="Cypress" />

describe('first cypress', function () {

    it('visit google', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        ///Dynamic dropdowns
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if ($e1.text() === "India") {
                $e1.click()
            }
        })
        //if india is selected or not
        cy.get('#autocomplete').should('have.value', 'India')

        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons

        cy.get('[value="radio2"]').check().should('be.checked')

        //Check boxes
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'index')

        cy.go('back')

        // hover over an element
        //cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')


    })
})

