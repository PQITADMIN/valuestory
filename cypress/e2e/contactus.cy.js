describe('contact us page spec', () => {
  it('should contain all the components', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=signup-button]').click()
    cy.url().should('include', '/contactus')
    cy.get('[data-test=header]').should('exist')
    cy.get('[data-test=contactus-form]').should('exist')
  })
  it('entering no name', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=signup-button]').click()
    cy.url().should('include', '/contactus')
    cy.get('[data-test=email-input]').type('hitesh@pharmaquant.org')
    cy.get('[data-test=phone-input]').type('8708537819')
    cy.get('[data-test=message-input]').type('hitesh@pharmaquant.org')
    cy.get('[data-test=submit-button]').click()
    cy.get('[data-test=name-error]').should('exist')
  })
  it('entering no email', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=signup-button]').click()
    cy.url().should('include', '/contactus')
    cy.get('[data-test=name-input]').type('hitesh kumar')
    cy.get('[data-test=phone-input]').type('8708537819')
    cy.get('[data-test=message-input]').type('hitesh@pharmaquant.org')
    cy.get('[data-test=submit-button]').click()
    cy.get('[data-test=email-error]').should('exist')
  })
  it('entering no phone', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=signup-button]').click()
    cy.url().should('include', '/contactus')
    cy.get('[data-test=name-input]').type('hitesh kumar')
    cy.get('[data-test=email-input]').type('hitesh@gmail.com')
    cy.get('[data-test=message-input]').type('hitesh@pharmaquant.org')
    cy.get('[data-test=submit-button]').click()
    cy.get('[data-test=phone-error]').should('exist')
  })
  it('entering no message', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=signup-button]').click()
    cy.url().should('include', '/contactus')
    cy.get('[data-test=name-input]').type('hitesh kumar')
    cy.get('[data-test=email-input]').type('hitesh@gmail.com')
    cy.get('[data-test=phone-input]').type('8708537819')
    cy.get('[data-test=submit-button]').click()
    cy.get('[data-test=message-error]').should('exist')
  })
})
