let numbers = [1, 2, 3, 4];
let newNumbers = [];

 for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 != 0) {
        newNumbers.push(numbers[i] * 2);
        newNumbers[i] = numbers[i] * 2;
        
    }
}
console.log(newNumbers);  
console.log("The doubled numbers are : ", newNumbers); // [2, 6] 

//map
 numbers.map((number) => {
    if (number % 2 != 0) {
        newNumbers.push(number * 2)
    }
});

console.log("The doubled numbers are : ", newNumbers);  // [2, 6] 

//Filter

numbers.filter((number) => {
    if (number % 2 != 0) {
        newNumbers.push(number * 2)
    }
    
});

console.log("The doubled numbers are : ", newNumbers); // [2, 6] 






