// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs){
    // console.log(this)
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
   } 
   getFullInfo(){
    const fullInfo = `My name is ${this.name} and I am ${this.age} years of age.`
    return fullInfo;
   }   
}
const newAnimal = new Animal('Slider', 5, 'white', 4)     
console.log(newAnimal)
console.log(newAnimal.getFullInfo())

// Create a Dog and Cat child class from the Animal Class.
// Override the method you create in Animal class
class Dog extends Animal {
    constructor(name, age, color, legs) {
        super(name, age, color, legs);
    }
}
const childDog = new Dog('Dade', 4, 'black', 4);
console.log(childDog)

class Cat extends Animal{
    constructor(name, age, color, legs, sex) {
        super(name, age, color, legs);
        this.sex = sex;
    }
}
let childCat = new Cat('Miaooo', 2, 'white-brown', 4, 'female');
console.log(childCat)





