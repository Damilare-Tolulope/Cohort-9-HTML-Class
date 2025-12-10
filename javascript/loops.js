console.log("Loops!!")

// For Loops
/*
    for(initialization; condition; increment){
        block of codes
    }
*/

for (let i = 0; i < 5; i++) {
    console.log("This is number: ", i);
};

// While Loops
/*
    initialization;
    while (condition){
        block of codes
        increment
    }
*/ 

let count = 0;

while (count < 8){
    console.log("While loop running this code: ", count);
    count += 2;
}

// Do-while Loops
/*
    initialization;
    do{
        block of codes;
        increment;
    } while (condition)
*/ 

let num = 5;

do {
    console.log("Number: ", num);
    num++;
} while (num < 10);

// for..in loop and for..of loop

// Break and Continue
//  Break - stop the execution of a loop
// Continue - skip a step in a loop

let n = 0;
while (n < 5) {
    console.log(n);
    if(n === 2){
        break;
    }
    n++;
}

for (let a = 0; a < 5; a++){
    if(a === 2) {
        continue;
    }
    console.log("A: ", a)
}
