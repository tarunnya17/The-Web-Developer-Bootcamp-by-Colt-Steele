console.log("Hello from our first JS file");
let total = 1 + 3;
console.log("Goodbye!!!");

let rating = 3;
if (rating === 3) {
    console.log("Math is fun!");
}
//conditions in JS
let random = Math.random();
if (random < 0.5) {
    console.log("Number is less than 0.5");
}
else if (random > 0.5) {
    console.log("Number is greater than 0.5");
}
else {
    console.log("Number is 0.5");
}
console.log(random);

const password = prompt("enter a password");
if (password.length >= 6) {
    console.log("Long Enough pass!");

    if (password.indexOf(' ') === -1) {
        console.log("valid pass")
    }
    else {
        console.log("pass cannot have spaces")
    }
}
else {
    console.log("cannot be too short password");
}

//truthy-falsyness

const userInput = prompt("Enter anything:");
if (userInput) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY");
}
if (NaN) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY");
}
