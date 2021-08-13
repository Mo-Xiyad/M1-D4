/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/
/*
let arrray = [1, 3, 5]
console.log(arrray.reverse())
*/

let array = [1, 2, 3, 4, 5]
// [ 1,2,3,4,5 ] => Swap 0 and 4
// [ 5,2,3,4,1 ] => Swap 1 and 3 -> i+i, lenght - i - 1
// [ 5,4,3,2,1 ]
for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i] //Save var for later
    array[i] = array[array.length - i - 1] //replace the last with the first, then the second with the ...
    array[array.length - i - 1] = temp
}

console.log(array)


/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

arrray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`loggin maximum number`, Math.max(...arrray))


/* EXERCISE 3
Write the code to get the minimum value in an array.
*/
// arrray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`loggin minimum number`, Math.min(...arrray))

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

let numericalValues = []


console.log(typeof numericalValues)

for (let i = 0; i < arrray.length; i++) {
    if (arrray[i] % 2 == 0) {
        console.log(`inside the loop`, arrray[i]);

        numericalValues += arrray[i]
    }
}

console.log(`loggin numerical numbers`, numericalValues)
console.log(typeof numericalValues)

/* EXERCISE 5
Write the code to delete even entries from an array.
*/


/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/



/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/


/* EXERCISE 8
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/