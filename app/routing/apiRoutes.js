var friends = require("../data/friends.js");
var match = require("../data/friends.js");

module.exports = function(app){

app.post('/api/friends', (req,res) => {
    var newFriend = req.body;

    function difference(friendScores, userScores){
        let totalDifference = 0;
        for(var i = 0; i < userScores.scores.length; i++){
            totalDifference += (friendScores.scores[i] - userScores.scores[i])
            
    }
    }

    
    friends.push(newFriend);

    res.json(newFriend);
});

app.get('/api/friends', (req, res) => {
    return res.json(friends);
});
};