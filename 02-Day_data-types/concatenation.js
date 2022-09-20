console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof('10'));
let num = '10';
let intNum = parseInt(num);
console.log(intNum);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8'));
console.log(Math.round(9.8));

// Check if 'on' is found in both python and jargon
let string1 = 'python';
let string2 = 'jargon';
console.log(string1.includes('on'));
console.log(string2.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'));

// Generate a random number between 0 and 100 inclusively.
const randomNumber = Math.floor(Math.random () * 101);
console.log(randomNumber);

// Generate a random number between 50 and 100 inclusively.
const _randomNumber = Math.floor(Math.random () * 100) + 50;
console.log(_randomNumber);

// Generate a random number between 0 and 255 inclusively.
const $randomNumber = Math.floor(Math.random () * 256);
console.log($randomNumber);

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');

// Count the number of word love in this sentence.
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(loveSentence.match('love'));