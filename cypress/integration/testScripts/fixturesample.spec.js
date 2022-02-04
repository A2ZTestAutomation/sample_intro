/// <reference types='cypress' />
describe('Using Fixtures', () => {
    it('Using static data', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    })
    it('Using Fixture data', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture('user').then( (user) => {
            const strUser = user.username
            const strPwd = user.password
            cy.get('#username').type(strUser)
            cy.get('#password').type(strPwd)
        })
               
        cy.get('.radius').click()
    })
    it.only('Using Custom Command', () => {
        cy.visit('https://the-internet.herokuapp.com/login')

        //Using customcommand
        // cy.login('tomsmith', 'SuperSecretPassword!')
        //Using Custom Command and Fixtures
        cy.fixture('user').then( (user) => {
            const strUser = user.username
            const strPwd = user.password
            cy.login(strUser, strPwd)
        })
    })
})
