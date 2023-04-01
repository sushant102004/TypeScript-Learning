/*
    Data types in TypeScript
    1. any
    2. unknown
    3. never
    4. enum
    5. tuple
    ++ all JS Types.
*/

// TS can automatically identify data type
let userName = 'Sushant'
let age = 19

// Here we had not assined any data type and value so TS will use "any" datatype here.
let none;


////////////////////////////////////////////////////

// Declaring Arrays
let marks: number[] = [56, 78, 96, 34]

// If array is empty then data type will be "any". We should avoid it.
let arr = []

////////////////////////////////////////////////////

// Tuples: - These are fixed length arrays.

let details: [number, string, number, string] = [1, 'Sushant', 19, 'CSE']

// Enum: - List of related constants

const enum TShirtSize {
    Small = 'S',
    Medium = 'M',
    Large = 'L',
    XtraLarge = 'XL'
}

const sushantTShirtSize: TShirtSize = TShirtSize.Medium

////////////////////////////////////////////////////

// Functions

function calculateTax(income: number, taxYear = 2022): number {
    // Tax year is now a optional parameter.
    if (taxYear < 2023 && income < 600000) {
        return 0
    }
    return income * 1.8
}

calculateTax(700_000)


/////////////////////////////////////////////////////

// Objects

let myDetails: {
    readonly rollNo: number,
    name: string,
    department: string,
    resultHistory: (semester: number) => void
} = {
    rollNo: 11212531,
    name: 'Sushant',
    department: 'CSE',
    resultHistory: (semester: number) => {
        console.log(`Semester: ${semester}`)
    }
}

myDetails.resultHistory(2)


// Better way to create objects using type alias

type Student = {
    readonly rollNo: number,
    name: string,
    department: string,
    resultHistory: (semester: number) => void
}

let newStudent: Student = {
    rollNo: 11212534,
    name: 'Kunal',
    department: 'CSE',
    resultHistory: (semester: number) => {
        console.log(`Semester: ${semester}`)
    }
}


// Union - When we want to pass more than one type of argument in a function

function kgToPound(weight: number | string): number {
    if (typeof weight === 'number'){
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

///////////////////////////////////////////////////////////

// Classes

class StudentClass {
    rollNo: number
    name: string
    department: string

    constructor(rollNo: number, name: string, department: string) {
        this.rollNo = rollNo
        this.name = name
        this.department = department
    }

    resultHistory(sem: number) {
        console.log(`Semester: ${sem}`)
    }
}

const vishal = new StudentClass(11212525, 'Vishal Sharma', 'B.Tech CSE')
console.log(vishal)