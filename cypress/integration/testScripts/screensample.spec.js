/// <reference types='cypress' />
describe('Taking Screenshot', () => {
    it('Fullpage Screenshot', () => {
        cy.visit('https://www.example.com/')
        cy.screenshot({capture:"fullPage"})
    })
    it('WebElement Screenshot', () => {
        cy.visit('https://www.example.com/')
        cy.get('h1').screenshot("H1-TagScreenshot")
    })
   
})
