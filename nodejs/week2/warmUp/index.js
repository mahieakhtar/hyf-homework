const express = require("express");
const route = express();

route.get("/numbers/add", (req, res) => {
	const first = Number(req.query.first);
	const second = Number(req.query.second);
	res.send(`${first + second}`); 
    
});

route.get("/numbers/multiply/:first/:second", (req, res) => {
	const first = req.params.first;
	const second = req.params.second;
	res.send(`${first * second}`);
});

route.listen(3000, () => {
	console.log("server running on port 3000");
});