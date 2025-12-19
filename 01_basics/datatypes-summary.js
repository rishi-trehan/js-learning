//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;          // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];

//Objects
let myObj = {
    name: "hitesh",
    age: 22,
}

//Function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ******************

// Stack (Primitive), Heap (Non-Primitive)
let companyName="nucleus"

let anotherCompanyName = companyName

anotherCompanyName =  "sopra"

console.log(companyName);

console.log(anotherCompanyName);

let userOne = {
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);
