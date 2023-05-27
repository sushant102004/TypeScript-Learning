interface Person {
    name: string,
    age: number,
    gender: string
}


interface StudentInterface extends Person {
    readonly id: number
    course: string
    isFeePaid: boolean
    phoneNumber: number
    secondaryNumber?: number
}

interface StudentInterface {
    calculateScholarship(percentage: number) : number
}



const sushant: StudentInterface = {
    id: 11212531,
    name: 'Sushant Dhiman',
    age: 19,
    gender: 'Male',
    course: 'B.Tech CSE',
    isFeePaid: false,
    phoneNumber: 8813961989,
    calculateScholarship(percentage : number) {
        return percentage > 80 ? 40 : 30
    }
}


console.log(sushant)
console.log(sushant.calculateScholarship(74))