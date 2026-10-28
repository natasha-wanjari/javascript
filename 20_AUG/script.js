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