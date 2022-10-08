// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(constants);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries;
console.log(countries);

// Destructure the rectangle object by its properties or keys.
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
let {width, height, area, perimeter} = rectangle;
console.log(rectangle);

// Iterate through the users array and get all the keys of the object using destructuring
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]
for (const{name, scores, skills, age} of users){
    console.log(name, scores, skills, age);
}

// Find the persons who have less than two skills
for (const{name, scores, skills, age} of users){
    if (skills.length < 2){
        console.log(name);
    }
}

/* A junior developer structure student name, skills and score in array of arrays 
which may not easy to read. Destructure the following array name to name, skills array to 
skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.*/
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [firstName, skills, scores] = student;
console.log(firstName, skills, scores[2], scores[3])

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const convertArrayToObject = Object.assign({}, students);
// const convertArrayToObject = {...students}
console.log(convertArrayToObject);

// Copy the student object to newStudent without mutating the original object
const _student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent = {..._student};
console.log(newStudent)
