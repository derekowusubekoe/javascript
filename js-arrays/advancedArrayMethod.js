const arr1 = [3, 4, 2, 1];
console.log(arr1.sort());
arr1;

/* METHOD
A Mehod is a fucntion that is never called by itself. It is always called using the dot notation on some kind of data
*/

/* ARRAY METHODS
It is possible to pass a function into another function as an argument. 
1 - Higher Order Functions
A function that takes another function as an argument, or returns a function as a return value.

2 - Callback Functions
A Callback function that's passed into a higher order function as an argument, then used inside it (call back).
*/

/* 
Advanced Array Methods
- Map
- Filter
- Reduce

* These are higher order functions, each take a callback function as an argument.
* They are defined by the programmer and is in the form of an arrow function.
* Non of these Methods are mutator methods and they do not change the original array
* They can be classified as iteration methods - they iterate through the array as many times as the array length.
* They all have return values - not all array methods do
* map and filter both return a new array
* reduce returns a single value, not an array

Advance Array Method: Map
Iterates through an array and performs a given callback function on every item in the array

*/

// Using the for loop approach
const arr2 = [5, 21, 8, 100];
const arr3 = [];
for(let i = 0; i < arr2.length; i++){
    arr3[i] = arr2[i] * 2;
}
console.log(arr3);

// Using the forEach and Arrow function approach
const arr4 = [];
arr2.forEach((n, i) => {arr4[i] = n * 2;});
arr4;

// Using the array method: map
const arr5 = arr2.map(n => n * 2);
arr5;