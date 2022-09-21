/* Declare firstName, lastName, country, city, age, isMarried, year variable and 
assign value to it and use the typeof operator to check different data types.*/
let firstName = 'Obed';
console.log(typeof(firstName));

let lastName = 'Badu';
console.log(typeof(lastName));

const country = 'Ghana';
console.log(typeof(country));

let city = 'Accra';
console.log(typeof(city));

let age = 21;
console.log(typeof(age));

let isMarried = false;
console.log(typeof(isMarried));

let year = 2022;
console.log(typeof(year));

// Check if type of '10' is equal to 10
console.log(typeof('10'));

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8'));

// Write three JavaScript statement which provide truthy value.
let name = `Adwoa`;
const brightness = true;
let score = 81;

// Write three JavaScript statement which provide falsy value.
let gender;
const darkness = false;
let space = '';

/* Figure out the result of the following comparison expression first 
without using console.log(). After you decide the result confirm it using console.log()*/
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 !== '4');
console.log(4 === '4');

// Find the length of python and jargon and make a falsy comparison statement.
let language1 = 'python';
let language2 = 'jargon';
console.log(language1.length);
console.log(language2.length);
console.log(language1===language2);

/* Figure out the result of the following comparison expression first 
without using console.log(). After you decide the result confirm it using console.log()*/
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

// There is no 'on' in both dragon and python
console.log(language1.includes('on'));
console.log(language2.includes('on'));


