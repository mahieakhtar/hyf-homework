const express = require('express');
const route= express.Router();
const fs = require("fs");
const reviewsData = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));
console.log(reviewsData);

//Respond with the json for all reviews

route.get('/reviews', (req,res) => {
    res.json(reviewsData);
    });
//Respond with the json for the review with the corresponding id

route.get("/:id", (req, res) => {
	const { id } = req.params;
	const reviewsId = reviews.filter(review => {
		return review.id === parseInt(id);
	});
	res.send(reviewsId);
});
module.exports = route;