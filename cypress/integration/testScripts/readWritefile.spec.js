/// <reference types='cypress' />

describe('Read/write data from file', () => {
    it.only('Write into .txt file', () =>{
        cy.writeFile('sample.txt', '\n  To Cypress Training', { flag: 'a+' })
    })
    it('Read from .txt file', () => {
        // cy.readFile('sample.txt').should('eq', 'Hello')
        cy.readFile('sample.txt').should('contain', 'Hello')
        cy.readFile('sample.txt').should('not.contain', 'Trainer')

    })
    it('Read from JSON file', () => {
        cy.readFile('userData.json')
            .its('username')
            .should('eq', 'tomsmith')
    })
    it('Write into JSON file', () =>{
        cy.writeFile('empData.json', 
            {name : 'Test', email : 'testuser@gmail.com'})
    })
    it('Verify browser Content', () => {
        cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document()
            .should('have.property', 'charset')
            .and('eq', 'UTF-8')
    })
     it.only('Upload a file', () =>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').selectFile('sample.txt')
         cy.get('#file-submit').click()
     })

})