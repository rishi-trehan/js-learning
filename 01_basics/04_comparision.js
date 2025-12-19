console.log(null > 0);   // false ; comparision convert null to number treating it as 0
console.log(null == 0);  // false
console.log(null >= 0);  // true

console.log(undefined > 0);   // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false

console.log("=== vs == ")
console.log("2" == 2);      // true ; first it will convert "2" in number then it compare.
console.log("2" === 2);     // false; because one is a number and the other is a string.