
//1.Log out the text 'Called after 2.5 seconds' 2.5 seconds after the script is loaded.

setTimeout(() => {
    console.log('Called after 2.5 seconds');
}, 2.5 * 1000);

//2.Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds.
//Call the function you have created with some different arguments.

function delayedLogOut(delay, stringToLog) {
    setTimeout(() => {
        console.log('Called after 5 seconds')
    }, delay * 1000);
}
delayedLogOut(5, 'this string logged after 5 seconds');

//3.Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const button = document.getElementById('btn');
button.addEventListener('click', callBack);


//4.Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn.
//Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. 
//Try call the third function once with the Earth function and once with the Saturn function.


let earthLogger = function func1() {
    console.log('Earth');
}
let saturnLogger = function func2() {
    console.log('Saturn');
}
function func3(planetLogFunction) {
    planetLogFunction();

};
func3(earthLogger);
func3(saturnLogger);

//5.Create a button with the text called "Log location". 
//When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api.

const button1 = document.getElementById('btn1');
button1.addEventListener('click', getLocation => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    };
    function showPosition(position) {
        console.log("Latitude is :  " + position.coords.latitude);
        console.log("Longitude is : " + position.coords.longitude);
        alert("Latitude is :  " + position.coords.latitude);
        alert("Longitude is : " + position.coords.longitude);
    }
});
/*6. Optional Now show that location on a map using fx the Google maps api

function renderLocationOnGoogleMap(lat, lng) {
    const mapDiv = document.querySelector('#map');
    const map = new google.maps.Map(mapDiv, {
        center: { lat, lng },
        zoom: 12
    });

    console.log(map);
}*/
//7.Create a function called runAfterDelay. It has two parameters: delay and callback. 
//When called the function should wait delay seconds and then call the provided callback function.
//Try and call this function with different delays and different callback functions

let myFunc = func1 => {
    return console.log("I am Mahie");
}
function runAfterDelay(delay, callBack) {
    setTimeout(() => {
        callBack();
    }, delay);
};
runAfterDelay(3000, myFunc);

//8.Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
//If a double click has been detected, log out the text: "double click!"

const doubleClick = document.querySelector('div');
doubleClick.addEventListener('dblclick', function (e) {
    console.log('double click ');
    alert('double click ');
});

//Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
//If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

const funnyJoke = logFunnyJoke => {
    console.log('My boss told me to have a good day.. so I went home.');
};
const badJoke = logBadJoke => {
    console.log('Why don’t crabs donate? Because they’re shellfish.');
};
function jokeCreater(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke === true) {
        funnyJoke();
    } else {
        badJoke();
    }
};
jokeCreater(true, funnyJoke, badJoke);



