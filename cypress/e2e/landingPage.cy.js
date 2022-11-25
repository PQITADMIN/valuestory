describe('landing page spec', () => {
  it('should contain all the components', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=header]').should('exist')
    cy.get('[data-test=background-video]').should('exist')
    cy.get('[data-test=description]').should('exist')
    cy.get('[data-test=signup-button]').should('exist')
    cy.get('[data-test=signup-button]').click()
    cy.url().should('include', '/contactus')
    cy.go('back')
  })
})
