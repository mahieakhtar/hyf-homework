//Ez Namey(Start name generator)
var firstWords = ["Easy", "Info", "Corporate", "Awesome", "Magnificient", "Best", "Reliable", "Tech", "World", "IT"];
var secondWords = ["Corporation", "Startup", "Infoway", "Organization", "System", "Innovation", "A/S", "House", "Computer", "Technology"];

const randomNumber = Math.floor(Math.random() * 10) + 0;


var startupName = "The Startup : " + firstWords[randomNumber] + " " + secondWords[randomNumber] +
" contains " + (firstWords[randomNumber].length + secondWords[randomNumber].length) +
" characters."


console.log(startupName);
