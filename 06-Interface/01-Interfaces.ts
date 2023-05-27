interface StudentInterface {
    readonly id: number
    name: string
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
    course: 'B.Tech CSE',
    isFeePaid: false,
    phoneNumber: 8813961989,
    calculateScholarship(percentage : number) {
        return percentage > 80 ? 40 : 30
    }
}


console.log(sushant.calculateScholarship(74))