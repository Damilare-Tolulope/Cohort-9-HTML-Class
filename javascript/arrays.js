console.log("This is from the arrays");

// Defining an array
const colors = ["red", "blue", "yellow", "white", "black"];
console.log(colors);

const randomThings = ["Dee man", 10, false, {isValid: true}, ['reading', 'sleeping']];
console.log(randomThings);

// Accessing your array
// Bracket notation
console.log(colors[2]);
console.log(randomThings[3].isValid);
console.log(randomThings[4][1]);

// Modifying an element
colors[1] = "brown";
console.log(colors);

// Length of an array
console.log(colors.length);

// Array Methods
// push() method
colors.push("cyan");
console.log(colors);

// pop() method
colors.pop();
console.log(colors);

// shift() method
colors.shift();
console.log(colors);

// unshift method
colors.unshift("magenta");
console.log(colors);

// concat() method
const newColors = ["onion-pink", "burnt-orange", "tomato-red"];
console.log(newColors.concat(colors));

// splice() method
// colors.splice(2, 1);
// console.log(colors);
colors.splice(2, 1, "purple");
console.log(colors);

// join() method
console.log(colors.join(" - "));

// indexOf() method
console.log(colors.indexOf("white"));
console.log(colors.indexOf("red"));

// slice() method
console.log(colors.slice(1, 4));

// reverse() method
console.log(colors.reverse());


// HIGHER ARRAY METHODS;
/*
map()
find()
findIndex()
every()
some()
includes()
reduce()
forEach()
*/ 