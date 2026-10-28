let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Btn Was Clicked");
    let a = 25;
    a++;
    console.log(a)
};

// 2nd 

let box = document.querySelector(".box");

box.onmouseover = () => {
    console.log("You are Inside the Box")
}

// Event Object

btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

// Event Handler

btn1.addEventListener("click", () => {
    console.log("Event Handler - BTN");
} )

btn1.addEventListener("click", (evt) => {
    console.log("Event Handler 2 - BTN");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
} )

btn1.addEventListener("click", () => {
    console.log("Event Handler - BTN 1");
} )

btn1.addEventListener("click", () => {
    console.log("Event Handler - BTN 2");
} )

btn1.addEventListener("click", () => {
    console.log("Event Handler - BTN 4");
} )

// Remove Event Listener

const handler3 = () => {
    console.log("Event Handler - BTN 3");
};

btn1.removeEventListener("click", handler3);

// Light mode & dark Mode Toggle

let mode = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
mode.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
} );