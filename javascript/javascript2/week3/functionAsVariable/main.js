//Create funtions that are used in these different ways:

//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

function blue() {
    console.log("The color is blue");
}
function green() {
    console.log("The color is green");
}
function white() {
    console.log("The color is white");
}
let arrayOfColorFunction = [blue, green, white];
arrayOfColorFunction.forEach(function (callColorFunction) {
    callColorFunction();
});

//Create a function as a const and try creating a function normally. Call both functions.
const f1 = function func1() {
    console.log('This is a function as const.');
}
function normally() {
    console.log('This is a normal function.');
}
f1();
normally();

//Create an object that has a key whose value is a function. Try calling this function.

let object = {
    key: function () {
        console.log('This is the object Key whose value is a function.');
    }
};
object.key();