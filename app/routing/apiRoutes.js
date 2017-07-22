// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//Dependencies
var friends = require('../data/friends.js');

module.exports = function(app) {

    //Tables data route
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    //Create new friend
    app.post("/api/friends", function(req, res) {

        //Empty array to push matched friend
        var bestFriend = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userScores = req.body.scores;
        var totalDifference = userScores.reduce((sum, next) => sum + parseInt(next), 0);



        //Loop through friends object and compare
        for (var i = 0; i < friends.length; i++) {

            totalDifference = 0;

            //Loop through the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {
                //calculating the difference between each score and sum them into totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                //Find best friend match
                if (totalDifference <= bestFriend.friendDifference) {

                    bestFriend.name = friends[i].name;
                    bestFriend.photo = friends[i].photo;
                    bestFriend.friendDifference = totalDifference;

                }
            }
        }

        //Pushing new friend to friends API
        friends.push(userData);

        res.json(bestFriend);
        
    });

}