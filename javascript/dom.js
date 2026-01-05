console.log("DOM!!");

// Selection of DOM Elements
// By ID
const welcome = document.getElementById('welcome');
console.log(welcome);

// By Class
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);

// Tag name
const listItems = document.getElementsByTagName('li');
console.log(listItems);

// Query selector
const idSelector = document.querySelector("#head");
console.log(idSelector);

const classSelector = document.querySelector(".eight");
console.log(classSelector);

const tagSelector = document.querySelector("span");
console.log(tagSelector);

// Query Selector all
const allElements = document.querySelectorAll('li');
console.log(allElements);


// Modifying DOM Elements
// 1. Changing content
const sel = document.querySelector("#selectors");

// sel.textContent = "These are the <b>element</b> selectors";
sel.innerHTML = "These are the <b>element</b> selectors";

const classSel = document.querySelector("#class-selector");
classSel.textContent = "Class - This is a class selector";

// 2. Changing attributes
const link = document.querySelector("a");

const linkAttribute = link.getAttribute("href");
console.log(linkAttribute);

link.setAttribute("href", "https://google.com/");
console.log(link.getAttribute("href"));

link.removeAttribute("target");

//3. Changing Styles
const heading = document.querySelector("h1");
heading.style.backgroundColor = "black";
heading.style.color = "white";
heading.style.textTransform = "uppercase";
heading.style.fontSize = "24px";
heading.style.padding = "10px 14px";
heading.style.textAlign = "center";

welcome.style.textAlign = "center";
welcome.style.fontSize = "14px";