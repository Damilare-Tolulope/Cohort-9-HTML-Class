console.log("For Of Loop in Arrays");

// for..of loop in array
// for(let element of arrayVariable){}

const colors = ["red", "white", "black"];
console.log(colors);

for(let color of colors){
    console.log(color);
}

const ages = [30, 25, 32, 41];

let totalAgeNumber = 0;

for(let age of ages){
    totalAgeNumber += age; 
}

console.log("Total number of age: ", totalAgeNumber);

// totalAgeNumber = 0 + 30
// totalAgeNUmber = 30 + 25 
// totalAgeNUmber = 55 + 32 
// totalAgeNUmber = 87 + 41
// totalAgeNumber = 128; 
