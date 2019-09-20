//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelTimeDetails(travelInformation) {
  const timeTakenInHours = travelInformation.destinationDistance/travelInformation.speed;   

  const rhours = Math.floor(timeTakenInHours);
  const minutes = (timeTakenInHours - rhours) * 60;
  const rminutes = Math.round(minutes);

  return rhours + " hour(s) and " + rminutes + " minute(s).";
}

const travelTime = travelTimeDetails(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes