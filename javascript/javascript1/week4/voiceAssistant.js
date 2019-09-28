const nameArray = [];
const todoArray = [];
const calculateArray = [];
const favoriteDishArray = [];
const eventarray = [];

function getReply(command) {

    const putTheWordInArray = command.split(" ");
    const strwithoutSpace = command.split(" ").join("");

    const strContainHello = strwithoutSpace.includes("Hellomynameis");
    const strContainWhatIsMyName = strwithoutSpace.includes("Whatismyname");

    const strContainToDoList = strwithoutSpace.includes("tomytodo");
    const strContainRemove = strwithoutSpace.includes("Remove");
    const strContainWhatIsOnMyToDo = strwithoutSpace.includes("onmytodo");
    const strContainWhatDayIsItToday = strwithoutSpace.includes("dayisittoday");

    const strContainWhatIsSum = strwithoutSpace.includes("+");
    const strContainWhatIsMult = strwithoutSpace.includes("*");

    const strContainMyFavoriteDish = strwithoutSpace.includes("favoritedish");
    const strContainWhatMyFavoriteDish = strwithoutSpace.includes("favoritedish?");

    const strContainSetATimer = strwithoutSpace.includes("Setatimer");

    const strContainAddToCalendar = strwithoutSpace.includes("tomycalendar");

    const strContainEventCalendar = strwithoutSpace.includes("doingthisweek");

    if (strContainHello) {
        const nameFromCommand = putTheWordInArray[putTheWordInArray.length - 1];
        nameArray.push(nameFromCommand);

        if (nameArray.length == 1) {
            return "Nice to meet you " + nameFromCommand;
        } else if (nameArray.length > 1) {
            return "Seems like " + nameFromCommand + " I know you";
        }
    }

    if (strContainWhatIsMyName) {
        return "Your name is " + nameArray[0];
    }

    if (strContainToDoList) {
        todoArray.push(putTheWordInArray.slice(1, -3).join(" "));
        //return todoArray;
        return `Added ${putTheWordInArray.slice(1, -3).join(" ")} to your todo`;
    }

    if (strContainRemove) {
        const removeItem = putTheWordInArray.slice(1, -3);
        for (let i = 0; i < todoArray.length; i++) {
            if (todoArray[i].includes(removeItem)) {
                todoArray.splice(i, 1);
            }
        }
        return todoArray;
    }

    if (strContainWhatIsOnMyToDo) {
        //todoArray.push(putTheWordInArray.slice(1, -3).join(" "));
        return todoArray;
    }

    if (strContainWhatDayIsItToday) {
        const today = new Date();
        const todaysDate = today.getDate();
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][today.getMonth()];
        const year = today.getFullYear();
        return `Today is ${todaysDate}. of ${month} ${year}`;
    }

    if (strContainWhatIsSum) {
        const digitForCalculation = putTheWordInArray[putTheWordInArray.length-1];
        const numberForSum = digitForCalculation.split("+");
        var sum = 0;
        for(let i=0;i<numberForSum.length;i++) {
            sum += parseInt(numberForSum[i]);
        }
        return sum;
    }

    if (strContainWhatIsMult) {
        const digitForCalculation = putTheWordInArray[putTheWordInArray.length-1];
        const numberForSum = digitForCalculation.split("*");
        var mult = 1;
        for(let i=0;i<numberForSum.length;i++) {
            mult *= parseInt(numberForSum[i]);
        }
        return mult;
    }

    if (strContainMyFavoriteDish) {
        const favDish = putTheWordInArray[putTheWordInArray.length - 1];
        favoriteDishArray.push(favDish);
        if (favoriteDishArray.length == 1) {
            return favoriteDishArray;
        }
    }

    if (strContainWhatMyFavoriteDish) {
        return "Your favorite dish is " +favoriteDishArray[0];
    }

    if(strContainSetATimer) {
        const timerMinutes = putTheWordInArray[putTheWordInArray.length - 2];
        return "Timer set for "+timerMinutes+ " mintutes";
        
    }


    if(strContainAddToCalendar) {
        const eventName = putTheWordInArray.slice(1,3).join(" ");
        for(let i=0;i<putTheWordInArray.length;i++) {
            if(Date.parse(putTheWordInArray[i])){
                const eventDate = putTheWordInArray[i];
                return addEvent({name:eventName, date:eventDate});
            }
        }
    }

    function addEvent(event) {
        eventarray.push(event);
        return event.name + " is added to your calendar on " +event.date;
    }

    if(strContainEventCalendar) {
        return "This week you have " +eventarray.length+ " event";
    }

}

console.log(getReply('Hello my name is Mahie'));                        // Nice to meet you Mahie

console.log(getReply('Hello my name is Mahie'));                        // Seems like i know you

console.log(getReply('What is my name?'));                              // Your name is Mahie

console.log(getReply('Add fishing to my todo'));                        // Added fishing to your todo

console.log(getReply('Add singing in the shower to my todo'));          // Added singing in the shower to your todo

console.log(getReply('Remove fishing from my todo'));                   // Removed fishing from your todo

console.log(getReply('What is on my todo?'));                           // Singing in the shower

console.log(getReply('What day is it today?'));                         // Today is 28. of September 2019

console.log(getReply('What is 40+70+40+70'));                            // 220

console.log(getReply('What is 40*10*5'));                                 // 2000

console.log(getReply('My favorite dish is biryani'));                    //  Biryani

console.log(getReply('What is my favorite dish?'));                       // your favourite dish is biryani.

console.log(getReply('Set a timer for 4 minutes'));                     // Timer set for 4 minutes.

console.log(getReply('Add Bike ride on 03.11.2019 to my calendar'));    // Bike ride added to your calender

console.log(getReply('What am I doing this week'));                      //This week you have 1 event
