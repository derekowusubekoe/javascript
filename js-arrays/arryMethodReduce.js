const arr1 = [3, 4, 13, 8, 22];
const reducedValue = arr1.reduce((a, c) => a + c);

/*
The array method reduce, like map and filter, iterates over every item in the array upon which it is called and applies a callback function to each item. 
Unlike map and filter, however, reduce does not return an array. It returns a single value.
*/
/*
With reduce, at least two parameters are used in the callback. Here, they are named a and c, to stand for accumulator and currentValue. 
The currentValue is like the parameters used in the map and filter methods - it holds the value of the array item at the current iteration.
The accumulator is a variable whose value gets updated at each iteration, and at the end of all iterations, it is the final value that is returned as the return value for the entire reduce method.
There is an optional third value that could have been used here to set the initial value of the accumulator, but we have not used it in this example.
When an initial value is not set with that optional third value, then at the first iteration, the accumulator is set to be equal to the first value in the array, and currentValue is set to be equal to the second.
That means at the first iteration in our above example, the accumulator is set to 3, and the currentValue is set to 4. 
Then the method body says: a + c and the accumulator value is set to the result of this operation.
This means that at the end of the first iteration, a is equal to 3 + 4, that is, 7.
*/