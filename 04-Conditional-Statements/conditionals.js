/* 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/

let yourAge = prompt("Enter your age: ");
if (yourAge >= 18){
    console.log(`You're ${yourAge} years old and you're old enough to drive.`);
}
else{
    const _age = (18 - yourAge);
    console.log(`You're left with ${_age} years to drive.`);
}

/* 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log 
the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/

let myAge = prompt("Enter my age: ");
let _yourAge = prompt("Enter your age: ");

const newAge = (myAge - _yourAge);
const newAge2 = (_yourAge - myAge);

if (myAge > _yourAge){
    console.log(`I am ${newAge} years older than you`);
}
else{
    console.log(`You are ${newAge2} years older than me`);
}

/* 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
using if else
ternary operator.*/
let a = prompt("Enter the value for a: ");
let b = prompt("Enter the value for b: ");
if (a > b){
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${b} is greater than ${a}`);
}

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let num = prompt("Enter a number: ");

if (num % 2 == 0){
    console.log(`${num} is an even number`);
}
else{
    console.log(`${num} is an odd number`);
}

/* 5. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/
let score = prompt("Enter your score: ");
if (score >= 80 && score <= 100 ){
    console.log(`You achieved grade A`);
}else if(score >= 70 && score <= 79){
    console.log(`You achieved grade B`);
}else if(score >= 60 && score <= 69){
    console.log(`You achieved grade C`);
}else if(score >= 50 && score <= 59){
    console.log(`You achieved grade D`);
}else{
    console.log(`You achieved grade F`);
}

/* 6. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/
let month = prompt("Enter month: ");

if (month == 'September' || month == 'October' || month == 'November'){
    console.log("The season is Autumn");
}else if (month == 'December' || month == 'January' || month == 'February'){
    console.log("The season is Winter");
}else if (month == 'March' || month == 'April' || month == 'May'){
    console.log("The season is Spring");
}else{
    console.log("The season is summer");
}

// 7. Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('What day is today? ');

switch (day){
    case "Sunday":
        console.log(`${day} is a weekend`);
        break;
    case "Monday":
        console.log(`${day} is a working day`);
        break;
    case "Tuesday":
        console.log(`${day} is a working day`);
        break;
    case "Wednesday":
        console.log(`${day} is a working day`);
        break;
    case "Thursday":
        console.log(`${day} is a working day`);
        break;
    case "Friday":
        console.log(`${day} is a working day`);
        break;
    case "Tuesday":
        console.log(`${day} is a weekend`);
        break;
}

// 8. Write a program which tells the number of days in a month.
let _month = prompt('Enter a month: ')

switch (_month){
    case 'January':
        console.log(`${_month} has 31 days.`);
        break;
    case 'February':
        console.log(`${_month} has 28/29 days.`);
        break;
    case 'March':
        console.log(`${_month} has 31 days.`);
        break;
    case 'April':
        console.log(`${_month} has 30 days.`);
        break;
    case 'May':
        console.log(`${_month} has 31 days.`);
        break;
    case 'June':
        console.log(`${_month} has 30 days.`);
        break;
    case 'July':
        console.log(`${_month} has 31 days.`);
        break;
    case 'August':
        console.log(`${_month} has 31 days.`);
        break;
    case 'September':
        console.log(`${_month} has 30 days.`);
        break;
    case 'October':
        console.log(`${_month} has 31 days.`);
        break;
    case 'November':
        console.log(`${_month} has 30 days.`);
        break;
    case 'December':
        console.log(`${_month} has 31 days.`);
        break;
}