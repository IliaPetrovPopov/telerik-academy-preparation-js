function showAddress(address) {
    for( let key in address) {
        console.log(key, address[key]);
    }
}

let address = {
    street: "Nadole",
    city: "Misisipi",
    zipCode: 2900
}

showAddress(address)