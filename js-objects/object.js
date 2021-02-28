// CREATING OR DECLARATION OF OBJECTS (Use the semi-colon :)
// Creating an Object
const dragon1 = {color: 'red', maxHP: 1000};
// Calling elements in the Object
dragon1['color']
console.log(dragon1.color)
console.log(dragon1.maxHP)

// Declaring an Object with a Method (ES6)
const dragon2 = {
    color: 'green',
    maxHP: 1000,
    roar(){
        console.log('The dragon roar ferociously');
    }
};
// Calling the Method in the Object
dragon2.roar();

// Declaring an Object with a Method (Annonymous Fuction / Function Expression)
const dragon3 = {
    color: 'black',
    maxHP: 2000,
    roar: function(){
        console.log("The dragon roars ferociously");
    }
};
// Calling the Method in the Object
dragon3.roar();
console.log(dragon3['color']);

// UPDATING PROPERTIES & METHODS TO AN OBJECT (Use the assignment operator =)
// Add element to dragon1
dragon1.color = 'crimson';
console.log(dragon1['color']);

// Add new Method or update existing Method (Using Function Expression)
dragon1.attack = function(){
    console.log("The dragon breathes a stream of white-hot flame at you!");
};
// Calling the new Method
dragon1.attack();
console.log(dragon1);

// you can never re-assign the entire value of a constant Object or Array
// dragon1 = {color: 'purple'};

const colors = ["red", "blue", "black"];
// TypeError: Assignment to constant variable.
// colors = ["crimson", "turquoise", "onxy"]; 

// But you can change the items in the Array
colors[0] = "crimson";
colors[1] = "turquoise";
colors[2] = "onxy";
console.log(colors);


// USING PARAMETERS IN METHODS
dragon2.element = "water";

// Adding a Method to the Object with "dir" parameter
dragon2.swim = function(dir){
    console.log(`The dragon swims away to the ${dir}.`);
};

// Adding the parameter
dragon2.swim('north');