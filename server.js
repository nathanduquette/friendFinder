// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

// Dependencies
var express    = require('express');
var path 	   = require('path');
var bodyParser = require('body-parser');

// Sets up the Express App
var app  = express();
var PORT = process.env.PORT || 3000;

// Express uses body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json());
// app.use(bodyParser.json({type:"application/vnd.api+json"}));

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listen
app.listen(PORT, function() {
    // console.log("App listening on PORT " + PORT);
});
