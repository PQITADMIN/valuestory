describe('landing page spec', () => {
  it('should contain all the components', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=logo]').should('exist')
    cy.get('[data-test=contactus-button]').should('exist')
    cy.get('[data-test=signin-button]').should('exist')
  })
  it('navigating to contact us page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=contactus-button]').click()
    cy.url().should('include', '/contactus')
    cy.go('back')
  })
//   it('navigating to login page', () => {
//     cy.visit('http://localhost:3000')
//     cy.get('[data-test=signin-button]').click()
//     // cy.url().should('include', '/contactus')
//     // cy.go('back')
//   })
})
