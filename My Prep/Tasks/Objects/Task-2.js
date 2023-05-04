function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function address(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

let udri = new Address('Leshta', 'Debren', 1914);
let udri1 = address('Leshta', 'a', 123);
console.log(udri1);