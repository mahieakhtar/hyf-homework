function getDayofWeek(day) {
    const weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
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