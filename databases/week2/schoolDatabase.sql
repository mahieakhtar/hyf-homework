-- Create a new database containing the following tables:
-- Class: with the columns: id, name, begins (date), ends (date)
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
create database school_db;
use school_db;
CREATE TABLE Class
(
    id INT(10)
    UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR
    (255) NOT NULL,
  begins DATE,
  ends DATE,
  PRIMARY KEY
    (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE Student
    (
        id INT(10)
        UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR
        (255) NOT NULL,email VARCHAR
        (255) NULL,
  phone VARCHAR
        (255) NULL,
class_id INT
        (10) UNSIGNED NOT NULL,
  INDEX
        (name),
  PRIMARY KEY
        (id),
  CONSTRAINT fk_class FOREIGN KEY
        (class_id) REFERENCES Class
        (id) ON
        DELETE CASCADE
) ENGINE=InnoDB
        DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        -- Create an index on the name column of the student table.
        CREATE INDEX student_name ON Student (name);
        -- add new column to table Class
        ALTER TABLE Class ADD status ENUM
        ('not-started', 'ongoing', 'finished');

