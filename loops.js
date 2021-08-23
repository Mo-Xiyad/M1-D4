console.log("\n--------------< WHILE >--------------")

// WHILE will execute the block if code AS LONG as the CONDITION is true

let currentIteration = 1
let numberOfIterationsToRun = 4
while (currentIteration <= numberOfIterationsToRun) {
    // Single iteration
    console.log(`We are running this code several times. This is the iteration number ${currentIteration}`)
    // currentIteration = currentIteration + 1
    // currentIteration += 1
    currentIteration++
}

currentIteration = 1

console.log("\n--------------< DO WHILE >--------------")

// Identical to WHILE, but it will perform the check AT THE END of every single iteration (not at the beginning)
// That's why the code block is always executed AT LEAST ONCE

do {
    console.log(`We are running this code several times. This is the iteration number ${currentIteration}`)
    currentIteration++
} while (currentIteration <= numberOfIterationsToRun)


console.log("\n--------------< FOR >--------------")

// FOR is especially useful for performing some code a FIXED AMOUNT of times

for (let currentIteration = 1; currentIteration <= numberOfIterationsToRun; currentIteration++) {
    console.log(`We are running this code several times. This is the iteration number ${currentIteration}`)
}

console.log("\n--------------< FOR (USUAL WAY) >--------------")

for (let i = 0; i < 4; i++) {
    console.log(`We are running this code several times. This is the iteration number ${i}`)
}

console.log("\n--------------< ENUMERATING AN ARRAY >--------------")
let listOfColors = ["Red", "Pink", "Orange", "Yellow", "Green", "Blue", "Violet"]

for (let i = 0; i < listOfColors.length; i++) {
    console.log(`Color at index ${i} is ${listOfColors[i]}`)
}


console.log("\n--------------< ENUMERATING AN ARRAY (SIMPLER ALTERNATIVE) >--------------")
// this is EXACTLY identical to the alternative above, it's just hiding the iteration variable 'i'
// (I won't be able to access 'i')

for (let color of listOfColors) {
    console.log(color)
}

// REMEMBER: this is FOR-OF
// !!!NOT!!! FOR-IN
// for-in exists as well, but it's an older alternative, quite buggy
// DO NOT USE FOR-IN, it's a nasty guy

let arrayOfOrders = [
    { id: "A123456", product: "Wireless Keyboard", quantity: 1 },
    { id: "A123845", product: "Red Bull 500ml", quantity: 10 },
    { id: "A121112", product: "HD Webcam", quantity: 1 }
]

let orderDescriptions = []
for (let order of arrayOfOrders) {
    order.quantity++
    orderDescriptions.push(`Order #${order.id} is called ${order.product} (${order.quantity})`)
}
console.log(orderDescriptions)

let arrayOfNumbers = [3, 6, 9, 12, 15]
for (let number of arrayOfNumbers) {
    console.log("Number", number)
}