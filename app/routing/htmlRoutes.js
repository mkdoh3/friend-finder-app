const path = require("path");
//const express = require('express');
//const app = express();
//
//app.use(express.static("./public"))




module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))

    });
}
