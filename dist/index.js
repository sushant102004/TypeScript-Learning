"use strict";
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
let userName = 'Sushant';
let age = 19;
// Here we had not assined any data type and value so TS will use "any" datatype here.
let none;
////////////////////////////////////////////////////
// Declaring Arrays
let marks = [56, 78, 96, 34];
// If array is empty then data type will be "any". We should avoid it.
let arr = [];
////////////////////////////////////////////////////
// Tuples: - These are fixed length arrays.
let details = [1, 'Sushant', 19, 'CSE'];
const sushantTShirtSize = "M" /* TShirtSize.Medium */;
////////////////////////////////////////////////////
// Functions
function calculateTax(income, taxYear = 2022) {
    // Tax year is now a optional parameter.
    if (taxYear < 2023 && income < 600000) {
        return 0;
    }
    return income * 1.8;
}
calculateTax(700000);
//# sourceMappingURL=index.js.map