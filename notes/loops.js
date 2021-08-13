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