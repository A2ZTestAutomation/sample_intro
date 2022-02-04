/// <reference types='cypress' />
describe('Scroll Samples', () => {
    it('Handle Page Scroll', () => {
        cy.visit('https://demo.opencart.com/')
        cy.get('.form-control').type('phone')
        cy.get('.input-group-btn').trigger('click')
        cy.get('.image').scrollIntoView()
        cy.get('.image').screenshot()
        cy.get('[placeholder="Search"]').scrollIntoView()
        cy.get('[placeholder="Search"]').clear()
        // cy.get('.form-control').type('phone')
    })
})