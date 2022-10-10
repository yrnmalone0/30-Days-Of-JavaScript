// declaring and initializing a pattern without flag
let pattern = 'Dylis4life'
let result = new RegExp(pattern)

// declaring and initializing a pattern with flag
let _pattern = 'blackberry'
let flag = 'gi'
let _result = new RegExp(_pattern, flag)

// declaring and initializing a pattern with RegExp constructor
let $pattern = new RegExp("daddy", "gi")

// declaring and initializing a pattern with two forward slash
let regex = /head/gi

// Regular Expression object methods (test, match, search, replace)
const sentence = "Practicing coding every eveening"
// let searchPattern = /coding/
const searchPattern = new RegExp('coding')
const myResult = searchPattern.test(sentence)
window.alert(myResult)

const sent = "Practicing coding every eveening"
// let searchPattern = /coding/
const _searchPattern = new RegExp('coding','gi')
const ourResult = sent.match(_searchPattern)
console.log(ourResult)

const senten = 'I enjoy js'
const patternn = /enjoy/g
const theResult = senten.search(patternn)
console.log(theResult)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
const matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)

const ppattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const _txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = _txt.match(ppattern)
console.log(matches)  

const text = 'This regular expression example was made in December 6,  2019.'
const thepattern = /^This/ // ^ means starts with
const match = text.match(thepattern)
console.log(match)

/*Calculate the total annual income of the person from the following text. 
‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’*/
const info = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const salaryPattern = /\d{5}/g
const finalans = info.match(salaryPattern)
console.log(finalans)
