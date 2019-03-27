var mysql = require("mysql");
var inquirer = require("inquirer");
var chalk = require("chalk");

console.log(chalk.cyanBright("Bamazon Customer Working"));


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

   connection.query("SELECT * FROM products", function(err, res){
      if (err) return console.log(err);

      for(var i = 0; i < res.length; i++) {
         console.log(res[i].item_id, res[i].product_name, res[i].price);
      }
      inquirer.prompt ([
         {
            type: "input",
            name: "askId",
            message: "Please enter the ID of the item you'd like to purchase"

         },
         {
            type: "input",
            name: "quantity",
            message: "Please enter the quantity you would like to purchase"
         }
      ]).then(function(answer){
         console.log(answer); 
         connection.query("SELECT stock_quantity FROM products WHERE ?", 
         { item_id: answer.askId},
         function(err, res){
            if (err) return console.log(err);
            console.log(res);

            if(res[0].stock_quantity >= answer.quantity) {
               console.log(chalk.magentaBright("Good news, quantity available!"));
               
            }else {
               console.log(chalk.red("Sorry, out of stock"));
            }
            connection.end();
         })
         
      })
     
   })
});


   


