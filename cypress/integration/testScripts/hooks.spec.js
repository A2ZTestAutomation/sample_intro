/// <reference types='cypress' />
describe('Hooks', () => {
    before('Before All Test', () => {
        cy.log('Before All Test')
    })
    beforeEach('Before Each Test', () => {
        cy.log('Before Each Test')
    })
    it('Test1', () => {
        cy.log('Execution Test1......')
    })
    it('Test2', () => {
        cy.log('Execution Test2......')
    })

    afterEach('After Each Test', () =>{
        cy.log('After Each Test')
    })
    after('After All Test', () => {
        cy.log('After All Test')
    })
})