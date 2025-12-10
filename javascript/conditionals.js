console.log("Conditionals in javascript!");

const age = 13;

if(age > 18) {
    console.log("You are eligible!");
} else {
    console.log("Please, go for some trainings!");
}

const isRaining = false;

if(isRaining) {
    console.log("Use Umberlla.");
} else {
    console.log("Leave the umbrella at home.")
}

//  multiple conditions;

const grade = 76;

if (grade >= 90){
    console.log("Grade: A");
} else if(grade >= 80) {
    console.log("Grade: B");
} else if(grade >= 70) {
    console.log("Grade: C");
} else if(grade >= 60) {
    console.log("Grade: D");
} else if(grade >= 50) {
    console.log("Grade: E");
} else {
    console.log("Grade: F");
}

// function getStudentGrade(grade) {
//     if (grade >= 90){
//         console.log("Grade: A");
//     } else if(grade >= 80) {
//         console.log("Grade: B");
//     } else if(grade >= 70) {
//         console.log("Grade: C");
//     } else if(grade >= 60) {
//         console.log("Grade: D");
//     } else if(grade >= 50) {
//         console.log("Grade: E");
//     } else {
//         console.log("Grade: F");
//     }
// }

// getStudentGrade(78);
// getStudentGrade(85);
// getStudentGrade(51);
// getStudentGrade(90);
// getStudentGrade(48);