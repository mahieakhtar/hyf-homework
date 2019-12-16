const express = require("express");
const route = express.Router();
const fs = require("fs");
const mealsData = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
console.log(mealsData);

//Respond with the json for all the meals
/*route.get("/", (req, res) => {
    res.send(mealsData);    
});*/
route.get("/meals", (req, res) => {
    res.json(mealsData);
    
});
//Respond with the json for the meal with the corresponding id
route.get("/:id", (req, res) => {
	const { id } = req.params;
	const mealsId = meals.filter(meal => {
		return meal.id === parseInt(id);
	});
	res.send(mealsId);
});
//Get meals that has a price smaller than maxPrice
route.get("/api/meals", (req, res) => {
    const {maxPrice} = req.query
    console.log(req.query.maxPrice); 
    if(maxPrice){    
        const mealPrice = meals.filter(meal => {
            return meal.price <= parseInt(maxPrice);        
        });    
        res.send(mealPrice);
    }	
});
//Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
route.get("/api/meals", (req, res) => {
    const {title} = req.query
    console.log(req.query.title)
    if(title){    
	const mealTitle = meals.filter(meal => {
    return meal.title.toLowerCase().includes(title.toLowerCase());        
    });    
    res.send(mealTitle);
}
});	
//Get meals that has been created after the date
route.get("/api/meals", (req, res) => {
    const {createdAfter} = req.query   
    console.log(req.query.createdAfter);
    if(createdAfter){    
     const createdAfterDate = meals.filter(meal => {
    return meal.createdAt >= createdAfter;        
        });    
    res.send(createdAfterDate);
    }
});
//Only specific number of meals
route.get("/api/meals", (req, res) => {	
const {limit} = req.query   
console.log(req.query.limit);
if(limit){    
	const limitedMeal = meals.slice(0, limit);    
    res.send(limitedMeal);
}
});
module.exports = route;
