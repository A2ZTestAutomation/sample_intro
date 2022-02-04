/// <reference types='cypress' />

const { reporters } = require("mocha")

describe('Rest API Samples ',  () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/'
    it('Handle Get Request', () =>{
        cy.request(baseUrl.concat('users')).as('userResp')
        cy.get('@userResp').its('status').should('equals', 200)
        cy.get('@userResp')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8')
       })

    it('Get User Data', () => {
        cy.request('GET', 'https://reqres.in/api/users').then((response) => {
            expect(response.body.data[0].first_name).equal('George')
            expect(response.body.data).to.have.length(6)
            cy.log(response.body.data)
                      
        })
    })
    it('Create User', () =>{
        var userRec = {
            name:'TestUser',
            job: 'Architect'
            
        }
        //Method 1
        cy.request('POST', 'https://reqres.in/api/users',  userRec).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal('TestUser')
            
        })
        //Method 2
        cy.request('POST', 'https://reqres.in/api/users', userRec)
            .its('body')
            .should('include', {name : 'TestUser' })
    })

    it('Update User', () => {
        var user1 = {
            name: 'Test User',
            job : 'TestLead'
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user1).then( (response) => {
            expect(response.status).equal(200)
            expect(response.body.name).equal(user1.name)
            expect(response.body.job).equal(user1.job)
        })
    })
    it('Delete User', () => {
        cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
        })
    })
})