function printName(person: { first: string, last: string }) {
    console.log(`Hello ${person.first} ${person.last}`)
}

printName({first : 'Sushant', last: 'Dhiman'})