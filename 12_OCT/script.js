// Functions

function sum(a, b){
    return(a + b);
}


// Arrowsum Function

const arrowSum = (a, b) => {
    console.log(a+b);
}

// Foreach Loop in arrys

// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val) { //Vale at each index
//     console.log(val);
// });


let cities = ["ngp", "pune", "delhi"];

cities.forEach(function printcity(val, idx, arr){
    console.log(val.toUpperCase(), idx, arr);
})


// Argument & parameter

function greet(name){ //name is the parameter
    console.log("Hello ", name);
}

greet("Natasha"); //"Natasha" is argument


// Square of each number

let squNum = [2, 4, 6, 7, 8];

squNum.forEach((val) => {
    console.log(val * val);
});


// Map Method - Array (Similar like forEach, create new Array)
let nums = [12, 13, 14, 16, 17];
let newArr = nums.map((val) => {
    return val * val;
} );

console.log(newArr);


// Filter Method - Array method - it filters the value
let even = [2, 3, 67, 454, 33];

let evenArr = even.filter((val) => {
    return val%2 === 0;
});

console.log(evenArr);


// Reduce Method - Give single value

// let array = [3, 6, 7, 202, 7];

// let reduceArr = array.reduce((prev, curr) => {
//         return prev + curr;
// })

// console.log(reduceArr)


// To find out the greater val in array


let array = [3, 6, 7, 555, 7];

let reduceArr = array.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
})

console.log(reduceArr)