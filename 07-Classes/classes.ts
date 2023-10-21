class Person {
    constructor(public age: number, gender: string) { }
}


class Player extends Person {
    first: string
    last: string

    private ranking: number = 0

    constructor(first: string, last: string, age: number, gender: string) {
        super(age, gender)
        this.first = first
        this.last = last
    }


    static greet(name: string): string {
        return `Hello ${name}`
    }

    set increaseRanking(value: number) {
        this.ranking += value
    }

    get getRanking() {
        return this.ranking
    }
}


const mike = new Player('Sushant', 'Dhiman', 19, 'Male')

console.log(Player.greet('Sushant'))
console.log(mike.getRanking)
mike.increaseRanking = 10
console.log(mike.getRanking)