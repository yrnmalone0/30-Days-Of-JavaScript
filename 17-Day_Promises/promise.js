let promise = new Promise((resolve, reject) => {
    let myCountry = 'Ghana'
    if (myCountry == 'Ghana'){ 
        resolve('Success')
    } else{
        reject('Error')
    }
})

promise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})

// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
  const fetchData = async () => {
    try {
      const response = await fetch(countriesAPI)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData

//  Print out all the cat names in to catNames variable.
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
fetch(catsAPI)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error(error))
    const fetchInfo = async () => {
      try {
        const res = await fetch(catsAPI)
        const cats = await res.json()
        console.log(cats)
      } catch (err) {
        console.error(err)
      }
    }
    console.log('success')
    fetchInfo
