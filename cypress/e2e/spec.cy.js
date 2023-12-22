describe('template spec', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/cart')
    for (let i = 1; i <= 29; i++) {
      const aliasName = `addToCartButton${i}`; //this is for the add to cart button
      const numInput = `quantityInput${i}`; //this is for quantity
      const decrement = `decrementLink${i}`; //this is the minus sign
      const increment = `incrementLink${i}`; //this is the minus sign
      
      cy.get(`.product:nth-child(${i}) .product-action button`).as(aliasName); //we get every element that has add to cart button
      cy.get(`.product:nth-child(${i}) .stepper-input input.quantity`).as(numInput); //every quantity
      cy.get(`.product:nth-child(${i}) .stepper-input a.decrement`).as(decrement);
      cy.get(`.product:nth-child(${i}) .stepper-input a.increment`).as(increment);
    }
  })
  
 


  it("US-2", () =>{

    cy.get('@addToCartButton3').click();
    cy.get('@quantityInput20').clear().type('3'); 
    cy.get('@addToCartButton20').click()
    cy.get('@decrementLink20').click();
    cy.get('@incrementLink21').click();
    cy.get(".cart-icon").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.get("tbody").then(($list) => {
      const num = $list.children().length;
      
      const text = cy.contains('No. of Items').parent().then(($parent) =>{
        const x = $parent.text()
        const inputString = "ApplyNo. of Items : 2 Total Amount : 273 Discount : 0% Total After Discount : 273 Place Order";

        // Define a regular expression pattern to capture the desired values
        const regexPattern = /No\. of Items : (\d+) Total Amount : (\d+) Discount : (\d+%?) Total After Discount : (\d+) Place Order/;
        const match = regexPattern.exec(inputString);
        const numberOfItems = match[1];
        const totalAmount = match[2];
        const discount = match[3];
        const totalAfterDiscount = match[4];
        cy.wrap(num.toString()).should('eq', numberOfItems)
        cy.log(x)
      })

    });
    cy.contains('Place Order').click();
    cy.contains('Select').parent().select('Albania');
    cy.get('.chkAgree').check();
    cy.contains('Proceed').click();
    cy.contains('Thank you, your order has been placed successfully').should('exist')
  })

  it('US-3', () => {
    const search_engine = cy.get('.search-keyword')
    search_engine.type('cucumber')
    cy.contains('Cucumber - 1 Kg').should('exist')
    search_engine.clear()
    search_engine.type('beetroot')
    cy.contains('Beetroot - 1 Kg').should('exist')

  })
})


