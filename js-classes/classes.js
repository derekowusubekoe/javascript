// CREATING A CLASS (USE "class" KEYWORD)
// Use a "constructor" which is a CLASS Method that accept the default properties (color, maxHP)
// Take Arguments that ara passed into the parameter list and set them as properties of objects made in the class
class Dragon{

// CLASS CONSTRUCTORS AND PROPERTIES
    constructor(color, maxHP){
        this.color = color;
        this.maxHP = maxHP;
    }
};

// CLASS INSTANCES AND THE NEW KEYWORD
// Use the "new" keyword to make create new objects
const dragon1 = new Dragon("red", 1200); //instance of the dragon class
const dragon2 = new Dragon("blue", 1100); //instance of the dragon class

// Calling the properties of the Ojects
console.log(dragon1);
console.log(dragon2);

// the new keyword creates the object and passes the argument value int the Class Constructor and they become the Properties of the new Object through assigning them as values of this dot (this.property) name