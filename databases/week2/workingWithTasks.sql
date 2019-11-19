use hyf_db_lesson1;
-- Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
INSERT INTO task
  (
  title,
  description,
  created,
  updated,
  due_date,
  status_id,
  user_id)
VALUES(
    'Database week2 homework',
    'Working with tasks',
    now(),
    now(),
    '2019-11-22 12:00:00',
    1,
    9
);
-- Change the title of a task with these attributes: taskID, newTitle
UPDATE task SET title = 'Database lesson2 homework' where id = 48;
-- Change the task due date with these attributes: taskID, newDueDate
UPDATE task SET due_date ='2019-11-23 12:00:00' where id = 48;
-- Change the task status with these attributes: taskID, newStatus
UPDATE task SET status_id = 2 where id = 48;
-- Mark a task as complete with this attribute: taskID
UPDATE task SET status_id = 3 where id = 48;
-- Delete task with this attribute: taskID
DELETE FROM task where id = 49;
 







