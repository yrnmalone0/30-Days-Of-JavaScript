// Create an empty object called dog
// Print the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo
let dog = {
    name: 'Dade',
    legs: 4,
    color: 'dark',
    age: 'Four years old',
    bark: 'woof woof'
}
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog["color"]);
console.log(dog["age"]);
console.log(dog["bark"]);

dog.breed = 'Rottwieler';
dog.getDogInfo = function(){
    return `My name is ${this.name} and I am ${this.age}, I have ${this.legs} legs and ${this.color} in complexion.`;
}
console.log(dog.getDogInfo());




