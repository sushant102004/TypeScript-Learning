const describePerson = (person: {
    name: string,
    age: number,
    parentsName: {
        mom: string,
        dad: string
    }
}) => {
    return `Person: ${person.name}
    Age: ${person.age}
    Parents: ${person.parentsName.mom} & ${person.parentsName.dad}`
}

const John = {
    name: 'John Maverik',
    age: 19,
    parentsName: {
        mom: 'Maria',
        dad: 'Hooper'
    }
}

console.log(describePerson(John))