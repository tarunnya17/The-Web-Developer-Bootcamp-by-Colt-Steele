let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let attempts = 1;
let guess = prompt("Enter your first guess");
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! enter a new guess:");
    }
    else if (guess < targetNum) {
        guess = prompt("Too low! enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("OK! you quit!");
}
else {
    console.log(`Congrats!! It took you ${attempts} attempts`);
}