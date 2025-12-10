console.log("This is from the function's script!!");

// Functions
// declare a function
function greetUser() {
    console.log("Hello, and welcome to my webpage!");
}

function showStudentName(name, course) {
    console.log(`My name is ${name} and I am a student of Axia Africa learning ${course} course.`)
}

// call a function
greetUser();
showStudentName("Claire", "Frontend Development");
showStudentName("Abolaji", "Backend Development");
showStudentName();


// return keyword
function addNumbers(num1, num2) {
    const result = num1 + num2;

    return console.log(result);

    console.log("this the result!");
}

addNumbers(5, 6);


function multiply(a, b) {
    return a * b;
}

const res = multiply(3, 4);
console.log(res);
console.log(multiply(2, 4));

// Funtion Expressions
const squareNumb = function(num) {
    console.log(num ** 2);
}

squareNumb(5);


// arrow functions
const displayName = (name) => {
    return console.log(`Hi ${name}! Welcome back.`);
}
// const displayName = (name) => console.log(`Hi ${name}! Welcome back.`);


displayName("Dee man");