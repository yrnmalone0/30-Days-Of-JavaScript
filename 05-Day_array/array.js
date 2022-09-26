// Declare an empty array;
const arr = [];
console.log(arr);

// Declare an array with more than 5 number of elements
const listOfItems = ['Pen', 'Book', 'Shoe', 'Grapes', 'Brush'];
console.log(listOfItems);

// Find the length of your array
console.log(listOfItems.length);

// Get the first item, the middle item and the last item of the array
let firstItem = listOfItems[0];
console.log(firstItem);

let middleItem = listOfItems[2];
console.log(middleItem);

let lastIndex = listOfItems.length - 1;
console.log(listOfItems[lastIndex]);

/* Declare an array called mixedDataTypes, put different data types in 
the array and find the length of the array. The array size should be greater than 5*/
let mixedDataTypes = [1, 'David', 'Ghanaian', true, ];

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);

// Print the first company, middle and last company
let firstCompany = itCompanies[0];
console.log(firstCompany);

let middleCompany = itCompanies[3];
console.log(middleCompany);

lastIndex = itCompanies.length - 1;
console.log(itCompanies[lastIndex]);

// Change each company name to uppercase one by one and print them out
let fb = itCompanies[0];
console.log(fb.toUpperCase());
let ggle = itCompanies[1];
console.log(ggle.toUpperCase());
let ms = itCompanies[2];
console.log(ms.toUpperCase());
let apple = itCompanies[3];
console.log(apple.toUpperCase());
let ibm = itCompanies[4];
console.log(ibm.toUpperCase());
let oracle = itCompanies[5];
console.log(oracle.toUpperCase());
let amazon = itCompanies[6];
console.log(amazon.toUpperCase());

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', '), 'are big IT companies');

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let exits = itCompanies.indexOf('Google');
if (exits === 1){
    console.log(itCompanies[1]);
}
else{
    console.log('Company is not found');
}

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3,7));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,4));

console.log(itCompanies);
// Remove the first IT company from the array
console.log(itCompanies.splice(0,1));

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2,1));

// Remove the last IT company from the array
console.log(itCompanies.pop());

// Remove all IT companies
console.log(itCompanies.splice());

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text);
let newText = text.split(' ');
console.log(newText);
console.log(newText.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());

// minimum age
let minAge = Math.min.apply(null, ages);
console.log(minAge);

// minimum age
let maxAge = Math.max.apply(null, ages);
console.log(maxAge);

// Find the median age(one middle item or two middle items divided by two)
let medianAge = ((ages[4] + ages[5]) / 2);
console.log(medianAge);

// Find the average age(all items divided by number of items)
let averageAge = (ages / ages.length);
console.log(averageAge);