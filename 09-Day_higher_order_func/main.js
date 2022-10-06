let sum = 0;
const _numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => sum += num)
_numbers.forEach(function(_numbers){
    sum += _numbers;
})
console.log(sum)


const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users)

// Define a callback function before you use it in forEach, map, filter or reduce.
function callback (){
    console.log("Hello world");
}

// Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach(function(countries){
    console.log(countries);
})

// Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach((names) => {
    console.log(names);
})

// Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((numbers) => {
    console.log(numbers);
})

// Use map to create a new array by changing each country to uppercase in the countries array.
const newArrayUppercase = countries.map((countries) => countries.toUpperCase())
console.log(newArrayUppercase);

// Use map to create a new array by changing each number to square in the numbers array
const numSquare = numbers.map((numbers) => numbers * numbers)
console.log(numSquare);

// Use filter to filter out countries containing land.
let countryWithLand = countries.filter((countries) => countries.includes("land"))
console.log(countryWithLand);

// Use filter to filter out only prices with values.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
const filterPrices = products.filter((price) => price.price)
console.log(filterPrices)

// Use reduce to sum all the numbers in the numbers array.
const sumNum = numbers.reduce(function(total, num){
    return total + num;
}, 0)
console.log(sumNum)


