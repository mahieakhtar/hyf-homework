const express = require("express");
const fs = require("fs");
const app = express();
const meals = require("./routes/meals");
const reservations = require("./routes/reservations");
const reviews = require("./routes/reviews");

/*app.get('/', (req, res, next) => {
    res.send("ok");
    next()
}); */
app.get('/meals', meals);
app.get('/reservations', reservations);
app.get('/reviews', reviews);

app.listen(3000, () => (console.log('server starting at port 3000')));

