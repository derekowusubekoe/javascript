// Declaration of an Object, using the ES6 approach
const dragon1 = {
    color: "red",
    roar() {
        console.log("The dragon lets out a tremendous roar!");
    }
};
// Using template literal & a Function Expression (Annonymous function)
dragon1.roar = function(){
    console.log(`The ${color} dragon let out a tremendous roar!`);
};
// Calling Method will throw an error because the property "color" needs to be attached to an Object
// dragon1.roar();

// Calling by attaching the Property to the Method
dragon1.roar = function(){
    console.log(`The ${dragon1.color} dragon lets out a tremendous roar!`);
};
dragon1.roar();

const dragon2 = {
    color: "blue",
    roar(){
        console.log(`The ${dragon1.color} dragon lets out a tremendous roar!`);
    }
};

// USING THE "this" KEYWORD
dragon1.roar = function(){
    console.log(`The ${this.color} dragon lets our a tremendous roar!`);
};
dragon1.roar();

dragon2.roar = function(){
    console.log(`The ${this.color} dragon lets out a tremendous roar!`);
};
dragon2.roar();