// In JavaScript, it is possible to call a function without passing in an argument for every parameter. 
// If you do not pass in an argument for that parameter, it will by default be set to the value of undefined.
// For example, if you typed in this function into your developer console:

function logSum(a, b){
    console.log(a + b);
}
logSum(2);

function logSum(a = 0, b = 0){
    console.log(a + b);
}
logSum(2, 3);
logSum(0);

// Default function parameters are very useful in class constructors. Example:
class Cat {
    constructor(name, color = "gray"){
        this.name = name;
        this.color = color;
    }
    meow(){
        console.log(`The ${this.color} cat named ${this.name} meows.`)
    }
}
const ray = new Cat("Ray");
ray.meow();

const pat = new Cat("Pat", "black");

pat.meow();