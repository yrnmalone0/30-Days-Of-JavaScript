const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let checkArray = countries.indexOf('Ethiopia');
if (checkArray == 4){
    console.log(countries[4]);
}
else{
    countries.push('Ethiopia')
    console.log(countries);
}
