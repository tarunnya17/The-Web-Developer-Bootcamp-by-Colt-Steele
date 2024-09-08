const creature = "Common Sea Dragon";

function scubaDive() {
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}

scubaDive();

//defining methods for an object square
const square = {
    area: function (side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}