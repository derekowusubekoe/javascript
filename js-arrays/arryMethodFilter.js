/* 
The array method filter takes an array and a callback function that specifies a filtering condition, iterates through the array, and returns a new array that contains only the items that passed through the filter. 
*/
const arr1 = [1, 3, 7, 4, 9, 15];

/* If you wanted to filter out only the items from this array that are less than 7, you could do this with a for loop or forEach.*/

const arr2 = arr1.filter(n => n < 7);
console.log(arr1); // [ 1, 3, 7, 4, 9, 15 ]
console.log(arr2); // [1, 3, 4]

/*
At each iteration, it will assign that item to the value of the first parameter in a callback function, then check the filtering condition inside the function body, in this case, n < 7.
If the result is true, then it will place that item inside a new array. If the result is false, it will not.
At the end, when it has iterated through every item in the array on which it was called, it will return a new array composed of the items that passed the filtering condition. 
This is a major difference from the map method, which always returns an array that is of the same size as the original array.
Filter does not always return an array of the same size (though it can, if all items pass the filtering condition).

*/
const animals = ['bear', 'panda', 'penguin', 'osprey'];
const filteredAnimals = animals.filter(animal => animal.includes('p'));
console.log(filteredAnimals);