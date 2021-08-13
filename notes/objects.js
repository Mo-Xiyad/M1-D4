
console.log("\n--------------< CREATING AN OBJECT >--------------")

let student = {
    firstName: "Gordon", // This is a STRING property
    lastName: "Freeman",
    age: 34, // This is a NUMBER property
    batch: "WEB-Aug21",
    hasWebcam: true, // This is a BOOLEAN property
} // This is the JSON notation

console.log(student)

console.log("\n--------------< READING STUDENT PROPERTIES >--------------")

let fullName = student.firstName + " " + student.lastName
console.log("Full name of the student is", fullName, ", batch", student.batch)

console.log("\n--------------< USING TEMPLATE LITERAL >--------------")
console.log(`Full name of the student is ${student.firstName} ${student.lastName}, batch ${student.batch}`)

console.log("\n--------------< CHANGE VALUES >--------------")
student.hasWebcam = false
//student.age = student.age + 1
//student.age += 1
student.age++
console.log(student)

console.log("\n--------------< ADDING A NEW PROPERTY >--------------")
student.hasDrivingLicense = false
console.log(student)

console.log("\n--------------< DELETING A PROPERTY >--------------")
delete student.age
console.log(student)

console.log("\n--------------< USING AN OBJECT AS A 'DICTIONARY' >--------------")
// 'DICTIONARY USE' example (advanced, for now)
let shoeSizes = {}
shoeSizes.daniele = 43
shoeSizes.bogdan = 44
shoeSizes.john = 11

console.log(shoeSizes)

console.log("\n--------------< ANOTHER WAY TO ACCESS A PROPERTY >--------------")

let assignedBatch
//assignedBatch = student.batch
assignedBatch = student["batch"]

//student.batch = "FS-Aug21"
student["batch"] = "FS-Aug21"

// student.Discord Username = "superC00lGuy" // I'm not allowed to do that: variable/property names should not contain spaces
student["Discord Username"] = "superC00lGuy"

console.log(student)

console.log("\n--------------< NESTING OBJECTS >--------------")

student.address = {
    street: "Boulevard of Broken Dreams, 12",
    city: "Berlin",
    country: "Germany"
}
console.log(student)
console.log(`${student.firstName} is from ${student.address.country}`)
console.log(`${student["Discord Username"]} is from ${student["address"]["country"]}`)

console.log("\n--------------< ASSIGN AN EXISTING OBJECT TO A NEW VARIABLE >--------------")

let student2 = student // We're only copying the reference/link/address to that object: the object itself is SHARED
console.log("After assigning 'student' to 'student2' variable:", student2)

student2.firstName = "Morgan"

// They are sharing the same object: I modify one of them, I'm actually affecting BOTH of them (they refer to the SAME)
console.log(`Student is ${student.firstName} ${student.lastName}`)
console.log(`Student2 is ${student2.firstName} ${student2.lastName}`)

console.log("\n--------------< ACTUALLY CLONING THE OBJECT >--------------")

let student3 = {}
Object.assign(student3, student) // Clone the original properties from 'student' to the new 'student3' object
student3.firstName = "George"
student3.address.street = "Black Mesa str. 97" // Nested objects are also cloned (= totally new, independent entities)

console.log(`Student is ${student.firstName} ${student.lastName}`)
console.log(`Student3 is ${student3.firstName} ${student3.lastName}`)
console.log(student)
console.log(student3)