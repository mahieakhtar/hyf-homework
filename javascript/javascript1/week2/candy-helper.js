const boughtCandyPrices = [];
let totalPrice = 0;
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    if(candyType === 'Sweet') {
        boughtCandyPrices.push(weight * 0.5);
    } else if (candyType === 'Chocolate') {
        boughtCandyPrices.push(weight * 0.7);
    } else if (candyType === 'Toffee') {
        boughtCandyPrices.push(weight * 1.1);
    } else if (candyType === 'Chewing-gum') {
        boughtCandyPrices.push(weight * 0.03);
    } 
}

function canBuyMoreCandy() {
    
    for(let i =0; i<boughtCandyPrices.length; i++) {
        totalPrice = totalPrice + boughtCandyPrices[i];
    }

    if(totalPrice < amountToSpend) {
        console.log("You can buy more, so please do!")
    } else {
        console.log("Enough candy for you");
    }
}

addCandy('Sweet', 20);
addCandy('Chocolate', 10);
addCandy('Toffee', 40);
addCandy('Chocolate', 20);
addCandy('Chewing-gum', 20);

canBuyMoreCandy();