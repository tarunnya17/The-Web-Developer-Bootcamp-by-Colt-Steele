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

//array push & pop
movieline = ["tom", "jerry", "uday", "taru", "nut", "boltu"];
movieline.push('eva') //it will add eva at the end of the array
person = movieline.pop() //it will give eva
console.log(movieline.shift()) //it prints tom
movieline.unshift('VIP') //add VIP at the first place

//other methods: concat,includes, indexOf, reverse

//slice and splice:
movieline = ["tom", "jerry", "uday", "taru", "nut", "boltu"];

movieline.slice(3) //starting at index 3 takes up to the end
movieline.slice(2, 4) //takes 2nd and 3rd index, excludes 4th
movieline.slice(-2) //gives the last 2

movieline.splice(5, 1)//starts at 5th index, want to delete 1 item from there, will delete boltu from initial movieline array
movieline.splice(1, 0, "oggy")//will insert oggy after 1st index

//equality testing
'hi' === 'hi' //gives true
//['hi', 'bye'] === ['hi', 'bye'] //gives false