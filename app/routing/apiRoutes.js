var friends = require("../data/friends.js");
var match = require("../data/friends.js");

module.exports = function (app) {

    app.post('/api/friends', (req, res) => {
        var newFriend = req.body;
        let match;

        function difference(friendScores, userScores) {
            var userTotal;
            let friendTotals =  [];
            for (var i = 0; i < userScores.scores.length; i++) {

                userTotal += Math.abs((userScores.scores[i]));
                    return userTotal;
            };
            for (var j = 0; j < friendScores.scores.length;j++){
                friendTotals.push(Math.abs(friendScores.scores[i] - userTotal));
            };
            return match = Math.min(friendTotals);
        }

        difference(friends, newFriend);

        //friends.push(newFriend);

        res.json(friends[math]);
    });

    app.get('/api/friends', (req, res) => {
        return res.json(friends);
    });
};