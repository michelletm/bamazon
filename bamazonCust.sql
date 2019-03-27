DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER (4) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (30) NOT NULL,
  department_name VARCHAR (30) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INTEGER (4) NOT NULL,
	PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT into products (product_name, department_name, price, stock_quantity)
VALUES 
("Guerlain Shalimar","Fragrance","130.00","12"),
("Chanel No 5","Fragrance","150.00","10"),
("Giorgio Armani Silk","Beauty","60.00","8"),
("MAC Ruby Woo","Beauty","18.00","2"),
("YSL Opium","Fragrance","110.00","20"),
("D&G Light Blue","Fragrance","100.00","12"),
("Kat Von D Foundation","Beauty","42.00","6"),
("Frederic Malle Musc","Fragrance","390.00","5"),
("Byredo 1996","Fragrance","260.00","10"),
("Tom Ford White Suede","Frangrance","220.00","10");

