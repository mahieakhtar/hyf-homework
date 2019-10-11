//function to generate random listings

/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);

        listings.push(listing);
    }

    return listings;
}

generateListings(20);
console.log(generateListings(20));

//ForEach : Create 37 listings and log out every listings size

const forEachListing = generateListings(37);

forEachListing.forEach(function(forEachList) {
    console.log(forEachList);
    console.log(forEachList.size);

    forEachList.facilities.forEach(function(facility){
        console.log(facility);
    });
});
//Map : Create an array that contains all the 37 listing prices

    const forEachListSize = forEachListing.map(function(forEachList) {
        return forEachList.size;
    });
    console.log("Map " +forEachListSize);
//Filter : Using the 37 listings from the previous tasks

//Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object

const cheapPriceListing = forEachListing.filter(function(forEachList) {
    return forEachList.price < 2000;

});
console.log(cheapPriceListing);

//Create an array of expenivesize listings prices. Each item in this array should be of type number

const expensiveSize = forEachListing.filter(function(forEachList) {
    return forEachList.size > 900;
});
console.log("Expens ");
console.log(expensiveSize);

//Create an array of listings that have parking. Each item in this array should be of type object  

const hasParking = forEachListing.filter(function(forEachList) {
    if(forEachList.hasParking) {
        return forEachList;
    }
});
console.log("Has Parking ");
console.log(hasParking);

//Arrow Functions : Rewrite the code above (forEach, map and filter) to arrow functions.
//ForEach
forEachListing.forEach(forEachList => {
    console.log(forEachList);
    console.log(forEachList.size);

    forEachList.facilities.forEach(facility => {
        console.log(facility);
    });
}); 
//Map

const listSize = forEachListing.map(forEachList => {
    console.log(listSize);
});
//Filter
//Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object

const cheapPriceList = forEachListing.filter(forEachList => {
    if(forEachList.price < 2000){
        console.log(cheapPriceList);
    }

});

//Create an array of expenivesize listings prices. Each item in this array should be of type number

const expensiveSizelist = forEachListing.filter(forEachList => {
    if(forEachList.size > 900){
        console.log("Expens ");
    console.log(expensiveSizelist);
    }
});

//Create an array of listings that have parking. Each item in this array should be of type object  

const hasParkinglist = forEachListing.filter(forEachList => {
    if(forEachList.hasParking) {
        console.log("Has Parking ");
        console.log(hasParkinglist);
    }
});
