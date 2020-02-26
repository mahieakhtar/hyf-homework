
const express = require('express');
const route= express.Router();
const fs = require("fs");
const reservationsData = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));
console.log(reservationsData);

//Respond with the json for all reservations

route.get('/reservations', (req,res) => {
    res.json(reservationsData);
    });
//Respond with the json for the reservation with the corresponding id

route.get("/:id", (req, res) => {
	const { id } = req.params;
	const reservationsId = reservations.filter(reservation => {
		return reservation.id === parseInt(id);
	});
	res.send(reservationsId);
});
module.exports = route;