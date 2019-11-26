-- Review
-- Get all reviews
SELECT * FROM review;
-- Add a new review
INSERT INTO review(title,description,meal_id,stars,created_date) VALUES('good','delecious meal',1,4,now());
-- Get a review with any id, fx 1
SELECT * FROM review where id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET title = 'bad',description = 'Not a good food', stars = 2 where id = 1;
-- Delete a review with any id, fx 1
-- INSERT INTO review(title,description,meal_id,stars,created_date) VALUES('normal','healthy food',1,3,now());
DELETE FROM review WHERE id = 2;