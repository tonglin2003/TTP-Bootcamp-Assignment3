class ShoppingCart
{
    constructor()
    {
        this.shoppingCart = {};
    }

    addToCart(item, price, quantity)
    {
        // if the item is inside the cart already
        if (item in this.shoppingCart)
        {
            this.shoppingCart[item]['quantity'] += quantity;
        }
        else
        {
            this.shoppingCart[item] = {
                'price': price,
                'quantity': quantity
            };
        }
    }

    removeFromCart(item, quantity)
    {
        // if the item is inside the cart already
        if (item in this.shoppingCart && quantity < this.shoppingCart[item]['quantity'])
        {
            this.shoppingCart[item]['quantity'] -= quantity;
        }
        else
        {
            delete this.shoppingCart[item];
        }
    }

    calculateTotal()
    {
        var total = 0;
        for (const [key, value] of Object.entries(this.shoppingCart))
        {
            total += value['price'] * value['quantity'];
        }
        return parseFloat(total.toFixed(2));
    }
}

module.exports = ShoppingCart;

