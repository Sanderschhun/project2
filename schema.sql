DROP DATABASE IF EXISTS customers_db;
CREATE DATABASE customers_db;
USE customers_db;

CREATE TABLE customers
(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(35) NOT NULL,
    last_name VARCHAR(35) NOT NULL,
    phone_number INT NOT NULL,
    comments VARCHAR(2000),
    goodVsEvil BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);