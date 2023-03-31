const customerReviews = new WeakMap();
const menu = new WeakMap();

class Restaurant {
    constructor(name, address, cuisineType) {
        this.name = name;
        this.address = address;
        this.cuisineType = cuisineType;
        menu.set(this, []);
        customerReviews.set(this, []);
    }

    addCustomerReview(review) {
        customerReviews.get(this).push(review);
    }

    rating() {
        let rating = customerReviews.get(this).reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0) / customerReviews.get(this).length;

        return rating.toFixed(2);
    }

    addMenuItem(item) {
        menu.get(this).push(item);
    }

    removeMenuItem(item) {
        if(menu.get(this).length === 0) {
            throw new Error("The menu is empty");
        }
        let index = menu.get(this).indexOf(item);
        menu.get(this).splice(index, 1);
    }

    displayMenu() {
        return menu.get(this);
    }
    
    reset() {
        menu.set(this, []);
        customerReviews.set(this, []);
        this.name = '';
        this.address = '';
        this.cuisineType = '';
    }
}

let r = new Restaurant("Bulgaria", "Unknown", "Bulgarian");