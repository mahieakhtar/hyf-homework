let dogList = [];

async function displayRandomDogImage() {
    const base_Url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(base_Url);
    const data = await response.json();

    const img = document.querySelector("#image");
    img.src = data['message'];

    const reloadPage = function () {
        window.location.reload(1);
    }
    setTimeout(reloadPage, 4000);
};
//For page reload remove this button event to load every 4 sec and add method call displayRandomDogImage();
//displayRandomDogImage();
document.getElementById("randomImageButton").addEventListener("click", displayRandomDogImage);


async function displayDogList() {
    const base_Url = 'https://dog.ceo/api/breeds/list/all';
    const response = await fetch(base_Url);
    const data = await response.json();
    let dogName = "";
    for (dogNameFromJSON in data['message']) {
        dogName += dogNameFromJSON + '<br>';
        dogList.push(dogNameFromJSON);
    }
    document.getElementById('dogName').innerHTML = dogName;
};

document.getElementById("dogListButton").addEventListener("click", displayDogList);


async function displayRandomImageofBreed() {
    document.getElementById('dogName').innerHTML = " ";
    let randomBreed = dogList[Math.floor(Math.random() * dogList.length)];

    const base_Url = 'https://dog.ceo/api/breed/' + randomBreed + '/images/random';
    const response = await fetch(base_Url);
    const data = await response.json();
    const img = document.querySelector("#image");
    img.src = data['message'];
    document.getElementById('dogName').innerHTML = randomBreed;

};

document.getElementById("dogRandomFromListButton").addEventListener("click", displayRandomImageofBreed);
