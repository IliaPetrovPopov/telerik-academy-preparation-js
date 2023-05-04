class Address {
    constructor(streetAddress, city, state, zipCode) {
        this.streetAddress = streetAddress;
        this.state = state;
        this.city = city;
        this.zipCode = zipCode
    }

    fullAddress() {
        console.log(`${this.state} ${this.city} ${this.zipCode} ${this.streetAddress}`);
    }
}