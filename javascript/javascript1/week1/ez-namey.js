//Ez Namey(Start name generator)
const firstWords = ["Easy", "Info", "Corporate", "Awesome", "Magnificient", "Best", "Reliable", "Tech", "World", "IT"];
const secondWords = ["Corporation", "Startup", "Infoway", "Organization", "System", "Innovation", "A/S", "House", "Computer", "Technology"];

const firstWordRandomNumber = Math.floor(Math.random() * 10) + 0;
const secondWordRandomNumber = Math.floor(Math.random() * 10) + 0;

const startupName = `${firstWords[firstWordRandomNumber]} ${secondWords[secondWordRandomNumber]}`;
const startupNameLength = startupName.length;

console.log(`The Startup : ${startupName} contains ${startupNameLength} characters.`);
