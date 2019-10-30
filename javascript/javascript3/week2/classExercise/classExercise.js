//1.fetch yes or no from this api: https://yesno.wtf/api. log out the answer
const url = 'https://yesno.wtf/api';
fetch(url)
    .then(response => response.json())
    .then(data => {
        return new Promise(resolve => {
            resolve(data);
        })
    })
    .then(data => {
        console.log(data.answer);
    });

//2.Get your battery level and if it is charging or not using navigator.getBattery() - use chrome browser
const isBatteryCharging = true;
let promise1 = new Promise((resolve, reject) => {
    navigator
        .getBattery()
        .then(battery => console.log(battery.level))
        .then(battery => {
            if (isBatteryCharging) {
                resolve();
            }
            else {
                reject();
            }
        });
});
promise1.then(() => {
    console.log('Battery charging');
})
promise1.catch(() => {
    console.log('Battery is not charging');
});

//Exercise 2
//1.Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds

let promise2 = new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 4000);
});
promise2.then(() => console.log('hello'));

//2.Create a promise that resolves with a string (you decide what the string should say) after 2 seconds.
let promise3 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Resolved after 2 seconds');
        resolve();
    }, 2000);
});
//3.Use the promise: When the promise is resolved console.log that string

console.log(promise3);

//4.Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console
let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 2000);
});
promise4.catch(data => console.log('Error occurs'));
//console.log(promise4);

//Exercise 3
/*Create a new function that returns a promise. This function should have one parameter: successMessage. The promise should resolve after 1 second. When you resolve the promise, it should be resolved with the successMessage parameter.
Call the function with an argument, assign the return of the function to a variable (what type will that have?). Use the variable to log out the successMessage.
Now add the possibility for the promise to also reject. Give the function a new parameter: errorMessage. When the promise is rejected it should be rejected with the errorMessage parameter. Now reject the promise after 1 second instead of resolving it.
give the function a third parameter: shouldReject. If shouldReject is true the promise being returned from the function should reject (with the errorMessage parameter) the promise. Otherwise the promise should resolve (with the successMessage parameter*/

//Returning success message
function successFunction(successMessage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(successMessage);
        }, 1000);
    });
}
successFunction("Success Finally").then((successMsg) => {
    console.log(successMsg);
});

//Returning error message
function successErrorFunction(successMessage, errorMessage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(errorMessage);
        }, 1000);
    });
}
successErrorFunction("Success Finally", "Error I got").then((successMsg) => {
    console.log(successMsg);
}, rejected => {
    console.error(rejected); // Error!
});

//shouldReject = true
function messageFunction(successMessage, errorMessage, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(errorMessage)
            } else {
                resolve(successMessage)
            }
        }, 1000);
    });
}
messageFunction("Success Finally", "Error I got", false).then((successMsg) => {
    console.log(successMsg);
}, rejected => {
    console.error(rejected); // Error!
});

//Exercise 4
//1.Get battery level
//2.After the battery level has been gotten, fetch the movies
//3.Log out the movies from this api
//4.Use chaining

navigator
    .getBattery()
    .then(data => console.log(data.level))
    .then(() =>
        fetch(
            "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
        )
    )
    .then(data => data.json())
    .then(movies => {
        const movieTitles = movies.map(movie => movie.title);
        console.log(movieTitles);
    });


//Exercise 5
//Get battery level and the movies at the same time. Log out the movies and the battery status when both promises has been resolved.

const batteryPromise = navigator.getBattery();
const moviePromise = fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
);

Promise.all([batteryPromise, moviePromise]).then(data => {
    const batteryLevel = data[0].level;
    const movies = data[1].json();
    console.log(batteryLevel);
    console.log(movies);
});




