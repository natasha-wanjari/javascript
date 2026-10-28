// Strings

let str = "Natasha Wanjari";
console.log(str);

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);

// Template Litrals

let specialString = `This is a special String`;
console.log(specialString);


let obj = {
    item: "pen",
    price : 20
}

console.log("The price of ", obj.item, "is", obj.price);

//Template Litrals
let output = `The Price of ${obj.item} is ${obj.price}`;

console.log(output);


// Escape characte - Text in next line \n

let natasha = "Natasha\nWanjari";

console.log(natasha);

// Escape characte - Tab Space \t

let natasha1 = "Natasha\tWanjari";

console.log(natasha1);



// String Methods
let string = "  Apna college  ";

console.log(string.length);

console.log(string.toUpperCase());
console.log(string.toLowerCase());

console.log(string.trim());


// Question

let fullName = prompt("Enter Your Full Name Without Spaces");
let userName = "@" + fullName + fullName.length;

console.log(userName);