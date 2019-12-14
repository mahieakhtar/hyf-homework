CREATE DATABASE meal_sharing_db;

USE meal_sharing_db;

-- Meal table
CREATE TABLE meal
(
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR (255) NOT NULL,
description TEXT NULL DEFAULT NULL,
location VARCHAR  (255) NOT NULL,    
`when` DATETIME NOT NULL,
max_reservations INT(10),  
price DECIMAL(5,2),
created_date DATETIME NOT NULL,
PRIMARY KEY (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    -- Reservation table
CREATE TABLE reservation
    (
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,         
number_of_guests INT(10) NOT NULL,              
meal_id INT(10) UNSIGNED NOT NULL,           
created_date DATETIME NOT NULL,
PRIMARY KEY(id),             
CONSTRAINT fk_meal_id FOREIGN KEY(meal_id) REFERENCES meal (id) ON  DELETE CASCADE              
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
       
   -- Review table
CREATE TABLE review (  
id INT(10)  UNSIGNED NOT NULL AUTO_INCREMENT,                    
title VARCHAR (255) NOT NULL,                       
description TEXT NOT NULL,
meal_id INT(10) UNSIGNED NOT NULL,                      
stars INT(10) NOT NULL,                       
created_date DATETIME NOT NULL,
PRIMARY KEY(id),                     
CONSTRAINT fk_meal_id_review FOREIGN KEY(meal_id) REFERENCES reservation(meal_id) ON DELETE CASCADE                               
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- change column name on meal table          
ALTER TABLE meal
CHANGE COLUMN _when `when` DATETIME NOT NULL;
