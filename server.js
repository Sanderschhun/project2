var express = require("express");

var app = express();
var port = process.env.PORT || 8080;

//var db = require("./models/customers.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(port, function() {
    console.log(" lisening on port " + port);
});
