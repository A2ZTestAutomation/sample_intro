/// <reference types='cypress' />

describe('Sample on Xpath', () => {
    it('xpath Locator ', () => {
        cy.visit('/login')
        //Using xpath
        // cy.xpath("//input[@id='username']").type('tomsmith')
        // cy.xpath("//input[@id='password']").type('SuperSecretPassword!')
        //Using cssselector
        // cy.get('#username').type('tomsmith')
        // cy.get('#password').type('SuperSecretPassword!')
        //Reading values from cypress.json env
        cy.get('#username').type(Cypress.env('username'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('.radius').click()
    })
})