-- Create a new database containing the following tables: 
-- Class: with the columns: id, name, begins (date), ends (date) 
-- Student: with the columns: id, name, email, phone, class_id (foreign key) 
CREATE DATABASE school_db; 

USE school_db; 

CREATE TABLE class 
  ( 
     id     INT(10) UNSIGNED NOT NULL auto_increment, 
     name   VARCHAR (255) NOT NULL, 
     begins DATE, 
     ends   DATE, 
     PRIMARY KEY (id) 
  ) 
engine = innodb 
DEFAULT charset = utf8mb4 
COLLATE = utf8mb4_unicode_ci; 

CREATE TABLE student 
  ( 
     id       INT(10) UNSIGNED NOT NULL auto_increment, 
     name     VARCHAR (255) NOT NULL, 
     email    VARCHAR (255) NULL, 
     phone    VARCHAR (255) NULL, 
     class_id INT (10) UNSIGNED NOT NULL, 
     INDEX (name), 
     PRIMARY KEY (id), 
     CONSTRAINT fk_class FOREIGN KEY (class_id) REFERENCES class (id) ON DELETE 
     CASCADE 
  ) 
engine = innodb 
DEFAULT charset = utf8mb4 
COLLATE = utf8mb4_unicode_ci; 

-- Create an index on the name column of the student table. 
CREATE INDEX student_name ON student (name); 

-- add new column to table Class 
ALTER TABLE class 
  ADD status ENUM ('not-started', 'ongoing', 'finished'); 