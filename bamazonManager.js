var mysql = require("mysql");
var inquirer = require("inquirer");
var chalk = require("chalk");

console.log(chalk.cyanBright("Bamazon Manager Working"));

var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "password",
   database: "bamazon"
});

connection.connect(function (err) {
   if (err) throw err;
   console.log("connected as id " + connection.threadId);

   inquirer.prompt({
      type: "list",
      name: "option",
      message: "Please choose an action:",
      choices: ["VIEW PRODUCTS FOR SALE", "VIEW LOW INVENTORY", "ADD TO INVENTORY", "ADD NEW PRODUCT"]
   }).then(function (answer) {
      console.log(answer);

      if (answer.option === "VIEW PRODUCTS FOR SALE") {
         console.log(chalk.red("See all products for sale"));
         viewProduct(connection)

      } else if (answer.option === "VIEW LOW INVENTORY") {
         console.log(chalk.red("See all products with low inventory"));
         viewLowInven(connection)

      } else if (answer.option === "ADD TO INVENTORY") {
         console.log(chalk.red("You have chosen to add to inventory"));
         addInven(connection);

      } else if (answer.option === "ADD NEW PRODUCT") {
         console.log(chalk.red("You have selected to add a new product"));
         addProduct(connection);
      }
   })
})

function viewProduct(conn) {
   conn.query("SELECT * FROM products", function (err, res) {
      if (err) return console.log(err);

      for (var i = 0; i < res.length; i++) {
         console.log(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);
      }
      conn.end()
   })
}

function viewLowInven(conn) {
   conn.query("SELECT * FROM products WHERE stock_quantity < 5", function (err, res) {
      if (err) return console.log(err);

      for (var i = 0; i < res.length; i++) {
         console.log(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity);
      }
      conn.end()
   })
}

function addProduct(conn) {

   inquirer.prompt([
      {
         type: "input",
         name: "product_name",
         message: "Enter the name of the item to add"
      },
      {
         type: "input",
         name: "department_name",
         message: "Enter the category of the item to add"
      },
      {
         type: "input",
         name: "price",
         message: "Enter the price of the item to add"
      },
      {
         type: "input",
         name: "stock_quantity",
         message: "Enter quantity of the item to add"
      }
   ]).then(function (answer) {
      console.log(answer);
      
      conn.query("INSERT INTO products SET ?", answer, function(err,res){
         if (err) return console.log(err);
         console.log(res);
         conn.end()      
      })
   });
}

function addInven (conn) {
   inquirer.prompt ([
      {
         type: "input",
         name: "item_id",
         message: "Enter the item ID of the inventory to add"
      },
      {
         type: "input",
         name: "stock_quantity",
         message: "Enter the amount of items to add"
      }
   ]).then(function(answer) {
      console.log(answer);
      
      var sql = conn.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [answer.stock_quantity, answer.item_id], function(err, res){
         if (err) return console.log (sql.query);
         console.log(res);
         conn.end();
      })
   })
}
