// Remember, for any class to store default properties, it must have a constructor method.
class Monster{
    constructor(type, color){
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar(){
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
};


// Remake Dragon class, using constructor and parameters
class Dragon extends Monster{
    constructor(type, color, element){
        super(type, color);
        this.element = element;
    }
    fly(){
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begin to fly.`);
    }
}

// Create a Method  from the Dragon Class:
const dragon1 = new Dragon("dragon", "blue", "water");
dragon1.roar();
dragon1.isScary;
dragon1.fly();

// Create child class from the parent Monster
class Werewolf extends Monster{
    constructor(type, color){
        super(type, color);
    }
    howl(){
        console.log(`The ${this.type} howls loudly.`);
    }
}
// Create a new Werewolf object
const werewolf1 = new Werewolf("werewolf", "gray");
werewolf1.roar();
werewolf1.isScary;
werewolf1.howl();