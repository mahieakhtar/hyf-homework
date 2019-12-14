-- Additional queries
-- Now add a couple of different meals, reservations and reviews with different attributes. 
---- Meal
INSERT INTO meal(title,description,location,_when,max_reservations,price,created_date) 
VALUES('pasta', 'pesto with pasta', 'copenhagen', '2019-12-03', 4, 300.15, now());
INSERT INTO meal(title,description,location,_when,max_reservations,price,created_date) 
VALUES('fried rice', 'chinese fried rice with chicken', 'aarhus', '2019-12-04', 2, 100.15, now());
INSERT INTO meal (title,description,location,_when,max_reservations,price,created_date)  
VALUES('sandwich', 'vegetable sandwich', 'norreport', '2019-12-07', 2, 200, now());
INSERT INTO meal (title,description,location,_when,max_reservations,price,created_date)
VALUES('salat', 'chicken salat', 'copenhagen', '2019-12-05', 4, 50.30, now());
INSERT INTO meal (title,description,location,_when,max_reservations,price,created_date)  
VALUES('roll', 'chicken roll with vegetable', 'kongens nytorv', '2019-12-31', 4, 200.15, now());
INSERT INTO meal (title,description,location,_when,max_reservations,price,created_date)
VALUES('pittabread', 'pittabread with chicken', 'copenhagen', '2019-12-15', 4, 245.15, now());
--- Reservation
INSERT INTO reservation(number_of_guests,meal_id,created_date) VALUES(3, 3, now());  
INSERT INTO reservation(number_of_guests,meal_id,created_date) VALUES(2, 4, now());
INSERT INTO reservation(number_of_guests,meal_id,created_date) VALUES(4, 8, now());   
INSERT INTO reservation(number_of_guests,meal_id,created_date) VALUES(6, 10, now());   
INSERT INTO reservation (number_of_guests,meal_id,created_date) VALUES(1, 5, now());  
--- Review
INSERT INTO review(title,description,meal_id,stars,created_date) VALUES('very good', 'very delecious meal', 3, 4, now());   
INSERT INTO review(title,description,meal_id,stars,created_date) VALUES('good', 'tasty meal', 1, 4, now());    
INSERT INTO review(title,description,meal_id,stars,created_date) VALUES('not good', 'yummy', 8, 4, now());   
INSERT INTO review (title,description,meal_id,stars,created_date) VALUES('good', 'delecious meal', 1, 4, now());
INSERT INTO review (title,description,meal_id,stars,created_date) VALUES('good', 'delecious meal', 5, 5, now());
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal where price < 100;
-- Get meals that still has available reservations
SELECT * FROM meal JOIN reservation ON meal.id = reservation.meal_id;
-- Get meals that partially match a title. 
SELECT * FROM meal WHERE title like'%pa%';
-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2019-11-20' AND '2019-11-26';
-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal limit 5;
-- Get the meals that have good reviews
SELECT * FROM meal JOIN review ON meal.id = review.meal_id WHERE review.stars > 3;
-- Get reservations for a specific meal sorted by created_date
SELECT * FROM meal JOIN reservation ON meal.id = reservation.meal_id WHERE reservation.created_date;
-- Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(review.stars) AS average_no_of_stars
FROM meal JOIN review ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY average_no_of_stars;	 
    