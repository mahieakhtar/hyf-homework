
let btn = document.querySelector('button');
let body = document.querySelector('body');
let txt = document.querySelector('p');
let isDarkMode = true;

btn.addEventListener('click', function() {
    if(isDarkMode) {
      body.style.background = "white";
      txt.style.color= "black";
    } else {
      body.style.background = "black";
      txt.style.color = "white";
    }
    isDarkMode = !isDarkMode;
});
