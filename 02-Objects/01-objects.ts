function printName(person: { first: string, last: string }) {
    console.log(`Hello ${person.first} ${person.last}`)
}

printName({ first: 'Sushant', last: 'Dhiman' })


let coordinate: { x: number, y: number } = { x: 0, y: 0 };

function randomCoordinate(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() }
}
console.log(randomCoordinate())