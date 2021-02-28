// CLASS INHERITANCE
// We can create classes based on parent classes
class Monster{
    roar(){
        console.log("The monster lets out a tremendous roar");
    }
};

// Create a child class, Dragon. We use the "extend" keyword
class Dragon extends Monster{
    fly(){
        console.log("The dragon flaps its wings and begins to fly.");
    }
}
// Create a new dragon from the Dragon class
// Child classes automatically inherit the methods of their parent class, but not vice versa.
const dragon1 = new Dragon();

console.log(dragon1.roar());
console.log(dragon1.fly());

