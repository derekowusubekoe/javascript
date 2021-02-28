/*
The right-side operands for each of the assignment operators above, the curly braces with the object properties inside them, are called object literals. Remember we talked about literals versus variables before? 
So this is just the literal value of the object, just as the number 23 is a numeric literal, or a string like "Hello World" is a string literal, and [1, 2, 3] is an array literal. 
When storing objects inside an array, you will typically use the object literal, without assigning each to a variable name. 
*/
const desserts = [
    {
        id: 0,
        type: "cake",
        flavor: "chocolate",
        cost: 4.50
    },
    {
        id: 1,
        type: "pie",
        flavor: "pumpkin",
        cost: 3.75
    },
    {
        id: 2,
        type: "donut",
        flavor: "chocolate",
        cost: 1.50
    }
];

/*
It's common practice to give each object in an array of objects a unique ID as one of its properties. That way, even if the order of the array gets moved around somehow (for example, by a shift() or unshift() method being applied to it), each object still has a unique identifier that stays constant.
*/

// to filter for a new array that only has the chocolate-flavored dessert items
const chocDesserts2 = desserts.filter(dessert => dessert.flavor === "chocolate");
console.log(chocDesserts2);


//use reduce to total up the cost of every dessert object in the array
const totalCost = desserts.reduce((total, dessert) => total + dessert.cost, 0);
/*
To set an initial value for reduce, we used a comma at the end of the callback function, followed by the initial value -- in this case, 0. 
*/