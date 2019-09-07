//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth=2017;
const dogYearFuture=2027;
const dogYear=dogYearFuture-dogYearOfBirth;

var shouldShowResultInDogYears = true;

var firstString = "Your dog will be";
var humanYearString = "human years old in";
var dogYearString = "dog years old in";

if(shouldShowResultInDogYears)
{
    console.log(firstString+" "+(dogYear*7)+" "+dogYearString+" "+dogYearFuture);
}
else  {

    console.log(firstString+" "+ dogYear+" "+ humanYearString+" " +dogYearFuture);
}  
