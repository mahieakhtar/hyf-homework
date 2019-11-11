USE hyf_db_lesson1;

-- 1. Find out how many tasks are in the task table
SELECT COUNT(*)
FROM task;
-- 2.Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*)
FROM TASK
WHERE due_date is null;
-- 3.Find all the tasks that are marked as done
SELECT task.title, status.name
FROM task INNER JOIN status ON task.status_id = status.id
WHERE status.name ='Done';
-- 4.Find all the tasks that are not marked as done
SELECT task.title, status.name
FROM task INNER JOIN status ON task.status_id = status.id
WHERE status.name !='Done';
-- 5.Get all the tasks, sorted with the most recently created first
SELECT *
FROM task
ORDER BY CREATED desc;
-- 6.Get the single most recently created task
SELECT *
FROM task
ORDER BY CREATED desc LIMIT 1;
-- 7.Get the title and due date of all tasks where the title or description contains database
 SELECT task
.title,task.due_date
 FROM task WHERE title LIKE '%database%' OR description LIKE '%database%';
-- 8.Get the title and status (as text) of all tasks 
SELECT task.title AS new_title, status.name AS new_status
FROM task
    INNER JOIN status ON task.status_id = status.id;
-- 9.Get the name of each status, along with a count of how many tasks have that status
SELECT status.name AS  status_name , count(task.id) AS task_count
FROM task
    INNER JOIN status ON status.id = task.status_id
group by status_id;
-- 10.Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name AS status_name, count(*) AS task_count
FROM task
    INNER JOIN status ON status.id = task.status_id
GROUP BY status_id
ORDER BY task_count DESC;


