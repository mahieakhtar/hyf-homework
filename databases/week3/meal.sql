-- Meal
-- Get all meals
SELECT * FROM meal;
-- Add a new meal
INSERT INTO meal(title,description,location,_when,max_reservations,price,created_date)   
VALUES('pizza', 'veg pizza with olive', 'fredrickberg', '2019-11-30', 3, '50.35', '2019-11-26');
-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET title = 'biryani', description = 'rice,chicken,spices' WHERE id = 1;
-- Delete a meal with any id, fx 1
-- INSERT INTO meal(title,description,location,_when,max_reservations,price,created_date) VALUES('pakoda','veg onion pakodas','home','2019-11-30',3,'35.15',now());
DELETE FROM meal WHERE id = 2;