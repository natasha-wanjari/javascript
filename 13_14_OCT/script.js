window.document.body.style.background = "red";

document.body.childNodes[2].innerText = "ABCD";


// DOM Manipulation

let home = document.getElementById("home"); //by ID
console.log(home);

let card = document.getElementsByClassName("card"); //by Class
console.log(card);

let tag = document.getElementsByTagName("p"); //by Tags
console.log(tag);

let fisrtEl = document.querySelector("p");
console.log(fisrtEl);

let allEl = document.querySelectorAll("p");
console.log(allEl);

// Practice Questions

let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + "Hello Javascript";

// 2nd Question

let divs = document.querySelectorAll(".box");

let idx = 1;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}