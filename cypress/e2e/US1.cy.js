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





  it('US1_1', () => {
    

    cy.get('@addToCartButton3').click();

  })

  it('US1_2', () => {
    
    
      cy.get('@addToCartButton1').click();
      cy.get('@addToCartButton12').click();
      cy.get('@addToCartButton13').click();
      cy.get('@addToCartButton14').click();
    
    
    
    
  })


  it('US1_3', () => {

    cy.get('@quantityInput20').clear().type('3');
    
    cy.get('@addToCartButton20').click();
    

    // // to check cart
    cy.get('.cart-icon').click();

    //this is for product name
    cy.get(`.product:nth-child(20) .product-name`).then(($product) =>{
      const text = $product.text();
      cy.get(`.cart-items .cart-item .product-info .product-name`).should('contain', text);
    });

    //this is for product price
    cy.get(`.product:nth-child(20) .product-price`).then(($product) =>{

      const price = parseInt($product.text());
      const price1 = price*3;
      // const text = $product.text();
      cy.get(`.cart-items .cart-item .amount`).should('contain', price1); //for 3 oranges
    });

    
  })
  
})


