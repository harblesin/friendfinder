var friends = require("../data/friends.js")

module.exports = function(app){

app.post('/api/friends', (req,res) => {
    var newFriend = req.body;
    friends.push(newFriend);

    res.json(newFriend);
});

app.get('/api/friends', (req, res) => {
    return res.json(friends);
});
};