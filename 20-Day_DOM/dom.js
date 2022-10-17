// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p')
console.log(firstParagraph)

// Get each of the the paragraph using document.querySelector('#id') and by their id
const theFirstParagraph = document.querySelector('#firsty')
const theSecondParagraph = document.querySelector('#secondy')
const theThirdParagraph = document.querySelector('#thirdy')
const theFourthParagraph = document.querySelector('#fourthy')
console.log(theFirstParagraph)
console.log(theSecondParagraph)
console.log(theThirdParagraph)
console.log(theFourthParagraph)

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const selectAllParagraph = document.querySelectorAll('p')
console.log(selectAllParagraph)

// Loop through the nodeList and get the text content of each paragraph
console.log(selectAllParagraph.length)
for (let i = 0; i < selectAllParagraph.length; i++){
    console.log(selectAllParagraph[i])
}

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const allParagraph = document.querySelectorAll('p')
allParagraph[3].textContent = '4th Paragraph'
console.log(allParagraph)

// Set id and class attribute for all the paragraphs using different attribute setting methods
const paragraphOne = document.querySelector('#firsty')
paragraphOne.setAttribute('class', 'firstClass')
paragraphOne.setAttribute('id', 'firstId')

const paragraphTwo = document.querySelector('#secondy')
paragraphTwo.setAttribute('class', 'secondClass')
paragraphTwo.setAttribute('id', 'secondId')

const paragraphThree = document.querySelector('#thirdy')
paragraphThree.setAttribute('class', 'thirdClass')
paragraphThree.setAttribute('id', 'thirdId')

const paragraphFour = document.querySelector('#fourthy')
paragraphFour.setAttribute('class', 'fourthClass')
paragraphFour.setAttribute('id', 'fourthId')

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const myStyle = document.querySelectorAll('p')
for (i = 0; i < myStyle.length; i++){
  myStyle[i].style.fontSize = '50px'
}
console.log(myStyle)

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
const theStyle = document.querySelectorAll('p')
theStyle.forEach((p, i) => {
  if (i % 2 === 0) {
    p.style.color = 'green'
  } else {
    p.style.color = 'red'
  }
})

