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