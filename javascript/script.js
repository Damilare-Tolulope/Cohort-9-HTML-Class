console.log("This is coming from an external Javascript file!!");

var age = 10;
console.log(age);

let numberOfStudents = 50;

const numberofHouses = 5;
console.log(numberofHouses);

numberOfStudents = 20;
console.log(numberOfStudents);


// Primitive Data Types
const blocks = 15.3; // number

const name = "Dee man"; // string

const isStudent = true; // boolean 

const school = null; // null

let address; // undefined

console.log(blocks, name, isStudent, school, address);


// Complex Data Tyoes
const person = {
    name: "Samson",
    age: 20,
    isValid: false,
    class: null,
    hobbies: ["running", 'gaming'],
    address: {
        street: "Sunday gbaj",
        city: "Lagos",
        state: "Lagos"
    }
};

console.log(person);

const varieties = ["Dee", 34, true, null, undefined, { color: "blue" }, ["mango", "orange"]];
console.log(varieties);