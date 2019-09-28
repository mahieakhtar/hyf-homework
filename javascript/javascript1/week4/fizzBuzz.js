
let numSeries = [];

function fizzBuzz(mult1, mult2) {
    let initialArray = [];
    for(let i=0;i<100;i++) {
        if(i%3==0) {
            numSeries.push("Fizz");
            console.log("Fizz");
        } else if(i%5==0) {
            numSeries.push("Buzz");
            console.log("Buzz");
        } else if(i%3*5==0) {
            numSeries.push("FIzzBuzz");
            console.log("FIzzBuzz");
        } else if(i%mult1*mult2==0) {
            numSeries.push("Multiples of " +mult1+ " " +mult2);
            console.log("Multiples of " +mult1+ " " +mult2);
        } else {
            numSeries.push(i);
            console.log(i);
        }
    }
    return numSeries;
}

console.log(fizzBuzz(4, 12));