// Attributes

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let className = div.getAttribute("class");//get the attribute value
console.log(className);


let para = document.querySelector("p");
console.log(para.setAttribute("heading", "newheading"));


// Style

let divStyle = document.querySelector("div");
divStyle.style.backgroundColor = "green";
divStyle.style.backgroundColor = "red";


// Create New btn - Add Node

let newBtn = document.createElement("button");
newBtn.innerText = "Click Here";
console.log(newBtn);

let divBtn = document.querySelector("div");
divBtn.append(newBtn); // Add at the end (Inside)

divBtn.prepend(newBtn); // Add at the start (inside)

divBtn.after(newBtn); // Add After the div (Outside)

divBtn.before(newBtn); //Add Before the div (Outside)


// Create New Heading

let newheading = document.createElement("h1");
newheading.innerHTML = "<i>This is New Heading</i>";

document.querySelector("body").prepend(newheading);

// Remove Node

let remPara = document.querySelectorAll("p");
// remPara[1].remove();

// classList - add a new class to any tag
remPara[1].classList.add("newclass"); //Add new class

remPara[1].classList.remove("newclass"); //remove any class