function fib(number) {

    //Initializing the array with 0, 1
    let initialArray = [0, 1];

    for(let i=2; i<number+1; i++) {
        //Adding to array with adding 1st and 2nd element
        initialArray.push(initialArray[i-2] + initialArray[i-1]);
    }
    console.log(initialArray);
    return initialArray[number-1];
}
console.log(fib(5));
console.log(fib(10));