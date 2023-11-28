/*
const age = 25
console.log(typeof(age))

const age2 = "30"
console.log(typeof(age2))

const age3 = Number("30")
console.log(typeof(age3))

const x = 3
const y = 4
const z = x + y

console.log(z)

let num1 = 10
let num2 = 20
let num3 = "30"
let result = num1 + num2 + num3

console.log(result)

let xx = 100 / "Apple"
console.log(isNaN(xx)) 

*/

/*
Here are some number methods
toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
ValueOf()	Returns a number as a number */



// *********************** Maths in JS *********************


  
// console.log(Math.PI)
/*
const num = 33.33333
console.log(Math.round(num)) // round up the number
console.log(Math.ceil(num)) // give the top value
console.log(Math.floor(num)) // give the lower value
console.log(Math.trunc(num)) // returns the integer part
*/

// console.log(Math.sqrt(64))

// console.log(Math.random())
// console.log(Math.random())
// console.log(Math.random())

// Returning a random integer between two bounds
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(num)
  }
  
random(1, 10)