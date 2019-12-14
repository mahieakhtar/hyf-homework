-- Reservation
-- Get all reservations
SELECT * FROM reservation;
-- Add a new reservation
INSERT INTO reservation(number_of_guests,meal_id,created_date) VALUES(3,1,now());
-- Get a reservation with any id, fx 1
SELECT * FROM reservation where id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET number_of_guests = 5 where id = 1;
-- Delete a reservation with any id, fx 1
-- INSERT INTO reservation(number_of_guests,meal_id,created_date) VALUES(8,1,now());
DELETE FROM reservation where id = 4;
