let name = 'natasha';
console.log(name);

// For Loop
for (let i=1; i<=20; i++){
    console.log("Natasha Wanjari");
}

// Calculate sum of 1 to 10
sum = 0;
for (let i=1; i<=10; i++){
    sum = sum + i;
}
console.log("sum : ", sum);


// While Loop
let i = 1;

while (i <= 10){
    console.log("Jivesh Nimje");
    i++;
}

// Do While
let j = 1;
do {
    console.log("Apna College");
    j++;
} while (j<=5);


// For-of Loop - For String
let strg = "Natasha";

for (let val of strg){
    console.log(strg);
}


// For-in Loop - For Objects
let student = {
    name : "Natasha",
    age : 24,
    cpa : 9.8,
    isPass : true
}

for (let key in student){
    console.log("key : ", key, "value :", student[key]);
}

// Game

let gameNum = 30;
let userNum = prompt("Guess The Game Number : ");

while (userNum != gameNum){
    userNum = prompt("You Entered Wrong Number, Guess Again : ");
}
console.log("Congratulations, You entered the right number");