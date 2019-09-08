//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth=2017;
const dogYearFuture=2027;
const dogYear=dogYearFuture-dogYearOfBirth;

const shouldShowResultInDogYears = true;

const firstString = "Your dog will be"; 
const humanYearString = "human years old in";
const dogYearString = "dog years old in";

if(shouldShowResultInDogYears)
{
    console.log(`${firstString} ${dogYear*7} ${dogYearString} ${dogYearFuture}`);
}
else  {

    console.log(`${firstString} ${dogYear} ${humanYearString} ${dogYearFuture}`);
}  
