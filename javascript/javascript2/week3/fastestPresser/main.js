const button = document.getElementById('btn');
const inputTime = document.getElementById('inputTime');
let clicked = false;

button.addEventListener('click', () => {
    clicked = true;
    setTimeout(() => {
        if (inputTime.value > 0) {
            let diff = countL - countS;
            if (diff > 0) {
                alert("Time's up! L is winner!");
            } else if (diff < 0) {
                alert("Time's up! S is winner!");
            } else {
                alert("Time's up!  It's a tie!");
            }
        } else {
            alert("Enter the time!");
        }
    }, inputTime.value * 1000);
});


let countS = 0;
let countL = 0;
document.addEventListener("keydown", function (event) {
    if (inputTime.value > 0 && clicked) {
        var key_code = event.keyCode ? event.keyCode : event.which;
        //do something on keydown
        if (key_code == 83) {
            //enter key was pressed S
            ++countS;
            document.getElementById("countS").value = countS;
        }

        if (key_code == 76) {
            //enter key was pressed L
            ++countL;
            document.getElementById("countL").value = countL;
        }
    }
});

