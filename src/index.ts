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