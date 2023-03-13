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