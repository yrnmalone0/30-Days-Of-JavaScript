// create an empty set
const names = new Set();
console.log(names);

// Create a set containing 0 to 10 using loop
const num = new Set();
for (let num = 0; num <= 10; num++){
    console.log(num)
}

// Remove an element from a set
const student = ["Kofi", "Daniel", "Yaw"]
const newStudents = new Set(student);
console.log(newStudents)
console.log(newStudents.delete("Daniel"));
console.log(newStudents.size)

// Clear a set
num.clear;
console.log(num);

// Create a set of 5 string elements from array
const programmingLanguages = ['JavaScript', 'Python', 'C-Language', 'Java', 'C++']
const languages = new Set(programmingLanguages);
console.log(languages);

// Create a map of countries and number of characters of a country
const countries = [['Ghana','Ivory Coast'], ['UK','Spain'], ['Nigeria','Brazil'], ['USA','Portugal']]
const _countires = new Map(countries);
console.log(_countires);


// Find a union b
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c = [...b, ...a]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

// Find a intersection b
// let c = a.filter((num) => B.has(num));
// let C = new Set(c)
// console.log(C)

// How many languages are there in the countries object file.
const countriess = ['Finland', 'Sweden', 'Norway']
const myCountries = new Set(countriess)
console.log(myCountries.size)