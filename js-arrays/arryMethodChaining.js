/*
Method chaining means that you can run multiple methods in a single statement, by the use of their return values.
Methods must have return values in order to be chained - at least, the method that is being chained to.

*/
// Map, filter, and reduce do all have return values by default. Not all array methods have return values.
const states = ['Washington', 'Maine', 'Montana'];

// To create a new array and filter out only states that begin with M
const mStates = states.map(state => state[0] === "M")

// We can go through and change every state name in this new array to being all upper case using a map method on the mStates variable:
console.log(mStates);
const mStatesUpperCased = mStates.map(state => state.toUpperCase());

//However, we can also do the exact same thing as we did in two steps above but using a single step, with the help of method chaining:
const mapStateUpperCased2 = states.filter(state => state[0] === "M").map(state.toUpperCase());