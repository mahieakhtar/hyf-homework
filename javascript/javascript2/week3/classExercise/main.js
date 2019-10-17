//Click counter
//Create an index.html file with two buttons:
//When the button first is clicked it should first log out 0. The next time it is clicked it should log out 1, etc.

const button = document.getElementById('btn');
let count = 0;
button.addEventListener('click', () => {
    console.log(count);
    count++

});
//Clicking the second button should also count up and logout the same variable.

const button1 = document.getElementById('btn1');
button1.addEventListener('click', () => {
    setTimeout(() => {
        console.log(count);
        count++
        console.log("after 2 seconds");
    }, 2 * 1000);
});

//Delay clicker
//Create a button in html with the text "Log in 3 seconds"
//When the button is clicked it should wait 3 seconds and then log the text "This text was delayed by 3 seconds".

const button2 = document.getElementById('btn2');
button2.addEventListener('click', () => {
    setTimeout(() => {
        console.log("This text was delayed by 3 seconds");
    }, 3 * 1000);
});

//Page onload
//First create a callback function as a variable that logs this out: "DOM fully loaded and parsed" This callback function should be called when the DOM is fully loaded. 
//To find what this function is called go to google! What should we search for???

const callBack = function () {
    console.log("DOM fully loaded and parsed");
}
setTimeout(callBack, 2000);

//Mouse position
//Create a handler, that prints the x,y coordinate of the mouse event.
document.onmousemove = function (e) { mousePos(e); };
var mouseX = 0;
var mouseY = 0;
function mousePos(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    document.getElementById('test').innerHTML = "x: " + mouseX + ", y: " + mouseY;
    return true;
};
