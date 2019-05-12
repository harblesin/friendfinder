//Pulls in the friends array
var friends = require("../data/friends.js");

//Exports the following routes as a function of app (express)
module.exports = function (app) {

    //post route that contains the logic for finding the best match
    //for the user
    app.post('/api/friends', (req, res) => {
        
        //Puts the recieved data into a variable from the req.body
        var newFriend = req.body;

        //Two reference variables for the total of the
        //user scores and an array that will contain
        //the sum of each of the friends in the used JSON
        var userTotal = 0;
        var friendTotals = [];

        //Loops through the users answer scores creating a sum
        //of all of them
        for (var i = 0; i < newFriend.scores.length; i++) {
            userTotal += parseInt(newFriend.scores[i]);
        };

        //Loops the entire friends array and calls a function
        //upon each index
        for (var l = 0; l < friends.length; l++) {

            //Sets a variable to 0 for each use in the
            //following function called for each item in
            //the friends array
            let singleTotal = 0;

            //Aforementioned function with each item of the
            //friends array being passed in one at a time, 
            //the array from above that will take each total 
            //of scores for each friend in the friends array,
            //and the reference variable used to create a sum
            //for each item in the friends array
            grabScores(friends[l], friendTotals, singleTotal);
        };

        //The function called on each item of the friends array
        function grabScores(thing, array, singleTotal) {

            //Loops through each score of the passed in friend
            for (var u = 0; u < thing.scores.length; u++) {

                //Uses the singleTotal variable to make a sum of the scores
                //for each friend
                singleTotal = parseInt(thing.scores[u]) + singleTotal;
            };

            //Creates final totalDifference and pushes
            //it into the array
            math(array, singleTotal);
        };

        //Takes in two arguments, could be called
        //on a seperate array if needed
        function math(array, singleTotal) {

            //Finds total difference for each friend score total
            //passed in, then the absoulute value of such,
            //and pushes it into the final array holding
            //all the differences
            array.push(Math.abs(singleTotal - userTotal));
        };

        //Uses the index of whatever friend score total is the lowest
        //reference the correct friend in the array
        var match = friendTotals.indexOf(Math.min(...friendTotals));

        //returns the friend with best match
        res.json(friends[match]);
    });

    //Quiet gentle GET route at the very bottom who lets you
    //see the entire json if you need it no rush
    app.get('/api/friends', (req, res) => {
        return res.json(friends);
    });
};