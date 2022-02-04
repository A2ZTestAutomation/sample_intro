/// <reference types = 'cypress' />

describe('My First Sample', () => {
    it('First TestCase', () => {
        expect(true).to.be.equals(true)
    })
    it('Sum of Two numbers', () => {
        expect(2+2).to.be.equals(4)
    })
})
describe('Second Test Group', () => {
    it('False should be false', () => {
        expect(false).to.be.equals(false)
    })
})