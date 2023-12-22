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

      //this way we can easily have every element from products
    }
  })





  it('US1_1', () => {
    //adding element to cart

    cy.get('@addToCartButton3').click();

  })

  it('US1_2', () => {
    //adding multiple element to cart
    
    
      cy.get('@addToCartButton1').click();
      cy.get('@addToCartButton12').click();
      cy.get('@addToCartButton13').click();
      cy.get('@addToCartButton14').click();
    
    
    
    
  })


  it('US1_3', () => {
    //adding multiple element to cart and checking if they exist in cart


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


  it('US1_4', () => {
    //adding multiple element to cart and checking if they exist in cart
    //and adding with sign minus 

    cy.get('@decrementLink3').click();
    cy.get('@decrementLink3').click();
    cy.get('@decrementLink3').click();
    cy.get('@incrementLink3').click();

    cy.get('@addToCartButton3').click();


    cy.get('@quantityInput20').clear().type('3');
    cy.get('@addToCartButton20').click();
    

    // // to check cart
    cy.get('.cart-icon').click();

    //this is for product name 20 
    cy.get(`.product:nth-child(20) .product-name`).then(($product) =>{
      const text = $product.text();
      cy.get(`.cart-items .cart-item .product-info .product-name`).should('contain', text);
    });

    //this is for product name 3 
    cy.get(`.product:nth-child(3) .product-name`).then(($product) =>{
      const text1 = $product.text();
      cy.get(`.cart-items .cart-item .product-info .product-name`).should('contain', text1);
    });
    

    //this is for product price20
    cy.get(`.product:nth-child(20) .product-price`).then(($product) =>{

      const pricee = parseInt($product.text());
      const price11 = pricee*3;
      // const text = $product.text();
      cy.get(`.cart-items .cart-item .amount`).should('contain', price11); //for 3 oranges
    });


    //this is for product price3
    cy.get(`.product:nth-child(3) .product-price`).then(($product) =>{

      const price = parseInt($product.text());
      const price1 = price*2;
      // const text = $product.text();
      cy.get(`.cart-items .cart-item .amount`).should('contain', price1); //for 3 cucumbers
    });


    
  })
  
})


