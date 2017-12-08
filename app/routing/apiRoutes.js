let friends = require("../data/friends.js");


module.exports = function (app) {


    //need to add a home route!
    //    router.get("/", function (req, res) {


    app.get('/api/friends', function (req, res) {
        res.json(friends);

    })

    app.post('/api/friends', function (req, res) {
        let newScores = req.body.scores;
        //prev set to 1000 to ensure first go will always be a new 'prevLeast'
        let prevLeast = 1000;
        let match;
        friends.forEach(function (e) {
            //for each obj in the friends array (e), iterate through each scores array and get the abs difference between each friends scores and the newScores, 
            //add the abs dif to the current total and compare it to the prevLeast. When a new prevLeast is found, make that current friend obj the match
            let currentTotal = 0;
            for (let i = 0; i < e.scores.length; i++) {
                let a = parseInt(e.scores[i]);
                let b = parseInt(newScores[i]);
                let difference = Math.abs(a - b);
                currentTotal += difference;
            }

            if (currentTotal < prevLeast) {
                prevLeast = currentTotal;
                match = e;
            }
        })
        res.json(match)
    })
}
