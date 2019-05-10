var friends = require("../data/friends.js");
//var match = require("../data/friends.js");

module.exports = function (app) {

    app.post('/api/friends', (req, res) => {
        var newFriend = req.body;
        //let match;

        var userTotal = 0;
        let friendTotals = [];
        for (var i = 0; i < newFriend.scores.length; i++) {
            userTotal += Math.abs(parseInt(newFriend.scores[i]));
            
            friendTotals.push(parseInt(friends[0].scores[i]) - userTotal);
        };

        // for (var j = 0; j < friends.length; j++) {
        //     let holder = friends[j];
            
        // };
        for(var k = 0; k < friends[k].scores.length; k++){
                //friendTotals.push(Math.abs(parseInt(friends[k].scores[k]) - userTotal));
                let holder; 
                
            };
        var match = Math.min(friendTotals);

        //friends.push(newFriend);
        
        //res.json(friends[match]);
        res.json(friendTotals)
    });

    app.get('/api/friends', (req, res) => {
        return res.json(friends);
    });
};