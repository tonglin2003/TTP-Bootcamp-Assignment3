const ShoppingCart = require('./shoppingCart');

describe('ShoppingCart', () => 
{
    let cart;
  
    beforeEach(() => 
    {
      cart = new ShoppingCart();
    });
  
    test('should add items to the cart', () => {
      cart.addToCart('notebook', 10, 2);
      cart.addToCart('pencil', 5, 3);
  
      expect(cart.shoppingCart).toEqual({
        notebook: { price: 10, quantity: 2 },
        pencil: { price: 5, quantity: 3 },
      });
    });
  
    test('update quantity if item already exists in the cart', () => {
      cart.addToCart('notebook', 10, 2);
      cart.addToCart('notebook', 10, 3);
  
      expect(cart.shoppingCart['notebook']).toEqual({ price: 10, quantity: 5 });
    });
  
    test('should remove item from the cart', () => {
      cart.addToCart('pencil', 10, 2);
      cart.removeFromCart('pencil');
  
      expect(cart.shoppingCart).toEqual({});
    });
  
    test('should decrease quantity if item exists and if quantity is less than the current quantity', () => {
      cart.addToCart('item1', 10, 5);
      cart.removeFromCart('item1', 2);
  
      expect(cart.shoppingCart['item1']).toEqual({ price: 10, quantity: 3 });
    });
  
    test('should calculate the correct total', () => {
      cart.addToCart('item1', 10, 2);
      cart.addToCart('item2', 5, 3);
  
      expect(cart.calculateTotal()).toBe(35); // (10 * 2) + (5 * 3) = 20 + 15 = 35
    });
  });