console.log("Dom III");

// Creating New Elements
const newParagraph = document.createElement('p');
const currentDiv = document.querySelector("#welcome");

newParagraph.textContent = "Hi there, I am a new paragraph";

currentDiv.appendChild(newParagraph);

// currentDiv.append()

const listItems = document.querySelector('ul');
const listItem = document.createElement('li');

listItem.textContent = "DOM Manipulations";

listItems.appendChild(listItem);


// Removing elements
const itemToRemove = document.querySelector("#selectors");

listItems.removeChild(itemToRemove);


const mainElement = document.querySelector("main");
const anchorElement = document.querySelector("a");

mainElement.removeChild(anchorElement);


// Events Handling
// 1. Listening to events
const button = document.querySelector('button');
const input = document.querySelector('#name');

button.addEventListener('click', () => {
    const newValue = document.createElement('p');

    newValue.textContent = input.value;

    currentDiv.appendChild(newValue);

    input.value = "";

    // console.log(input.value);
    // button.textContent = "Button Clicked!";
})


// input.addEventListener('change', () => {
//     console.log(input.value);
// });
// input.addEventListener('blur', () => {
//     console.log(`Input value after blur: ${input.value}`);
// });
// input.addEventListener('focus', () => {
//     console.log(`Input value during focus: ${input.value}`);
// });


function randomFunction() {
    console.log("This is just a random function!");
}


// Alerts and Prompts
const alertBtn = document.querySelector("#alert");

alertBtn.addEventListener("click", () => {
    // alert("Welcome to axia africa");

    const res = prompt("How are you?");
    console.log(res)

    // confirm("How old are you?")
})