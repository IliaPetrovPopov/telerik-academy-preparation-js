let person = { name: 'Ilia'};

 let objectBase= Object.getPrototypeOf(person);
 let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
 console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false, // becomes read only
    enumerable: false, // doesn't show in Object.keys
    configurable: false // cannot delete the property
});

