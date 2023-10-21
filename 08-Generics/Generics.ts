// Generics allow creating 'type variables'.

const getRandomElement = <T>(value: T[]): T => {
    const index = Math.floor(Math.random() * value.length)
    return value[index]
}

// console.log(getRandomElement(['a', 'b', 'c']))
// console.log(getRandomElement([1, 2, 3]))


function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

// Default Parameter Type
function myFunc<T = number>(): T[] {
    return []
}

const ans = myFunc()

// console.log(merge({ name: 'Sushant' }, { age: 19 }))