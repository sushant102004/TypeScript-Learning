let age : number | string

age = 19
age = '19'


const isTeenager = (age : number | string) : void => {
    if(typeof age === 'string') {
        console.log(age.charAt(0) === '1')
    }
    

    if(typeof age === 'number') {
        console.log(age > 12 && age < 20)
    }
}

isTeenager('23')
isTeenager(19)


const stuff : (number | string)[] = [1, 2, 'Sushant']

// Literal Union Types

const giveAnswer = (answer : 'yes' | 'no') : void => {
    console.log(`Answer: ${answer}`)
}

giveAnswer('yes')