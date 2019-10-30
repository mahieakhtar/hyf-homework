//This task is about visually understanding the difference between Promise.all and calling a promise one at a time
//To create two functions.
//translateOneByOne - Should translate the circles one at a time from their random start position to their target. Log something out after each element has been moved

const redCircle = document.querySelector('ul.marks li:nth-child(1)');
const blueCircle = document.querySelector('ul.marks li:nth-child(2)');
const greenCircle = document.querySelector('ul.marks li:nth-child(3)');
const redCircleTarget = { x: 20, y: 300 };
const blueCircleTarget = { x: 400, y: 300 };
const greenCircleTarget = { x: 400, y: 20 };

function translateOneByOne() {
    moveElement(redCircle, redCircleTarget)
        .then(() => {
            console.log('redCircle has been moved');
        })
        .then(() => moveElement(blueCircle, blueCircleTarget))
        .then(() => {
            console.log('blueCircle has been moved');
        })
        .then(() => moveElement(greenCircle, greenCircleTarget))
        .then(() => {
            console.log('greenCircle has been moved');
        });
};
translateOneByOne();


//translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target. Log out something after all elements have been moved

const redCirclePromise = moveElement(redCircle, redCircleTarget);
const blueCirclePromise = moveElement(blueCircle, blueCircleTarget);
const greenCirclePromise = moveElement(greenCircle, greenCircleTarget);

function translateAllAtOnce() {
    Promise.all([redCircle, blueCirclePromise, greenCirclePromise])
        .then(() => {
            console.log('All circles has been moved.')
        });
}
translateAllAtOnce();
