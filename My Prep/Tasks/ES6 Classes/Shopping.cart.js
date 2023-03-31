const items = new WeakMap();
const prices = new WeakMap();

class ShoppingCart {
    constructor() {
        items.set(this, []);
        prices.set(this, []);
    }

    cartContent() {
        if(items.get(this).length === 0) {
            throw new Error("The cart is empty");
        }

        return items.get(this);
    }

    cartContentPrices() {
        if(prices.get(this).length === 0) {
            throw new Error("The cart is empty");
        }

        return prices.get(this);
    }
    
    addToCart(item, price) {
        items.get(this).push(item), prices.get(this).push(price); 
    }

    removeFromCart(item) {
        if(items.get(this).length === 0) {
            throw new Error("There is nothing in the cart");
        }

        let index = items.get(this).indexOf(item);
        
        items.get(this).splice(index, 1);
        prices.get(this).splice(index, 1);
    }

    totalCost() {
        return prices.get(this).reduce((a, b) => a + b, 0);
    }

    // here I cannot reset, because we have to take the items one by one
}

let cart = new ShoppingCart();