const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '/app/public'), {
    index: false,
    extensions: ['html']
}));

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname + "/app/public"
    });
});



app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
