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

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("1","","","","");

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("2","","","","");

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("3","","","","");

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("4","","","","");

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("5","","","","");

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("6","","","","");

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("7","","","","");

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("8","","","","");

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("9","","","","");

INSERT into products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("10","","","","");

