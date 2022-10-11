const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, undefined, 4)
    console.log(usersObj)

    const users = {
        Alex: {
          email: 'alex@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript'],
          age: 20,
          isLoggedIn: false,
          points: 30
        },
        Asab: {
          email: 'asab@asab.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 25,
          isLoggedIn: false,
          points: 50
        },
        Brook: {
          email: 'daniel@daniel.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
          age: 30,
          isLoggedIn: true,
          points: 50
        },
        Daniel: {
          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        John: {
          email: 'john@john.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
          age: 20,
          isLoggedIn: true,
          points: 50
        },
        Thomas: {
          email: 'thomas@thomas.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          age: 20,
          isLoggedIn: false,
          points: 40
        },
        Paul: {
          email: 'paul@paul.com',
          skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
          ],
          age: 20,
          isLoggedIn: false,
          points: 40
        }
      }
      
      const txt = JSON.stringify(users, undefined, 4)
      console.log(txt)

      // Change skills array to JSON using JSON.stringify()
      const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
      const newSkills =JSON.stringify(skills, undefined, 4)
      console.log(newSkills)

      // Stringify the age variable
      let age = 250;
      const myNewAge = JSON.stringify(age)
      console.log(myNewAge)

      // Stringify the isMarried variable
      let isMarried = true
      let marriageDetail = JSON.stringify(isMarried)
      console.log(marriageDetail)

      // Stringify the student object
      const student = {
        firstName:'Asabeneh',
        lastName:'Yetayehe',
        age:250,
        isMarried:true,
        skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
      }
      const studentInfo = JSON.stringify(student, undefined, 4)
      console.log(studentInfo);

    // Stringify the students object with only firstName, lastName and skills properties
    const newStudentInfo = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4);
    console.log(newStudentInfo);

    // Parse the text JSON to object.
    const text = `{
        "Alex": {
            "email": "alex@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 30
        },
        "Asab": {
            "email": "asab@asab.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Redux",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 25,
            "isLoggedIn": false,
            "points": 50
        },
        "Brook": {
            "email": "daniel@daniel.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux"
            ],
            "age": 30,
            "isLoggedIn": true,
            "points": 50
        },
        "Daniel": {
            "email": "daniel@alex.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "Python"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "John": {
            "email": "john@john.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Redux",
                "Node.js"
            ],
            "age": 20,
            "isLoggedIn": true,
            "points": 50
        },
        "Thomas": {
            "email": "thomas@thomas.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        },
        "Paul": {
            "email": "paul@paul.com",
            "skills": [
                "HTML",
                "CSS",
                "JavaScript",
                "MongoDB",
                "Express",
                "React",
                "Node"
            ],
            "age": 20,
            "isLoggedIn": false,
            "points": 40
        }
    }
    `
    const objectText = JSON.parse(text, undefined, 4);
    console.log(objectText);
