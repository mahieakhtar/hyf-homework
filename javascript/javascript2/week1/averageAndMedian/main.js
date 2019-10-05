let housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

let averageHousePrice = function (housePrices) {
    let sumOfHousePrice = 0;
    for(let i=0;i<housePrices.length;i++) {
        sumOfHousePrice += sumOfHousePrice + housePrices[i];
    }
    return sumOfHousePrice / housePrices.length;
}
let averagePrice= averageHousePrice(housePrices);
console.log(averagePrice);

let medianOfHouse = function (housePrices) {
    housePrices.sort(function(a, b){return a-b});
    let lowMiddle = Math.floor((housePrices.length - 1) / 2);
    let highMiddle = Math.ceil((housePrices.length - 1) / 2);
    return  (housePrices[lowMiddle] + housePrices[highMiddle]) / 2;
}

let medianHouse = medianOfHouse(housePrices);
console.log(medianHouse);

let medianAverageOfHouse = function (housePrices) {
    return [{"average": averagePrice, "median":medianHouse}];
}

console.log(medianAverageOfHouse(housePrices));

const myUl = document.getElementById("prices");

 housePrices.forEach((price) => {
     const newLi = document.createElement("li");
     newLi.textContent = price;
     myUl.appendChild(newLi);
 });

 const averageprice = document.getElementById("avgvalue");
 averageprice.textContent = averageHousePrice(housePrices);

 const medianPrice = document.getElementById("medianvalue");
 medianPrice.textContent = medianOfHouse(housePrices);
