const creature = "Common Sea Dragon";

function scubaDive() {
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}

scubaDive();

//defining methods for an object square:
const square = {
    area: function (side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
} //square.area(10)

//use of the 'this' keyword:
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function () {
        this.eggCount = this.eggCount + 1
        return "EGG"
    }
}

//forEach:
const num = [8, 9, 10, 11, 12, 13, 14, 15]

num.forEach(function (el) {
    console.log(el)
})

//map:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

const firstNames = fullNames.map(function (first) {
    return first.first
})
console.log(firstNames);