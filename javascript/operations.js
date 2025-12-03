console.log("This is the basic operations in js");

// Arthmetic Operations
let x = 20;
let y = 5;

// addition
console.log("Addition =>", x + y);

// subtraction
console.log("Subtraction =>", x - y);

// multiplication
console.log("Multiplication =>", x * y);

// division
console.log("Division =>", x / y);

// exponential
console.log("Expo =>", y**2);

// modulos
console.log("Mod =>", 10 % 3);

let v = 23;

console.log(v % 5);

// String Concatenation
const firstName = "Abolaji";
const lastName = "Kayode";
const middleName = "Victor";

const fullName = firstName + " " + lastName + " " + middleName;
console.log(fullName);

// template literals
const officialName = `${firstName} ${middleName} ${lastName}`;
console.log(officialName);

const name = "Claire";
const age = 20;

console.log(`${name} is ${age} years of age!`);



// Assignment Operations
let a = 5;
console.log(a);

a += 2; // a = a + 2;
console.log(a);

a -= 4; // a = a - 4;
console.log(a);

a *= 2 // a = a * 2;
console.log(a);


// Comparison Operators
//  ==, ===, !=, !==, >, >=, <, <=
let num1 = 10;
let num2 = 15;
let num3 = "10";

console.log(num1 == num3);
console.log(num1 === num3);

console.log(num1 != num3);
console.log(num1 !== num3);


// Logical Operators
// logical AND (&&)
/*
    true && true = true
    true && false = false
    false && true = false
    false && false = false

    1 * 1 = 1
    1 * 0 = 0
    0 * 1 = 0
    0 * 0 = 0
*/

const studentAge = 15;
const level = 100;

console.log("Youth program: ",studentAge >= 18 && level > 200);
console.log("Teens program: ", studentAge < 20 && level < 300);

// logical OR (||)
/*
    true || true = true
    true || false = true
    false || true = true
    false || false = false

    1 + 1 = 1
    1 + 0 = 1
    0 + 1 = 1
    0 + 0 = 0
*/ 

const isRaining = false;
const hasUmbrella = false;

console.log("Will I go to work? ", isRaining || hasUmbrella);

const isBirthday = true;
const isFathersDay = true;

console.log("Will I celebrate? ", isBirthday || isFathersDay);