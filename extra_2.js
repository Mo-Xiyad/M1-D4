/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

// let revers = a.reverse(a)
// console.log(revers)
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// [1, 2, 3, 4, 5] 
// [5, 2, 3, 4, 1] => sawp 0 and 4 (index)
// [5, 4, 3, 2, 1] => sawp 1 and 3 (index) => i + i, lenght - i - 1
// [1, 2, 3, 4, 5] 

for (let i = 0; i < array.length / 2; i++) {
    let n = array[i] // save var for later
    array[i] = array[array.length - i - 1] // replace the last of arry with the first, then second with the ...
    array[array.length - i - 1] = n
}
console.log(array)

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/
let maxValue = array[0]
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i]
    }
}
console.log(`Max Value is ${maxValue}`)

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

let minValue = array[0]

for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
        minValue = array[i]
    }
}
console.log(`Min Value is ${minValue}`)

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
let evenValue = []

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && array[i] % 2 === 0) {
        evenValue.push(array[i])
    }
}
console.log(evenValue)

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

let arraySix = [2, 8, 10, 12, 45, 87, 15, 4, 56, 4, 1, 5, 9, 457, 12]

for (let i = 0; i < arraySix.length; i++) {
    if (arraySix[i] % 2 === 0) {
        arraySix.splice(i, 1)
        i--
    }
}
console.log(arraySix)