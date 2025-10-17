let score = "33";


console.log(typeof score);

// convert in Number
let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);

console.log(" ---------- string To Number----------- ");


// convert number string in Number
let scoreString = "33abc";

let scoreStringInNumber = Number(scoreString);
console.log(typeof scoreStringInNumber);    //number
console.log(scoreStringInNumber);           // value is NaN

console.log(" ---------- null string ----------- ");


// convert null in Number
let scoreNull = null;

let scoreNullInNumber = Number(scoreNull);
console.log(typeof scoreNullInNumber);    //number
console.log(scoreNullInNumber);           // value is 0

console.log(" ---------- undefined string ----------- ");

// convert undefined in Number
let scoreUndefined = undefined;

let scoreUndefinedInNumber = Number(scoreUndefined);
console.log(typeof scoreUndefinedInNumber);    //number
console.log(scoreUndefinedInNumber);           // value is NaN

//if we convert below value in Number
// "33" => 33
// "33abc" => NaN
// true => 1 ; false =>0 
// null => 0
// undefined => NaN

console.log(" ---------- convert into boolean ----------- ");

// convert 1 /0 to boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

//if we convert below value in Boolean

// 1 => true 
// 0 => false
// "" => false
// "rishi" => true

console.log(" ---------- convert into String ----------- ");

// convert number to String
let scoreNumber = 33
let stringNumber = String(scoreNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

