var friends = require("../data/friends.js");
//var match = require("../data/friends.js");

module.exports = function (app) {

    app.post('/api/friends', (req, res) => {
        var newFriend = req.body;
        //let match;

        var userTotal = 0;
        var friendTotals = [];
        
        for (var i = 0; i < newFriend.scores.length; i++) {


            userTotal += parseInt(newFriend.scores[i]);
            
            //friendTotals.push(parseInt(friends[0].scores[i]) - userTotal);
            
        };

        if(i === 10){
            for(var l = 0; l < friends.length; l++){

            let singleTotal = 0;
            grabScores(friends[l], friendTotals, singleTotal)
            
        }

        }

        
        function grabScores(thing, array, singleTotal){
            
            for(var u = 0; u < thing.scores.length; u++){
                
                console.log(thing.scores[u])
                singleTotal = parseInt(thing.scores[u]) + singleTotal;
            }
            math(array, singleTotal)
            //return singleTotal;
        }

        function math(array, singleTotal){
            console.log(singleTotal)
            array.push(Math.abs(singleTotal - userTotal));
        }
        // for (var j = 0; j < friends.length; j++) {
        //     let holder = friends[j];
            
        // };
        // for(var k = 0; k < friends[k].scores.length; k++){
        //         //friendTotals.push(Math.abs(parseInt(friends[k].scores[k]) - userTotal));
        //         let holder; 
                
        //     };
        //friendTotals.push()
        var match = friendTotals.indexOf(Math.min(...friendTotals));

        //friends.push(newFriend);
        
        //res.json(frie);
        res.json(friends[match]);
    });

    app.get('/api/friends', (req, res) => {
        return res.json(friends);
    });
};