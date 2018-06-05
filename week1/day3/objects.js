let person = {
    name: 'Jerry',
    phoneNumbers: [5145145144, 5141234567],
    address: {
        num: 34,
        street: 'Lafontaine',
        city: 'Montreal',
    }
}

console.log(typeof person.address.num);
console.log(typeof person.phoneNumbers)

console.log(person['phoneNumbers'] instanceof Object);
console.log(person['phoneNumbers'] instanceof Array);
console.log(person['phoneNumbers'] instanceof String);