//Promise that resolves after set time
//Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

function resolvesAfterSetTime(resolveAfter) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('I am called asynchronously');
            resolve();
        }, resolveAfter);
    });
}
resolvesAfterSetTime(6000).then(() => console.log('after 6 seconds'));


