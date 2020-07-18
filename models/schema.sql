DROP DATABASE IF EXISTS customers_db;
CREATE DATABASE customers_db;
USE customers_db;

CREATE TABLE customers
(
    customerId INT NOT NULL AUTO_INCREMENT,
    customerName VARCHAR(50) NOT NULL,
    phoneNumber INT NOT NULL,
    reviews VARCHAR(2000),
    thumbsUpDown BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);