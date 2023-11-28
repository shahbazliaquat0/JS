let myArr = [1, 2, 3, 4]
// console.log(myArr)
// console.log(myArr[2]) //indexing 

// console.log(myArr.pop())
// console.log(myArr)

// console.log(myArr.push(5))
// console.log(myArr)

// console.log(myArr.slice(1))
// console.log(myArr.toString())
// console.log(typeof(myArr))


// console.log(myArr.splice(0,2))

const fruits = ["banana", "apple", "peach"]
// fruits.push(5)
// console.log(fruits)
// console.log(fruits.length)

// ****************** Here are arrays methods ************************************

/*


Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()

*/

const arr1 = ["Shahbaz","Shahzad","Hamza"]
const arr2 = ["Ali","Umar","Muzamil"]

const arr3 = [...arr1, ...arr2] // this is spread method to concatnate two arryas
console.log(arr3)

let num1 = 100;
let num2 = 200;
let num3 = 300;

console.log(Array.of(num1, num2, num3));