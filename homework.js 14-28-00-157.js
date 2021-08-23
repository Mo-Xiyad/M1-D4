/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/
console.log(`------------------ EXERCISE 1 -----------------`)
let arrayOfNumbers = [1, 2, 3, 4, 5]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
console.log(`------------------ EXERCISE 2 -----------------`)
let myInformation = {
    name: 'Zee',
    surname: 'Mo',
    email: 'xziyad92@gmail.com',
    age: '25',
}
console.log(myInformation)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
console.log(`------------------ EXERCISE 3 -----------------`)
// option one
myInformation.webDeveloper = true

let additionalInfo = myInformation
additionalInfo.developer = true

console.log(myInformation)

/* EXERCISE 4
Remove from the previously created object the age property.
*/
console.log(`------------------ EXERCISE 4 -----------------`)
delete myInformation.age
console.log(myInformation)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log(`------------------ EXERCISE 5 -----------------`)

let secondObject = {}
Object.assign({ secondObject }, myInformation)
secondObject.email = `test@hotmail.com`
console.log("The email is equal to the previous one: ", myInformation.email !== secondObject.email)

if (myInformation.email) {
    console.log(myInformation.email === secondObject.email)
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
console.log(`------------------ EXERCISE 6 -----------------`)

let totalShoppingCart = 100
if (totalShoppingCart <= 50) {
    totalShoppingCart += 10
}


/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log(`------------------ EXERCISE 7 -----------------`)
/*
let blackFriday = true
let discount;

if (blackFriday === true) {
    discount = (totalShoppingCart / 100) * 20
    totalShoppingCart = discount
    console.log(totalShoppingCart)
}*/


let totalShoppingCart = 100

if (totalShoppingCart <= 50)
    totalShoppingCart += 10 // totalShoppingCart = totalShoppingCart + 10

let discount = totalShoppingCart * 0.2
totalShoppingCart = totalShoppingCart - discount

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
console.log(`------------------ EXERCISE 8 -----------------`)

let carOne = {
    brand: 'Audi',
    model: 'Ag6',
    licensePlate: 12345
}

let carTwo = {}
Object.assign(carTwo, carOne)
// carOne.licensePlate = Math.random().toString(20).substring(2, 6);
carTwo.licensePlate = 'SW4532'
carTwo.brand = 'Tesla'

console.log(`Car one has a different license plate,${carOne.licensePlate}`)

if (carOne.licensePlate !== carTwo.licensePlate) {
    console.log(`Car number two has a different license plate,${carTwo.licensePlate}`)
}

let carThree = {}
Object.assign(carThree, carOne)
carThree.licensePlate = 'SW6843'
carThree.brand = 'BMW'

if (carOne.licensePlate !== carThree.licensePlate && carTwo.licensePlate !== carThree.licensePlate) {
    console.log(`Car number three has a different license plate,${carThree.licensePlate}`)
}

let carFour = {}
Object.assign(carFour, carOne)
carFour.licensePlate = 'SW5452'
carFour.brand = 'Volvo'

if (carOne.licensePlate !== carFour.licensePlate && carTwo.licensePlate !== carFour.licensePlate && carThree.licensePlate !== carFour.licensePlate) {
    console.log(`Car number four has a different license plate,${carFour.licensePlate}`)
}


let carFive = {}
Object.assign(carFive, carOne)
carFive.licensePlate = 'SW5714'
carFive.brand = 'Ford '

if (carOne.licensePlate !== carFive.licensePlate && carTwo.licensePlate !== carFive.licensePlate && carThree.licensePlate !== carFive.licensePlate && carFour.licensePlate !== carFive.licensePlate) {
    console.log(`Car number five has a different license plate,${carFour.licensePlate}`)
}

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
console.log(`------------------ EXERCISE 9 -----------------`)

let carsForRent = [carOne, carTwo, carThree, carFour, carFive]
console.log(`These are all the cars that are available for renting:\n`, carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

console.log(`------------------ EXERCISE 10 -----------------`)
carsForRent.shift()
console.log(carsForRent)

carsForRent.pop()
console.log(carsForRent)

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
console.log(`------------------ EXERCISE 11 -----------------`)
console.log(typeof carOne.brand, typeof carOne.licensePlate)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
console.log(`------------------ EXERCISE 12 -----------------`)
let carsForSale = [
    {
        brand: 'Audi',
        model: 'Ag6',
        licensePlate: 12345,
    },
    {
        brand: 'Tesla',
        model: 'Ag6',
        licensePlate: 12345,
    },
    {
        brand: 'BMW',
        model: 'Ag6',
        licensePlate: 12345,
    }
]

let totalCars = carsForSale.length + carsForRent.length
console.log(`Total numbers of cars, but we removed some cars from exercise 10: `, totalCars)

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
console.log(`------------------ EXERCISE 13 -----------------`)
console.log(`Car one brand is`, carsForSale[0]['brand'])
console.log(`Car two brand is`, carsForSale[1]['brand'])
console.log(`Car three brand is`, carsForSale[2]['brand'])

console.log(`------------------ DONE -----------------`)