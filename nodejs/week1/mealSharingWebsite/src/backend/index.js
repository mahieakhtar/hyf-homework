const express = require("express");
const fs = require("fs");
const app = express();
const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/data/reviews.json"));
const reservations = JSON.parse(fs.readFileSync(__dirname + "/data/reservations.json"));

//Error handling
//Middleware

app.get('/', (req, res, next) => {
    res.status(404);
    res.send('Error no page found');
    next()
});

//Setting of routes
//Respond with the json for all the meals. For each meal, if there are reviews matching it's meal ID, add these reviews to each meal in the form of an array. 

app.get("/meals", (req, res, next) => {
    //res.json(meals)
    meals.forEach(meal => {
        meal.reviews = [];
        for (let review of reviews) {
            if (meal.id === review.mealId) {
                meal.reviews.push(review);
            }
        };
    });
    res.json(meals);
    next()
});
//Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
app.get("/cheap-meals", (req, res, next) => {
    const cheapMeals = meals.filter(meal =>
        meal.price < 70)
    res.json(cheapMeals);
    next()
})
// Respond with the json for all the meals(including it's reviews) that can fit lots of people

app.get("/large-meals", (req, res, next) => {
    const largeMeals = meals.filter(meal => meal.maxNumberOfGuests >= 10)
    res.json(largeMeals);
    next()
})
// Respond with the json for a random meal (including it's reviews)
app.get("/meal", (req, res, next) => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    res.json(randomMeal);
    next()
})
// Respond with the json for all reservations
app.get("/reservations", (req, res, next) => {
    res.json(reservations)
    next()
})
// Respond with the json for a random reservation
app.get("/reservation", (req, res, next) => {
    const randomReservation = reservations[Math.floor(Math.random() * reservations.length)];
    res.json(randomReservation);
    next()
})
app.listen(3000, () => (console.log('server starting at port 3000')));
