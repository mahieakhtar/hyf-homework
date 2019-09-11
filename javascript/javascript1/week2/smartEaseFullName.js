const fullName1 = "";
const fullName2 = "";


function getFullName(firstName, surname) {
return `${firstName} ${surname}`;
}

function getFullName(firstName, surname, useFormalName) {
if(useFormalName) {
return `Lord ${firstName} ${surname}`;
} else {
return `${firstName} ${surname}`;
}
}

fullName1 = getFullName("Dia", "Akhtar");
fullName2 = getFullName("Mahie", "Akhtar");

fullName3 = getFullName("Dia", "Akhtar", true);
fullName4 = getFullName("Mahie", "Akhtar", false);

fullNameEmptyString = getFullName("", "", false);

console.log(fullName1);
console.log(fullName2);

console.log(fullName3);
console.log(fullName4);