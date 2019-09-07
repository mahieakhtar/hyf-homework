//Housey pricey(A house price estimator)
const peterHouseCost = 2500000;
const juliaHouseCost = 1000000;

const peterVolumeInMeters = 8*10*10;
const juliaVolumeInMeters = 5*11*8;

const peterGardenSize = 100;
const juliaGardenSize = 70;

var peterHousePrice = peterVolumeInMeters * 2.5 * 1000 + peterGardenSize * 300;

if(peterHouseCost > peterHousePrice){
    console.log("Peter is paying too much");   
}
else{
    console.log("Peter is paying too low");
}

var juliaHousePrice = juliaVolumeInMeters * 2.5 * 1000 + juliaGardenSize * 300;

if(juliaHouseCost > juliaHousePrice){
    console.log("Julia is paying too much");   
}
else{
    console.log("Julia is paying too low");
}

