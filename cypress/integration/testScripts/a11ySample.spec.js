function terminalLog(violations){
    cy.task(
        'log',
        `${violations.length} accessibility violations${
            violations.length === 1 ? '' : 's'
        } ${violations.length === 1 ? 'was' : 'were'} detected`
    )
    const violationData = violations.map(
        ({  id, impact, description, nodes }) => ({
                id,
                impact,
                description,
                nodes: nodes.length
            })
        )
        cy.task('table', violationData)
}

/// <reference types='cypress' />
describe('Accessibility Testing', () => {
    it('First Sample A11y Test', () => {
    // cy.visit('https://www.cypress.io/features/')
    cy.visit('https://demo.opencart.com/')
    cy.injectAxe()
    // cy.checkA11y()
    // cy.checkA11y('.input-group-btn > .btn')
    // cy.checkA11y({
    //     exclude: ['.input-group-btn > .btn',
    //     '.col-sm-3 > .btn-group']

    // })
    cy.checkA11y({
        exclude: ['.col-sm-3 > .btn-group']

    })
    // cy.checkA11y(null, null, terminalLog)

})

})