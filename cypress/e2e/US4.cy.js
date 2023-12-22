describe('User Story 4. Top Deals', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      })
    it('gets top deals', () => {
        cy.get('a.cart-header-navlink:contains("Top Deals")').click();
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.contains('Search')
        cy.get('.table-bordered')
            .then(($element) => {
                // Log the actual text content of the element
                cy.log($element.text());
            })
        
    })
})