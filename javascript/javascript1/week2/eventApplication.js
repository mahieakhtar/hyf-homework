
function getDayofWeek(day) {
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[day];
}

function getEventWeekday(eventDay) {
    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + eventDay);
    const eventDayNumber = todayDate.getDay();
    var eventDay = getDayofWeek(eventDayNumber);
    return eventDay;
}

const todayDate = new Date();
console.log(getDayofWeek(todayDate.getDay()));
console.log(`Weekday ${getEventWeekday(10)}`);