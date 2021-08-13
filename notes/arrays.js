console.log("\n--------------< ARRAYS >--------------")

let arrayOfNumbers = [3, 6, 9, 12, 15]
console.log("Multiples of 3:", arrayOfNumbers)

let arrayOfStrings = [
    "Dog",
    "Cat",
    "Mouse",
    "Llama",
    "Llama", // Arrays can hold duplicated elements as well
    "Duck",
    "Alligator"
]

let arrayOfBooleans = [true, false, false, true]

let lastOrder = { id: "A1999007", product: "Samsung Galaxy Fold 2" }
lastOrder.quantity = 3

let arrayOfOrders = [
    { id: "A123456", product: "Wireless Keyboard", quantity: 1 },
    { id: "A123845", product: "Red Bull 500ml", quantity: 10 },
    { id: "A121112", product: "HD Webcam", quantity: 1 },
    lastOrder
]

console.log(arrayOfOrders)

let mixedArray = [34, "Monkey", -23.6, false, {}] // AVOID MIXING DIFFERENT DATA TYPES in the same array UNLESS you absolutely need that


console.log("\n--------------< LENGTH OF AN ARRAY >--------------")
console.log(`Our array of animals has ${arrayOfStrings.length} animals`)


console.log("\n--------------< ACCESS THE CONTENT OF AN ARRAY >--------------")
let smallNumbers = [7, 3, 2, 0, 9] // Zero-based indexing
// index:    0  1  2  3  4 

let thirdElement = smallNumbers[2]
console.log("The third element is", thirdElement)
console.log("The QUANTITY for the second order is", arrayOfOrders[1].quantity)
let lastIndexOfStrings = arrayOfStrings.length - 1
console.log("The last animal is", arrayOfStrings[lastIndexOfStrings])


console.log("\n--------------< CONCATENATING ARRAYS >--------------")
console.log("Multiples of 3", arrayOfNumbers)
console.log("Small numbers", smallNumbers)

let union = arrayOfNumbers.concat(smallNumbers)
console.log("Union:", union)


console.log("\n--------------< PUSH AN ITEM AT THE END >--------------")
union.push(3.14)
console.log("Union after pushing 3.14:", union)

console.log("\n--------------< REMOVE THE LAST ELEMENT >--------------")
let removedItem = union.pop()
console.log("Union after removing the last one:", union)
console.log("The removed item was", removedItem)

console.log("\n--------------< LOOK FOR THE INDEX OF AN ELEMENT >--------------")
let indexOfMouse = arrayOfStrings.indexOf("Mouse")
console.log("The index of 'Mouse' is", indexOfMouse)

let indexOfDeer = arrayOfStrings.indexOf("Deer")
console.log("The index of 'Deer' is", indexOfDeer)

let indexOfLlama = arrayOfStrings.indexOf("Llama")
console.log("The index of 'Llama' is", indexOfLlama)

let indexOfSeven = union.indexOf(7)
console.log("The index of '7' is", indexOfSeven)

console.log("\n--------------< NESTED ARRAYS >--------------")
let nestedArray = [
    [1, 2, 3, 4],
    [2, 4, 6, 8],
    ["Dog", "Cat"] // I would advise AGAINST mixing different data types AND lenghts
]

console.log(nestedArray)
console.log("The third element of the second array is", nestedArray[1][2])