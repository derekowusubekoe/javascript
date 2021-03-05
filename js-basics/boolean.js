// The boolean has only two values: true and flase
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

let nameFieldChecked = true;
let ageFieldChecked = false;

console.log(nameFieldChecked)
console.log(ageFieldChecked)

let isGreat = 4 > 1;
console.log(isGreat);

let age = null;
console.log(age)
/* 
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
It’s just a special value which represents “nothing”, “empty” or “value unknown”.
The code above states that age is unknown.
*/

let age2;
console.log(age2)

/* 
The meaning of undefined is “value is not assigned”.
If a variable is declared, but not assigned, then its value is undefined
*/

typeof undefined