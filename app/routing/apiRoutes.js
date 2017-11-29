let friends = require("../data/friends.js");


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);

    })

    app.post('/api/friends', function (req, res) {
        //        friends.push(req.body)
        let newScores = req.body.scores;
        console.log(newScores);
        let prevLeast = 1000;
        let match;
        friends.forEach(function (e) {

            let currentTotal = 0;
            console.log("prev", prevLeast);
            for (let i = 0; i < e.scores.length; i++) {
                let a = parseInt(e.scores[i]);
                let b = parseInt(newScores[i]);
                let difference = Math.abs(a - b);
                currentTotal += difference;
            console.log("current", currentTotal)            }

            if (currentTotal < prevLeast) {
                prevLeast = currentTotal;
                match = e;
                console.log(match)
            }
        })
        res.send(match)
    })
}
