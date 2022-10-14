// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName','Dwayne')
localStorage.setItem('lastName', 'Mensah')
localStorage.setItem('age', 22)
localStorage.setItem('country', 'United Kingdom')
localStorage.setItem('city', 'London')
console.log(localStorage)

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    _firstName: 'Kobby',
    _lastName: 'Brown',
    _age: 25,
    _skills: ['coding', 'programming'],
    _country: 'United Kingdom'
}
const newStudent = JSON.stringify(student)
localStorage.setItem('student', newStudent)

