/// <reference types='cypress' />

describe('API Testing - Trello Application', () => {
    it('Create a new Board', () => {
       
         cy.intercept({
            method:'GET', 
            url:'/api/boards'

         }).as('boards')
         cy.visit('/')
         cy.wait('@boards')
            .its('response.statusCode')
            .should('eq', 200)
         cy.get('[data-cy=board-item]').should('have.length', 5)
    })
    it('Return empty list', () => {
        cy.intercept({
            method:'GET', 
            url:'/api/boards'

         },{
             body:[]
         }).as('boards')
         cy.visit('/')
    })

    it('Pass values from Fixture', () => {
        cy.intercept({
            method:'GET', 
            url:'/api/boards'
         },{
             fixture:'boards'
         }).as('boards')
         cy.visit('/')
    })
    it.only('Network failure', () => {
        cy.intercept({
            method:'GET', 
            url:'/api/boards'
         },{
             forceNetworkError:true      
         }).as('boards')
         cy.visit('/')
    })
})
