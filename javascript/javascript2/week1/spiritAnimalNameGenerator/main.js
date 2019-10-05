const spiritAnimal = ["Scarewolf", "Lonely Fox", "Cheeky Leopard", "Horny Deer", "Deadly Hawk", "Halloween Rabbit", "Frankenstien Monkey",
                        "Scratching Eagle", "Dracula Bat", "Spirited Wolf"];

function showSpiritedName() {
    let txt = document.getElementById("name").value; 
    if(txt==="") {
        document.getElementById("spiritedName").innerHTML = "Please enter your name : ";
    } else {
        document.getElementById("spiritedName").innerHTML = "Your spirited animal name : " + txt + " " + spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)]; 
    }
};
