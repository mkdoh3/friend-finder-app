let friends = require("../data/friends.js");


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);

    })

    app.post('/api/friends', function (req, res) {
        //        friends.push(req.body)
        let newScores = req.body.scores;
        console.log(newScores);
        let leastTotal = 1000;
        let currentTotal = 0;
        let match;
        friends.forEach(function (e) {
            for (let i = 0; i < e.scores.length; i++) {
                let a = parseInt(e.scores[i]);
                let b = parseInt(newScores[i]);
                let difference = Math.abs(a + b);
                console.log("e.scores", a);
                console.log("newScores", b);
                console.log("abs difference", difference)
                currentTotal += difference;
            }
            if (currentTotal < leastTotal) {
                leastTotal = currentTotal;
                match = e;
                console.log("current", currentTotal);
                console.log("least", leastTotal);
                console.log("match", match);
            }
        })
        res.send(match)
    })
}
