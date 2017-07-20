// Your htmlRoutes.js file should include two routes:


// A default USE route that leads to home.html which displays the home page.

// Dependencies
var friends = require('../data/friends.js');
var path = require('path');

// Routes
module.exports = function(app) {

    // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
	// A GET Route to /survey which should display the survey page.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    // A default USE route that leads to home.html which displays the home page.
    app.use(function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/home.html"));
    })

};
