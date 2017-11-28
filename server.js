const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

require("./app/routing/apiRoutes")(app);
//require("./app/routing/htmlRoutes")(app);



app.use(express.static(path.join(__dirname, '/app/public'), {
    index: false,
    extensions: ['html']
}));






app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
