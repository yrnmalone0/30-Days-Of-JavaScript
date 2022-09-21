// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base: ");
let height = prompt("Enter height: ");

// calculating area of a triangle
const areaOfTriangle = (0.5 * base * height);

console.log(`The area of the triangle is ${areaOfTriangle}`);


/* 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle 
(perimeter = a + b + c)*/
let side_a = prompt("Enter side a: ");
let side_b = prompt("Enter side b: ");
let side_c = prompt("Enter side c: ");

// calculating perimeter of triangle
const perimeterOfTriangle = ((+side_a) + (+side_b) + (+side_c));

console.log(`The perimeter of the triangle is ${perimeterOfTriangle}`);


/* 3. Get length and width using prompt and calculate an area of rectangle 
(area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))*/
let length = prompt("Enter length: ");
let width = prompt("Enter width: ");

// calculating area of rectangle
const areaOfRectangle = (length * width);

// calculating perimeter of rectangle
const perimeterOfRectangle = ((+length) + (+width)) * 2;

console.log(`The area of a rectangle is ${areaOfRectangle}`);
console.log(`The perimeter of a rectangle is ${perimeterOfRectangle}`);


/* 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference 
of a circle(c = 2 x pi x r) where pi = 3.14.*/
const pi = 3.14;
let radius = prompt("Enter the radius of the circle: ");

// calculating area of circle
const areaOfCircle = (pi * radius * radius);

// calculating circumference of circle
const circumferenceOfCircle = (2 * pi * radius);

console.log(`The area of a circle is ${areaOfCircle}`);
console.log(`The circumference of a circle is ${circumferenceOfCircle}`);


// 5. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter the hour(s) you worked for: ");
let rate_per_hour = prompt("Enter your rate per hour: ");

// calculating the weekly earnings for the person
const weeklyEarnings = (hours * rate_per_hour);

console.log(`Your weekly earning is ${weeklyEarnings}`);


// If the length of your name is greater than 7 say, your name is long else say your name is short.
let firstname = 'Kwekuuuuo';
let lastname = 'Adams';
console.log(firstname.length);
console.log(lastname.length);
console.log(`Your first name, ${firstname} is longer than your family name, ${lastname}`);


// Declare two variables myAge and yourAge and assign them initial values
let myAge = 21;
let yourAge = 26;


/* 6. Using prompt get the year the user was born and if the user is 18 or above allow the user to 
drive if not tell the user to wait a certain amount of years.*/
let birthYear = prompt("Enter your birth year: ");

// calculating user's age
const _yourAge = (2022 - birthYear);

console.log(`You are ${_yourAge}. You are old enough to drive`);







