/// <reference types='cypress' />

describe('API Testing - Trello Application', () => {
    // var baseUrl = 'http://localhost:3000'
    // beforeEach(() => {
    //     cy.request({
    //         method: 'POST',
    //         url:'/api/reset'
    //     })
    // })
     it('Create a new Board', () => {
         cy.visit('/')
    })

    it.only('Create a new Board', () => {
        cy.visit('/')
        cy.request({
            method:'POST',
            url:'/api/boards',
            body:{
                'name':'Create intercept Samples'
            }
        })
    })

    // 52259990728
    it('Update Board Name', () => {
        cy.visit('/')
        cy.request({
            method:'PATCH',
            url:'/api/boards/72347032104',
            body:{
                'name':'Updated my board name'
            }
        })
    } )
   
    // 33050963650
    it('Delete Request', () => {
        cy.visit('/')
        cy.request({
            method:'DELETE',
            url: '/api/boards/33050963650'
        })
    })

})