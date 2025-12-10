console.log("This is the operations on objects!");

// Working with Objects

// Creating Objects
const person = {
    firstName: "Dee",
    lastName: "Man",
    age: 20,
    isStudent: true,
    'has-ID': false
}

console.log(person);

// const name = "Da";
// console.log(typeof person);
// console.log(typeof name);

// Accessing the value of an object
// 1. Dot Notation
console.log(person.firstName);

// 2. Bracket Notation
console.log(person['lastName']);
console.log(person['has-ID']);


// Adding a property to an object
person.email = "deeman@gmail.com";
console.log(person);

// Updating a property of an object
person['age'] = 35;
console.log(person);

// Deleting a property from an object
delete person.isStudent;
console.log(person);

// Nested Object => having an object in another object
const student = {
    name: "John Doe",
    age: 34,
    isVerified: true,
    address: {
        street: "123, Gbolahan street",
        city: "Lagos",
        state: "Lagos",
        country: "Nigeria"
    },
    handleClick: function() {
        console.log("This is a function in an object");
    },
    hobbies: ["gaming", 'sleeping', 'swimming', 'fighting']
}

console.log(student);
console.log(student.address.city);
console.log(student.address.country);
student.handleClick();


// Looping over an object
// for..in loop

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

for(let i in student){
    if(i === "address"){
        for(let j in student.address){
            console.log(`${j}: ${student.address[j]}`)
        }
        continue;
    }
    console.log(`${i}: ${student[i]}`);
}